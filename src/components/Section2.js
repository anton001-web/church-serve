import React from 'react'

const advantagesList  = [
    {
        img: './assets/images/miniAdvt1.png',
        title: 'about us',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        img: './assets/images/miniAdvt2.png',
        title: 'Get involved',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        img: './assets/images/miniAdvt3.png',
        title: 'Giving back',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
]


const Section2 = () => {
    return (
        <section className='section-mini__advt'>
            <div className="container">
                <div className="mini-advt__body">
                    <span className='mini-advt__subTitle'>sub-headline</span>
                    <h1 className='mini-advt__title'>a church that's relevant</h1>
                    <div className='mini-advt__list-block'>
                        <div className='mini-advt__list'>
                            {
                                advantagesList.map((advt, ind) => (
                                    <div className='advt-item' key={ind}>
                                        <img src={advt.img} className='advt-item__img'/>
                                        <div>
                                            <h2 className='advt-item__title'>{advt.title}</h2>
                                            <p className='advt-item__text'>{advt.text}</p>
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

export default Section2