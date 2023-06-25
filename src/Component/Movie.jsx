import { useState, useEffect } from "react";
import axios from 'axios'

export default function Movie() {
  const [movieList, setMovieList] = useState([])
  useEffect(() => {
    axios.get("http://localhost:5000/movie").then((res) => {
      setMovieList(res.data.data.Movies)
      // console.log("movie", res.data)
    })

  }, [])
  return (
    <div className="container">
      <h1>The most 20 famous Movies are</h1>
      <div className="col-md-12 d-flex">
        {movieList.length && movieList.slice(0, 5).map((list, index) => {
          return (
            <div class="card" style={{ margin: "1rem 1rem", width: "20rem" }} >
              <div class="card-body">
                <h3 class="card-title">{list.name}</h3>
                <p class="card-text">Released date: {list.date}</p>
                <p class="card-text">Rating:{list.rating} Star</p>
              </div>
            </div>
          )
        })}
      </div>
      <div className="col-md-12 d-flex">
        {movieList.length && movieList.slice(5, 10).map((list, index) => {
          return (
            <div class="card" style={{ margin: "1rem 1rem", width: "20rem" }} >
              <div class="card-body">
                <h3 class="card-title">{list.name}</h3>
                <p class="card-text">Released date: {list.date}</p>
                <p class="card-text">Rating:{list.rating} Star</p>
              </div>
            </div>
          )
        })}
      </div>
      <div className="col-md-12 d-flex">
        {movieList.length && movieList.slice(10, 15).map((list, index) => {
          return (
            <div class="card" style={{ margin: "1rem 1rem", width: "20rem" }} >
              <div class="card-body">
                <h3 class="card-title">{list.name}</h3>
                <p class="card-text">Released date: {list.date}</p>
                <p class="card-text">Rating:{list.rating} Star</p>
              </div>
            </div>
          )
        })}
      </div>
      <div className="col-md-12 d-flex">
        {movieList.length && movieList.slice(15, 20).map((list, index) => {
          return (
            <div class="card" style={{ margin: "1rem 1rem", width: "20rem" }} >
              <div class="card-body">
                <h3 class="card-title">{list.name}</h3>
                <p class="card-text">Released date: {list.date}</p>
                <p class="card-text">Rating:{list.rating} Star</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
