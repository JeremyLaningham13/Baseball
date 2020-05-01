import React, { Component } from "react";
import "./Landing.css";

class Landing extends Component {
  render() {
    return (
      <div className="about-paragraph">
        <p>
          We are excited for the new year, and what it will bring for your child. At On Deck Baseball, we have helped 1000's of kids be succesful, and are excited to continue helping your child reach his or her goals. We have helped kids improve in Local Leagues, Move to Select, Move up in Select, play in High School, College and even the Pros. We accomplish this with our basic philosophy of teaching age appropriate lessons. We start with fundamentals and add to those skills as your child progresses. Come join us, so we can help your child reach his or her goals. Our mission is to provide the most complete baseball/softball facility, and the best customer service for players of all ages and skill levels. We feature 8 full size (70' x 12') hitting/pitching tunnels with some of the best machines on the market, training stations with tee work, soft toss, training drills, pitching and fielding practice. We have teams and players from all over Collin County for Baseball & Softball training.
        </p>
        <section className="landing-rotator-container">
          <img src="https://www.ondecksports.com/web-assets/landing-images/indoor-batting-cages/nokona-rotating.jpg" />
          <img src="https://www.ondecksports.com/web-assets/landing-images/indoor-batting-cages/all-star-sports-rotating.jpg" />
        </section>
      </div>
    );
  }
}

export default Landing