import React, { Component, Fragment } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import ErrorBoundary from '../Components/ErrorBoundary';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {this.setState({ robots: users })});
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
    }

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.username.toLowerCase().includes(searchfield.toLowerCase())
    })
    return !robots.length? 
      <h1>Loading</h1> :
      (
        <Fragment>
          <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox searchChange={ this.onSearchChange }/>
            <Scroll>
              <ErrorBoundary>
                <CardList robots={filteredRobots}/>
              </ErrorBoundary>
            </Scroll>
          </div>
        </Fragment>
      );    
  }
}


export default App;