import React, {Component} from 'react';


class App extends Component {

  // 함수, 상태 값, 변수 기타등등 선언

  state = {
    count: 0
  };
  add = () => {
    this.setState(current => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState(current => ({ count: current.count - 1 }));
  };

  render() {
    //상수, 변수 선언하는 곳
    return (
        //html
        <div>
          {/*{}: javascript를 불러옴. this: App.js를 뜻함 */}
          <h1>The number is: {this.state.count}</h1>
          <button onClick={this.add}>add</button>
          <button onClick={this.minus}>minus</button>
        </div>
    );
  }
}

export default App;