import React from 'react'
import {Link} from "react-router-dom";
import {scrollTop} from "./Header";

const Footer = () => {
    return (
        <footer className="footer">
            <div className='container'>
                <div className="footer-content">
                    <div className='footer-company-info'>
                        <div className='ftr-company__logo-block'>
                            <img src="./assets/images/footer-logo.png" alt=""/>
                            <span className='ftr-copyright-text'>© Copyright Finsweet 2022</span>
                        </div>
                        <div className='ftr-company-contacts'>
                            <ul className='ftr-company-list'>
                                <li className="ftr-company-list__item" data-bot>(480) 555-0103</li>
                                <li className="ftr-company-list__item" data-bot>4517 washington ave.</li>
                                <li className="ftr-company-list__item">finsweet@example.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-list__block">
                        <div className='footer-list'>
                            <li className='footer-list__item footer-list__title'>Quicklinks</li>
                            <li className='footer-list__item'><Link onClick={scrollTop} className='footer-link' to='/'>home</Link></li>
                            <li className='footer-list__item'><Link onClick={scrollTop} className='footer-link' to='/about-page'>about us</Link></li>
                            <li className='footer-list__item'><Link onClick={scrollTop} className='footer-link' to='/sermons'>sermons</Link></li>
                            <li className='footer-list__item'><Link onClick={scrollTop} className='footer-link' to='/blog'>blog</Link></li>
                        </div>
                        <div className='footer-media-list-block'>
                            <li className='footer-list__title'>Connect</li>
                            <div className='footer-media-list'>
                                <li className='footer-media__list-item' data-mr><a href=""><img src="./assets/images/facebook.png" alt=""/></a></li>
                                <li className='footer-media__list-item' data-mr><a href=""><img src="./assets/images/twitter.png" alt=""/></a></li>
                                <li className='footer-media__list-item'><a href=""><img src="./assets/images/linkedIn.png" alt=""/></a></li>
                            </div>
                        </div>
                    </div>
                    <div className="footer-form__block">
                        <h1 className='footer-form-title'>Subscribe to get Latest <br/> Updates and News</h1>
                        <form className="footer-form">
                            <div className='footer-form__input-group'>
                                <input type="text" className="footer-form-input" placeholder='Yourmain@gmail.com'/>
                                <button className='footer-form-submit'>subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer