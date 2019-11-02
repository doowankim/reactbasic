import React, {Component} from 'react';
import axios from "axios";
import Movie from "./movie";


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
  };

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({ isLoading: false});
    // }, 6000) //timeout: 1/1000초
    this.getMovies();
  }


  render() {
    //상수, 변수 선언하는 곳
    const {isLoading, movies} = this.state;
    return (
        //html
        //isLoading이 참이면 왼쪽 출력, 거짓이면 오른쪽 출력
        <div>
          {isLoading
              ? "Loading..."
              : movies.map(movie => (
                 <Movie
                  key={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                 />

              ))}
        </div>
    );
  }
}

export default App;