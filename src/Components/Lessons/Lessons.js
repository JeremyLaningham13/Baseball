import React, { Component } from 'react'
import "./Lessons.scss";

export class Lessons extends Component {
    render() {
        return (
            <div className='lessons-container'>
                <h1>Lesson Information</h1>
                <h3>We meet your schedule!</h3>
                <div className='lesson-about'>
                <p>We do Half hour and hour lessons.  We usually cover one item per half hour. For example, in an hour lesson we could work on Hitting, and Pitching.  We do Hour lessons on one item, when needed. We use Video Analysis to help the student understand and visualize where they are, and what they need to work on.</p>
                <p>When you’re looking for a baseball/softball instructor for your child, what should you look for? Many instructors will highlight their playing careers and say they were great players or they played at a high level of baseball.Playing experience is good and being an all-star caliber player is great, but many of these "instructors" lack the skills necessary to teach youth players the skills that they need to improve their game. All of our On Deck Baseball instructors have played baseball. Some of our coaches have played at the college and professional level. But our coaches also have a combined 80+ years experience instructing youth baseball and softball players. In addition they have coached thousands of youth baseball and softball games at all age levels.</p>
                <p>On Deck Baseball coaches offer high quality baseball and softball lessons. Our instructors can work with recreational players that are new to the game, select players, high school and college players that are looking to reach the next level of baseball. We’ve even had instructors work with professional baseball players. Regardless of the level, On Deck Baseball instructors will assess your players’ skills, listen to their goals, and then provide an age appropriate plan to improve their skills so they can reach their goals.</p>
                </div>
                <h2 className='details'>Lesson Details</h2>
                <div className='lesson-info'>
                <div className='pitching-lessons'>
                <ul className='lesson-title'>Pitching Lessons are customized based on each player's age and skills. The following are some of the skills that are covered in pitching lessons:
                    <li className='list'>Throwing and Pitching Drills</li>
                    <li className='list'>Gripping the 4-seam Fastball</li>
                    <li className='list'>Pitching from the Full Wind-up and Stretch</li>
                    <li className='list'>"Spot" Pitching</li>
                    <li className='list'>How to throw a Change-up</li>
                    <li className='list'>Pick off moves</li>
                    <li className='list'>"Mental side" of Pitching</li>
                    <li className='list'>Video Analysis of Pitching Mechanics</li>
                </ul>
                </div>
                <div className='batting-lessons'>
                <ul className='lesson-title'>Batting Lessons are customized based on each player's age and skills. The following are some of the skills that are covered in batting lessons:
                    <li className='list'>Proper Batting Stance</li>
                    <li className='list'>The Correct Bat Path</li>
                    <li className='list'>Balance through the Swing</li>
                    <li className='list'>How to Hit Inside and Outside Pitches</li>
                    <li className='list'>Situational Hitting</li>
                    <li className='list'>"Mental Side" of Batting</li>
                    <li className='list'>Video Analysis of Hitting Mechanics</li>

                </ul>
                </div>
                <div className='catching-lessons'>
                <ul className='lesson-title'>Catching and Throwing Lessons are customized based on each player's age and skills. The following are some of the skills that are covered in Catching and Throwing lessons:
                    <li className='list'>Proper Stance</li>
                    <li className='list'>The Correct Arm Positions</li>
                    <li className='list'>Balance</li>
                    <li className='list'>Using the lower body to throw</li>
                    <li className='list'>Proper follow through</li>
                    <li className='list'>Proper catching techniques</li>
                    <li className='list'>Video Analysis of Throwing Mechanics</li>

                </ul>
                </div>
                    
                </div>
            </div>
        )
    }
}

export default Lessons
