import React, {Component} from 'react';


class App extends Component {
  state = {
    isLoading: true,
    movies: []
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false});
    }, 6000) //timeout: 1/1000초
  }


  render() {
    //상수, 변수 선언하는 곳
    const {isLoading} = this.state;
    return (
        //html
        //isLoading이 참이면 왼쪽 출력, 거짓이면 오른쪽 출력
        <div>
          {isLoading ? "Loading..." : "We are ready"}
        </div>
    );
  }
}

export default App;