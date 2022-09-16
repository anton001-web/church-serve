import React from 'react'
import {Link} from "react-router-dom";
import {scrollTop} from "./Header";

const Section6 = () => {
    return (
        <section className='serve-section'>
            <div className="serve-section__body">
                <div className='serve-section__info-block'>
                    <h1 className='serve-section__title'>We want to serve the world around us</h1>
                    <p className="serve-section__text">Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit, sed do.</p>
                    <button className="serve-section__btn"><Link onClick={scrollTop} to='/blog'>visit</Link></button>
                </div>
                <div className='serve-sec__img-block'>
                    <img src="./assets/images/quoteIcon.png" alt=""/>
                </div>
            </div>
        </section>
    )
}

export default Section6