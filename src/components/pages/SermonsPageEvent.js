import React from 'react'
import {useParams} from "react-router-dom";
import {postsList} from "../../data/blogPageData";
import {events, upcomingSermons} from "../../data/sermonsData";
import {CardComp} from "../CardComp";

const SermonsPageEvent = () => {
    const params = useParams()
    const currentPost = events.filter(e => e.eventId === params.sermonsEvent)

    return (
        <section className='sermons-page__event'>
            <div className="container">
                <div className="sermons-page__event-body">
                    <div className='srmn-page__event-info__wrap'>
                        <div className="srmn-page-event__block">
                            <img src={currentPost[0].img} className='srmn-page__event-img' />
                            <div className='srmn-page-event__text-group'>
                                <span className='srmn-page__event-subTitle'>{currentPost[0].subTitle}</span>
                                <h1 className='srmn-page__event-title'>{currentPost[0].title}</h1>
                                <p className="srmn-page__event-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores consequuntur corporis facere, in porro quidem, reiciendis saepe sint tempora ut veritatis! Aliquam, eveniet expedita repellat reprehenderit sit voluptate. Laudantium.</p>
                                <div className='srmn-page__event-note'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dolorum obcaecati officia quidem quisquam unde! Architecto dicta dolorem expedita harum modi, nam natus nesciunt odio, quod tenetur totam vitae, voluptate!
                                </div>
                                <p className="srmn-page__event-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores consequuntur corporis facere, in porro quidem, reiciendis saepe sint tempora ut veritatis! Aliquam, eveniet expedita repellat reprehenderit sit voluptate. Laudantium.</p>
                            </div>
                        </div>
                        <div className='srmn-page-event__form-block'>
                            <form className='srmn-page-event__form'>
                                <h3 className='srmn-page-event__form-title'>register now</h3>
                                <div className='srmn-page-event__form-register-date__block'>
                                    <div className='srmn-page-event__form-place ev-reg-form-add-info'>
                                        <img src="./assets/images/clock1.png" alt=""/>
                                        {currentPost[0].location}
                                    </div>
                                    <div className='srmn-page-event__form-date ev-reg-form-add-info'>
                                        <img src="./assets/images/clock2.png" alt=""/>
                                        <span>{currentPost[0].dateNum} {currentPost[0].dateD} {new Date().getFullYear()}</span>
                                    </div>
                                </div>
                                <div className='srmn-page-event__form-item'>
                                    <input
                                        placeholder='name'
                                        type="text"
                                        id='name'
                                        className='srmn-page-event__form-name-inp srmn-page__input'
                                    />
                                    <label htmlFor='name'
                                           className='name-label srmn-page-label'>Full Name</label>
                                </div>
                                <div className='srmn-page-event__form-item'>
                                    <input
                                        placeholder='email'
                                        type="text"
                                        id='email'
                                        className='srmn-page-event__form-email-inp srmn-page__input'
                                    />
                                    <label htmlFor='email'
                                           className='email-label srmn-page-label'>E-mail</label>
                                </div>
                                <button className='srmn-page-event__form-submit'>
                                    register now
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className='sermons-page__upcoming-events-list__block'>
                        <h1 className='sermons-page-upcoming-srEvents__title'>upcoming sermons</h1>
                        <div className='sermons-page__upcoming-events-list'>
                            {
                                upcomingSermons.map((event, ind) => (
                                    <CardComp data={event} key={ind} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SermonsPageEvent