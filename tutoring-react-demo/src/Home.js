import React from 'react';
import './Home.css';
function Home() {
  return (
    <div className="home-heading">
      <p className="title">John Doe's Portfolio Site</p>

      <link alt="" href="%PUBLIC_URL%/homepage.png" />
      <div className="homelinks">
        <a href="/tutoring-react/blackjack">
          #Blackjack Project OOP concept dive in JAVA
        </a>
        <br></br>
        <a href="/tutoring-react/contact">#Contact now!</a>
      </div>
    </div>
  );
}

export default Home;
