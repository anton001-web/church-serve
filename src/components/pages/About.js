import React from 'react'
import {FullWscreenHeader} from "../FullWscreenHeader";

const benefits = [
    {
        title: 'find fulfillment and joy',
        text: 'none',
        img: './assets/images/benefits1.png'
    },
    {
        title: 'shared values',
        text: 'none',
        img: './assets/images/benefits2.png'
    },
    {
        title: 'charity events',
        text: 'none',
        img: './assets/images/benefits3.png'
    },
    {
        title: 'All are welcome',
        text: 'none',
        img: './assets/images/benefits4.png'
    }
]

const team = [
    {
        img: './assets/images/team1.png',
        name: 'kimi bowen',
        post: 'pastor, church'
    },
    {
        img: './assets/images/team2.png',
        name: 'danielle watkins',
        post: 'pastor, church'
    },
    {
        img: './assets/images/team3.png',
        name: 'naomi craig',
        post: 'pastor, church'
    },
    {
        img: './assets/images/team4.png',
        name: 'santos payne',
        post: 'pastor, church'
    }
]

const About = () => {
    return (
        <section className="about-page">
            <FullWscreenHeader
                img='./assets/images/about-pageMainImg.png'
                imgT='./assets/images/about-pageMainImg.png'
                imgMob='./assets/images/about-pageMainImg.png'
            />
            <div className="container">
                <div className="about-page__body">
                    <div className="about-page__titles-group">
                        <span className='about-page__subTitle'>welcome to our charch</span>
                        <h1 className='about-page__title title'>love and compassion</h1>
                        <p className='about-page__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
                    </div>
                    <div className='about-page__photoAlbum'>
                        <img src="./assets/images/pray-alb1.png" className='about-page__photoAlbum-item' data-mini/>
                        <img src="./assets/images/pray-alb2.png" className='about-page__photoAlbum-item' />
                        <img src="./assets/images/pray-alb3.png" className='about-page__photoAlbum-item' data-mini/>
                    </div>
                    <div className='about-page__udr-album-text-group'>
                        <div className='about-page__udr-text__block'>
                            <span className='udr-text__subTitle'>our mission & vision</span>
                            <h2 className='udr-text__title'>STRIVING FOR A BETTER <br/> TOMORROW</h2>
                            <p className='udr-text__text'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                            </p>
                        </div>
                        <div className='about-page__udr-text__block'>
                            <span className='udr-text__subTitle'>what we do</span>
                            <h2 className='udr-text__title'>BRINgING PEACE AND JOY <br/> TO THE WORLD</h2>
                            <p className='udr-text__text'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                            </p>
                        </div>
                    </div>
                    <div className='about-page__benefits-block'>
                        <span className='abt-page__benefits-subTitle'>benefits</span>
                        <h3 className='abt-page__benefits-title title'>the benefits of joining our church</h3>
                        <div className='abt-page__benefits-list'>
                            {
                                benefits.map((benefit, ind) => (
                                    <div key={ind} className='abtP-benefits__item' >
                                        <div className="abtP-bi-text__group">
                                            <h4 className='abtP-bi-title'>{benefit.title}</h4>
                                            <p className='avtP-bi-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad aperiam at corporis, culpa, debitis dolorem eius eveniet excepturi, id impedit incidunt inventore libero magnam magni maxime minus nam officia optio possimus recusandae reprehenderit repudiandae similique tempora veniam veritatis voluptatum. Accusantium atque deleniti est et in laudantium, qui sequi tempora.</p>
                                        </div>
                                        <div className='abtP-bi-img-block' data-pos={ind + 1}>
                                            <img src={benefit.img} alt=""/>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='about-page__team-block'>
                        <span className='about-page__team-subTitle'>church members</span>
                        <h5 className='about-page__team-title title'>meet our inspirational team</h5>
                        <div className="about-page__team-list">
                            {
                                team.map((tmember, ind) => (
                                    <div key={ind} className='team-list__item'>
                                        <div className='tm-list__item-img__block'>
                                            <img src={tmember.img} alt=""/>
                                        </div>
                                        <div className='tm-list__item-text-group'>
                                            <h6 className='tm-list__item-title'>{tmember.name}</h6>
                                            <span className='tm-list__item-post'>{tmember.post}</span>
                                        </div>
                                        <div className='tm-list__item-media__list'>
                                            <img src="./assets/images/twitterTem.png" alt="" data-mr/>
                                            <img src="./assets/images/linkedinTem.png" alt="" data-mr/>
                                            <img src="./assets/images/facebookTem.png" alt=""/>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About