import React from 'react'

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
                                    <div key={ind} className='events-list__item'>
                                        <div className='event-text__group'>
                                            <span className='events-item__subTitle'>{eventItm.subTitle}</span>
                                            <h3 className='events-item__title'>{eventItm.title}</h3>
                                            <p className='events-item__text'>{eventItm.text}</p>
                                        </div>
                                        <div className='event-date__block'>
                                            <span className='event-date-info event-host'>By {eventItm.host}</span>
                                            <span className='event-date-info event-date'>{eventItm.date}</span>
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

export default Section7