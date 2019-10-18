import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {

  componentDidMount() {
    const res = axios.get(`https://api.twitter.com/1.1/friends/list.json?cursor=-1&screen_name=ConnorFinnegan`)
    console.log(res)
  }

  render() {
    return (
      <div className="App">
        Hello
      </div>
    );
  }
}

export default App;
