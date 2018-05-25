import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="header--wrap">
          <div className="header--main--wrap">
            <span>Logo</span>
            <h1>Scotty CMS</h1>
        	</div>
          <nav>
            <ul>
              <li><a>All Shows</a></li>
              <li><a>All Series</a></li>
              <li><a>All Collection</a></li>
              <li><a>Home Rows</a></li>
              <li><a>Home Option</a></li>
              <li><a>Genres</a></li>
              <li><a>Manage Free Content</a></li>
            </ul>
          </nav>
        </div>
      </header>

    )
  }
}



export default Header;
