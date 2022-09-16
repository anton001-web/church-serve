import React from 'react'
import {Link} from "react-router-dom";
import {scrollTop} from "./Header";

const Section5 = () => {
    return (
        <section className='join-in-section'>
            <div className="container">
                <div className='join-in__body'>
                    <span className='join-in__subTitle'>Upcoming SERMONS</span>
                    <h1 className='join-in__title title'>join us and become part of something great</h1>
                    <div className='join-in__main-info__block'>
                        <div className='join-in__left-info__block'>
                            <span className="join-in__info-subTitle">upcoming event</span>
                            <h4 className='join-in__info-title'>watch and listen <br/> to our sermons</h4>
                            <p className='join-in__info-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            <div className='join-in__timetable-block'>
                                <div className="join-in__first-timetable join-in-timetable" data-mb>
                                    <img src="./assets/images/clock1.png"/>
                                    <p className='join-in-timetable-text'>Friday 23:39 IST <br/> Saturday 11:20 ISD</p>
                                </div>
                                <div className="join-in__first-timetable join-in-timetable" >
                                    <img src="./assets/images/clock2.png"/>
                                    <p className='join-in-timetable-text'>No 233 Main St. New York, <br/> United States</p>
                                </div>
                            </div>
                            <button className="join-in__info-btn"><Link onClick={scrollTop} to='/contact-page'>register</Link> </button>
                        </div>
                        <div className='join-in__main-img__block'>
                            <img src="./assets/images/joinSec.png" alt="" className='join-in__img' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section5