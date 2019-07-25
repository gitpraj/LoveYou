import React, { Component } from 'react';
import Background from '../images/love.jpg';
//import Background from 'https://lh3.googleusercontent.com/MOf9Kxxkj7GvyZlTZOnUzuYv0JAweEhlxJX6gslQvbvlhLK5_bSTK6duxY2xfbBsj43H=w300'
import './Home.css';

export class Home extends Component {
  displayName = Home.name

  render() {
      return (
          <div id="out">
            <div className="background" style={{backgroundImage: "url("+ Background +")"}}>
            </div>
            <div className="bg-text">
              <h1>I LOVE YOU</h1>
              <h2>forever and a day</h2>
              <h2>.....</h2>
            </div>
          </div>
    );
  }
}
