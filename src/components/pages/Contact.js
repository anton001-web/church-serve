import React from 'react'
import {FullWscreenHeader} from "../FullWscreenHeader";

const Contact = () => {
    return (
        <section className='contact-page'>
            <div className='contact-page__header-img'>
                <FullWscreenHeader
                    img='./assets/images/contactPageBg.png'
                    imgT='./assets/images/contactPageBg.png'
                    imgMob='./assets/images/contactPageBg.png'
                />
            </div>
            <div className="container">
                <div className='contact-page__body'>
                    <div className='contact-page__form-block'>
                        <h3 className='contact-page__form-title'>contact form:</h3>
                        <form className='contact-page__form'>
                            <div className='contact-page__form-item'>
                                <input type="text" className='contact-page__form-input' placeholder='Your Full Name'/>
                            </div>
                            <div className='contact-page__form-item'>
                                <input type="text" className='contact-page__form-input' placeholder='Your E-mail'/>
                            </div>
                            <div className='contact-page__form-item'>
                                <input type="text" className='contact-page__form-input' placeholder='Query Related'/>
                            </div>
                            <div className='contact-page__form-item'>
                                <textarea className='contact-page__form-input contact-page__form-textarea' placeholder='Message'/>
                            </div>
                            <button className='contact-page__form-submit'>
                                send message
                            </button>
                        </form>
                    </div>
                    <div className="contact-page__contacts-block">
                        <div className="contact-page__contacts-list">
                            <div className='contact-page__contacts-address contact-page__contacts-item'>
                                <span className='contact-page__contacts-subTitle'>Address</span>
                                <span className='contact-page__contacts-text'>nh 234 public square</span>
                                <span className='contact-page__contacts-text'>san francisco 65368</span>
                            </div>
                            <div className='contact-page__contacts-cdetails contact-page__contacts-item'>
                                <span className='contact-page__contacts-subTitle'>Contact Details</span>
                                <span className='contact-page__contacts-text'>(480) 555-0103</span>
                                <span className='contact-page__contacts-text'>finsweet@example.com</span>
                            </div>
                            <div className='contact-page__contacts-address contact-page__contacts-item'>
                                <span className='contact-page__contacts-subTitle'>Find us Here</span>
                                <div className='contact-page__media-list'>
                                    <img src="./assets/images/linkedinTem.png" data-rm/>
                                    <img src="./assets/images/facebookTem.png" data-rm/>
                                    <img src="./assets/images/twitterTem.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact