import React from 'react'
import Section5 from "../Section5";
import {Link} from "react-router-dom";
import {CardComp} from "../CardComp";
import {FullWscreenHeader} from "../FullWscreenHeader";
import {events} from "../../data/sermonsData";
import {scrollTop} from "../Header";

const Sermons = () => {
    return (
        <section className='sermons-page'>
            <div className='sermons-page__body'>
                <FullWscreenHeader
                    img='./assets/images/sermons-pageMainImg.png'
                    imgMob='./assets/images/sermons-page-mobile.png'
                    imgT='./assets/images/sermons-page-tablet.png'
                />
                <div className='sermons-page__main-content'>
                    <div className='container'>
                        <div className='sermons-page__sermons'>
                            <Section5 />
                            <Link to='' className='sermons-page-sermons-link'>View all Sermons <img src="./assets/images/right-arrow.png" alt=""/></Link>
                        </div>
                        <div className='sermons-page__events-list__block'>
                            <div className='sermons-page__events-list'>
                                {
                                    events.map((event, ind) => (
                                        <Link to={event.href} onClick={scrollTop}>
                                            <CardComp data={event} key={ind}/>
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sermons