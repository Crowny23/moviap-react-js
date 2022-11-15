import React from 'react'
import ApiService from '../Services/api.service'
import AllMovie from '../Components/AllMovie'

const apiService = new ApiService()
let totalPages = 2

export default class HomeView extends React.Component {
  constructor (props) {
    super(props)
    this.myRef = React.createRef()
    this.state = {
      data: [],
      page: 1
    }
  }
  async allMovies (page) {
    const res = await apiService.getMovies(page)
    const movies = await res.json()
    totalPages = movies.total_pages
    this.setState((prevState) => {
      return {
        data: prevState.data.concat(movies.results)
      }
    })
  }
  up () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  componentDidMount() {
    if (this.myRef.current != null) {
      const handleIntersect = entries => {
        if (entries[0].isIntersecting) {
          if (totalPages > this.state.page) {
            this.setState((prevState) => {
              return {
                page: prevState.page + 1
              }
            })
            this.allMovies(this.state.page)
          }
        }
      }
  
      const newObserver = new IntersectionObserver(handleIntersect)
      newObserver.observe(this.myRef.current)
    }
  }
  render () {
    const datas = this.state.data
    if (datas !== []) {
      return (
        <div>
            <AllMovie datas={datas}/>
            <div id="observer">
              <div ref={this.myRef} className="watcher" >
                <div className="loading">Chargement</div>
                <div onClick={this.up} className="btn-up">Up</div>
              </div>
            </div>
        </div>
      )
    }
  }
}
