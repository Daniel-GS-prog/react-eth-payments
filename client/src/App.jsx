import React, {Component} from 'react';
import './App.css'

import Navbar from './components/Navbar/Navbar.jsx';
import Landing from './components/Landing/Landing.jsx';
import Footer from './components/Footer/Footer.jsx';
import Transactions from './components/Transactions/Transactions.jsx';
import CardList from './components/CardList/CardList.jsx';
import About from './components/About/About.jsx';
import SearchBox from './components/SearchBox/SearchBox.jsx';
import Scroll from './components/Scroll/Scroll.jsx';
import Signin from './components/Signin/Signin.jsx';
import Registration from './components/Registration/Registration.jsx';


class App extends Component {

  constructor() {
		super() // calls the constructor of Component.
		this.state = {
			users: [],
			searchfield: ''
		}
	}

  componentDidMount() {
		
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({users: users}));	
	}

 

  onSearchChange = (event) => {

    this.setState({ searchfield: event.target.value })
  }

  render() {

    const {users, searchfield, page} = this.state;

    const filteredUsers = users.filter(user => {
      return user.name.toLowerCase().includes(searchfield.toLowerCase());
    })

      return (
    
        <div id='home' className='box'>
        <Navbar />
        <Signin />
          
          {/* <Landing /> */}

          {/* for spacing */}
          {/* <div id="transactions" className='ma3'></div> */}
          {/* <Transactions /> */}

          {/* for spacing */}
          {/* <div id="users" className='ma5'></div>  */}
          
          {/* <h1   className='ma5mv40 tc'>Get in touch with other users</h1> */}

          {/* div to present the users array */}
          {/* <div  className='static tc ma10 flex flex-column items-center justify-center pt10'> */}
            
            {/* <SearchBox className='pt10' SearchChange={this.onSearchChange}/> */}
          
            {/* <Scroll className="pt10"> */}
              {/* <CardList className="pt10 fixed " users={filteredUsers}/> */}
            {/* </Scroll> */}
          
          {/* </div> */}

          {/* <About /> */}
          {/* <Footer /> */}
        
        </div>
    
       
      );

    }
  }
  
export default App;
