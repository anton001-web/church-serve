import React from 'react'

const Section3 = () => {
    return (
        <section className='pray-section'>
            <div className='container'>
                <div className="pray-section__body">
                    <span className='pray-section__subTitle'>SUB-HEADLINE</span>
                    <h1 className='pray-section__title title'>love and compassion</h1>
                    <p className="pray-section__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <div className='pray-section__photoalbum-block'>
                        <button className="pray-section__btn">read more</button>
                        <div className='pray-section__photoalbum-list'>
                            <img src="./assets/images/pray-alb1.png" alt="" data-height/>
                            <img src="./assets/images/pray-alb2.png" alt=""/>
                            <img src="./assets/images/pray-alb3.png" alt="" data-height/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section3;