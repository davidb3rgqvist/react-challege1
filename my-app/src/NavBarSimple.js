import React, { Component } from 'react';
import styles from './components/css/NavBarSimple.module.css';

class NavBarSimple extends Component {
    constructor(props) {
      super(props);
      this.state = {
        message: 'Welcome, Guest!',
        isLoggedIn: false
      };
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState((prevState) => ({
        isLoggedIn: !prevState.isLoggedIn,
        message: prevState.isLoggedIn ? 'Welcome, Guest!' : 'Welcome, User!'
      }), () => {
        console.log(this.state.message);
      });
    }
  
    render() {
      return (
        <div className={styles.NavBar}> {/* Use styles.NavBar here */}
          <h1>My Gallery</h1>
          <span>{this.state.message}</span>
          <button onClick={this.handleClick}>
            {this.state.isLoggedIn ? 'Logout' : 'Login'}
          </button>
        </div>
      );
    }
}

export default NavBarSimple;
