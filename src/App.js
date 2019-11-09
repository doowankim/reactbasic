import React, {Component} from 'react';
import axios from "axios";
import Movie from "./movie";
import "./App.css";


class App extends Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(
        "https://yts-proxy.now.sh/list_movies.json"
    );
    this.setState({ movies, isLoading: false });
    console.log('getmovie');
  };

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({ isLoading: false});
    // }, 6000) //timeout: 1/1000초
    this.getMovies();
    console.log("componentDidMount");
  }


  render() {
    //상수, 변수 선언하는 곳
    const {isLoading, movies} = this.state;
    console.log('render');
    return (
        //html
        //isLoading이 참이면 왼쪽 출력, 거짓이면 오른쪽 출력
        <section className="container">
          <div>
            {isLoading
                ? (
                    <div className="loader">
                      <span className="loader_text">Loading</span>
                    </div>
                ) : (
                    <div className="movies">
                      {movies.map(movie => (
                          <Movie
                              key={movie.id}
                              poster={movie.medium_cover_image}
                              summary={movie.summary}
                              year={movie.year}
                              id={movie.id}
                              title={movie.title}
                              genres={movie.genres}
                          />
                      ))}
                    </div>
                )

            }
          </div>
        </section>
    );
  }
}

export default App;