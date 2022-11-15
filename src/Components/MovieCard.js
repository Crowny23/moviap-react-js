import React from 'react'
import ApiService from '../Services/api.service'
import { useParams } from 'react-router-dom'

const apiService = new ApiService()

function withParams (Components) {
  return props => <Components params={useParams()}/>
}

class MovieCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: null,
      id: 550
    }
  }
  
  async MovieCard (id) {
    const res = await apiService.getMovie(id)
    const movie = await res.json()
    this.setState(() =>{
      return {
        data: movie
      }
    })
  }
  
  formatDate (value) {
    const date = new Date(value)
    return date.toLocaleDateString('fr')
  }
  
  componentDidMount() {
    let params = this.props.params
    this.MovieCard(params.id)
  }

  render () {
    const data = this.state.data
    if (data != null) {
      return (
        <div>
          <h2>{data.title}</h2>
          <h3>{this.formatDate(data.release_date)}</h3>
          <div>
            <div>
              {/* ul genre */}
              <p>{data.overview}</p>
            </div>
            <img src={'https://image.tmdb.org/t/p/w500' + data.poster_path} alt={data.title}/>
          </div>
        </div>
      )
    }
  }
}

export default withParams(MovieCard)