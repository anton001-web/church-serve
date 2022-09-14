import React from 'react'
import {CardComp} from "./CardComp";

const events = [
    {
        subTitle: 'relationship',
        title: 'watch and listen to our sermons',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
        host: 'mathew johnson',
        date: 'tuesday, 13 may, 2021'
    },
    {
        subTitle: 'relationship',
        title: 'watch and listen to our sermons',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
        host: 'mathew johnson',
        date: 'tuesday, 13 may, 2021'
    },
    {
        subTitle: 'relationship',
        title: 'watch and listen to our sermons',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
        host: 'mathew johnson',
        date: 'tuesday, 13 may, 2021'
    },
    {
        subTitle: 'relationship',
        title: 'watch and listen to our sermons',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
        host: 'mathew johnson',
        date: 'tuesday, 13 may, 2021'
    }
]

const Section7 = () => {
    return (
        <section className='events-section'>
            <div className="container">
                <div className='events-body'>
                    <span className="events-subTitle">read our blog</span>
                    <h1 className="events-title title">share, inspire, innovate</h1>
                    <div className='events-list__block'>
                        <div className='events-list'>
                            {
                                events.map((eventItm, ind) => (
                                    <CardComp data={eventItm}/>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section7