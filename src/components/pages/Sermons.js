import React from 'react'
import Section5 from "../Section5";
import {Link} from "react-router-dom";
import {CardComp} from "../CardComp";
import {FullWscreenHeader} from "../FullWscreenHeader";

const events = [
    {
        subTitle: 'upcoming event',
        title: '100 random acts of kindness',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        timeFrom: 'Friday 23:39 IST',
        timeTo: 'Saturday 11:20 ISD',
        location: 'no 233 main st. new york, united states',
        isOnlyDate: true
    },
    {
        subTitle: 'Faith is a process, not a destination',
        title: '100 random acts of kindness',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        timeFrom: 'Friday 23:39 IST',
        timeTo: 'Saturday 11:20 ISD',
        location: 'no 233 main st. new york, united states',
        isOnlyDate: true
    },
    {
        subTitle: 'upcoming event',
        title: 'there is nothing impossible',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        timeFrom: 'Friday 23:39 IST',
        timeTo: 'Saturday 11:20 ISD',
        location: 'no 233 main st. new york, united states',
        isOnlyDate: true
    },
    {
        subTitle: 'upcoming event',
        title: 'WATCH AND LISTEN TO OUR SERMONS',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        timeFrom: 'Friday 23:39 IST',
        timeTo: 'Saturday 11:20 ISD',
        location: 'no 233 main st. new york, united states',
        isOnlyDate: true
    }
]

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
                                        <CardComp data={event} key={ind}/>
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