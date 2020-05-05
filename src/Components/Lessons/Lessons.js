import React, { Component } from 'react'
import "./Lessons.scss";

export class Lessons extends Component {
    render() {
        return (
            <div className='lessons-container'>
                <h1>Lessons Information</h1>
                <h3>We meet your schedule!</h3>
                <p>We do Half hour and hour lessons.  We usually cover one item per half hour. <br/>  For example, in an hour lesson we could work on Hitting, and Pitching.  We do Hour lessons on one item, when needed.<br/>  We use Video Analysis to help the student understand and visualize where they are, and what they need to work on.</p>
                <p>When you’re looking for a baseball/softball instructor for your child, what should you look for?<br/> Many instructors will highlight their playing careers and say they were great players or they played at a high level of baseball.<br/> Playing experience is good and being an all-star caliber player is great, but many of these "instructors" lack the skills necessary to <br/>teach youth players the skills that they need to improve their game. All of our On Deck Baseball instructors have played baseball. Some of our coaches have played at the college and professional level. <br/>But our coaches also have a combined 80+ years experience instructing youth baseball and softball players. In addition they have coached thousands of youth baseball and softball games at all age levels.</p>
                <p>On Deck Baseball coaches offer high quality baseball and softball lessons. Our instructors can work with recreational players that are new to the game, select players, high school and college players that are looking to reach the next level of baseball. We’ve even had instructors work with professional baseball players. Regardless of the level, On Deck Baseball instructors will assess your players’ skills, listen to their goals, and then provide an age appropriate plan to improve their skills so they can reach their goals.</p>
                <h2 className='lessons-info'>Lesson Details</h2>
                <h4>Pitching Lessons</h4>
                <ul>Pitching Lessons are customized based on each player's age and skills.  The following are some of the skills that are covered in pitching lessons:
                    <li>Throwing and Pitching Drills</li>
                    <li>Gripping the 4-seam Fastball</li>
                    <li>Pitching from the Full Wind-up and Stretch</li>
                    <li>"Spot" Pitching</li>
                    <li>How to throw a Change-up</li>
                    <li>Pick off moves</li>
                    <li>"Mental side" of Pitching</li>
                    <li>Video Analysis of Pitching Mechanics</li>
                </ul>
            </div>
        )
    }
}

export default Lessons
