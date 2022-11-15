import React from 'react'
import ApiService from '../Services/api.service'
import AllMovie from '../Components/AllMovie'
import NothingHere from '../Components/NothingHere'

const apiService = new ApiService()

export default class HomeView extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: null,
      search: ''
    }
  }
  async searchMovies (search) {
    const res = await apiService.getSearch(search)
    const movies = await res.json()
    this.setState(() => {
      return {
        data: movies.results
      }
    })
  }
  render () {
    const datas = this.state.data
    if (this.state.search !== '') {
      this.searchMovies(this.state.search)
    }
    return (
      <div>
        <input placeholder='Rechercher votre film' type='text' value={this.state.search} onChange={e => this.setState({search: e.target.value})}/>
        {datas !== null ? <AllMovie datas={datas}/> : <NothingHere/>}
      </div>
    )
  }
}