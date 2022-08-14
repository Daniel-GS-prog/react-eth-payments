import React, {Component} from 'react';
import './App.css'

import Navbar from './components/Navbar.jsx';
import Landing from './components/Landing.jsx';
import Footer from './components/Footer.jsx';
import Transactions from './components/Transactions.jsx';
import Contacts from './components/Contacts.jsx';
import {robots} from './components/robots.js';
import CardList from './components/CardList.jsx';
import SearchUsers from './components/SearchUsers.jsx';
import About from './components/About.jsx';
import SearchBox from './components/SearchBox.jsx';
import Card from './components/Card.jsx';


class App extends Component {

  constructor() {
		super() // calls the constructor of Component.
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

  componentDidMount() {
		// fetch is a method of the window object:
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({robots: users}));	
	}

  onSearchChange = (event) => {

    this.setState({ searchfield: event.target.value })
  }

  render() {

    const {robots, searchfield} = this.state;

    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })

      return (
    
        <div id='home' className='box'>
          <Navbar />
          <Landing />
          <Transactions />
          <Contacts />
          
          
          <div>
          <SearchBox className='' SearchChange={this.onSearchChange}/>
        <CardList robots={filteredRobots}/>
      </div>
          
          
          <About />
          <Footer />
          
          
          
        </div>
    
       
      );

    }
  }
  
export default App;
