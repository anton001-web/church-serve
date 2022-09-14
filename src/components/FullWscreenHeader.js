import React from 'react'

export const FullWscreenHeader = ({img, imgT, imgMob}) => {
    return (
        <div className='fullW-img-block'>
            <picture>
                <source srcSet={img} media="(min-width: 996px)"/>
                <source srcSet={imgT} media="(min-width: 480px)"/>
                <img src={imgMob} alt=""/>
            </picture>
            <div className='container'>
                <div className='fullW-img-title__group'>
                    <span className='fullW-comp-subTitle'>sermon</span>
                    <h1 className='fullW-comp-title title'>take part in our sermon</h1>
                </div>
            </div>
        </div>
    )
}
