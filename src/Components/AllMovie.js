import {Link} from 'react-router-dom'

export default function AllMovie (props) {
  const content = props.datas.map((movie) =>
      <Link to={'/movie/' + movie.id} key={movie.id}>
        <div className="movie">
          <h3>{movie.title}</h3>
          <img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt={movie.title}/>
        </div>
      </Link>
  )
  return (
    <div className="allmovies">
      {content}
    </div>
  )
}