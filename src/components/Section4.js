import React from 'react'

const benefits = [
    {
        title: 'watch and listen to our sermons',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.',
        img: './assets/images/benefit1.png'
    },
    {
        title: 'watch and listen to our sermons',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.',
        img: './assets/images/benefit2.png'
    },
    {
        title: 'watch and listen to our sermons',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.',
        img: './assets/images/benefit3.png'
    },
    {
        title: 'watch and listen to our sermons',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.',
        img: './assets/images/benefit4.png'
    }
]

const Section4 = () => {
    return (
        <section className='benefits-section'>
            <div className="container">
                <div className="benefits-body">
                    <span className='benefits-subTitle'>Watch and listen</span>
                    <h1 className='benefits-title title'>THE benefits of joining our church</h1>
                    <div className='benefits-list__block'>
                        <div className="benefits-list">
                            {
                                benefits.map((benefit, ind) => (
                                    <div key={ind} className='benefits-list__item'>
                                        <img src={benefit.img} className='benefits-item__img' />
                                        <div className='benefits-item__text-block'>
                                            <h3 className='benefit-item__title'>{benefit.title}</h3>
                                            <p className='benefit-item__text'>{benefit.text}</p>
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

export default Section4;