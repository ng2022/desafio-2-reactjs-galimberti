import logo from './images/logo-ecommerce.png';
import React from "react";

function NavBar () {
    return (
        <header className="navBar">
          <div>
          <img src={logo} className="logo-ecommerce" alt="logo" />
          </div>
          <nav>
            <ul>
              <li>
              <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Home</a>
              </li>
              <li>
                <a className="App-link" href="https://www.amazon.com/" target="_blank" rel="noopener noreferrer">Shop</a>
              </li>
              <li>
              <a className="App-link" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Contact</a>
              </li>
            </ul>
          </nav>
        </header>
    );
  }

  export default NavBar;