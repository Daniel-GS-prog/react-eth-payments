import React, {Component} from 'react';
import './App.css'

import Navbar from './components/Navbar.jsx';
import Landing from './components/Landing.jsx';
import Footer from './components/Footer.jsx';
import Transactions from './components/Transactions.jsx';
import Contacts from './components/Contacts.jsx';
import {users} from './components/robots.js';
import CardList from './components/CardList.jsx';
import SearchUsers from './components/SearchUsers.jsx';
import About from './components/About.jsx';
import SearchBox from './components/SearchBox.jsx';
import Card from './components/Card.jsx';
import Scroll from './components/Scroll.jsx';


class App extends Component {

  constructor() {
		super() // calls the constructor of Component.
		this.state = {
			users: [],
			searchfield: ''
		}
	}

  componentDidMount() {
		// fetch is a method of the window object:
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({users: users}));	
	}

  onSearchChange = (event) => {

    this.setState({ searchfield: event.target.value })
  }

  render() {

    const {users, searchfield} = this.state;

    const filteredUsers = users.filter(user => {
      return user.name.toLowerCase().includes(searchfield.toLowerCase());
    })

      return (
    
        <div id='home' className='box'>
          <Navbar />
          <Landing />
          <div id="transactions" className='h4'></div>
          <Transactions />


          <div id="users" className='h3'></div>
          <h1  className=' pa20'>Get in touch with other users</h1>
          <div  className='tc ma10 flex flex-column items-center justify-center'>
            
            <SearchBox className='' SearchChange={this.onSearchChange}/>
          
            <Scroll>
              <CardList users={filteredUsers}/>
            </Scroll>
          
          </div>
          
          
          
          <About />
          <Footer />
          
          
          
        </div>
    
       
      );

    }
  }
  
export default App;
