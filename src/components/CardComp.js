export const CardComp = ({data}) => {
    console.log('data', data)

    return (
        <div className='card'>
            <div className='card-text__group'>
                <div className='card-header'>
                    {data.isOnlyDate ? (
                        <>
                            <p className="card-header-data"><span>{data.dateNum}</span><span>{data.dateD}</span></p>
                            <span className='card-subTitle'>{data.subTitle}</span>
                        </>
                    ) : (
                        <div className='card-header-dataT-group'>
                            <span className='card-subTitle'>{data.subTitle}</span>
                            <p className="card-header-data"><span>20</span>july</p>
                        </div>
                    )}
                    <h3 className='card-title'>{data.title}</h3>
                    <p className='card-text'>{data.text}</p>
                </div>
            </div>
            <div className='card-footer'>
                {
                    data.isOnlyDate ? (
                        <>
                            <div className='card-time card-footer-item'>
                                <img src="./assets/images/clock1.png" alt=""/>
                                <p className='card-footer-text'><span>{data.timeFrom}</span> {data.timeTo}</p>
                            </div>
                            <div className='card-place card-footer-item'>
                                <img src="./assets/images/clock2.png" alt=""/>
                                <p className='card-footer-text'><span>{data.location}</span></p>
                            </div>
                        </>
                    ) : (
                        <>
                            <span className='event-date-info event-host'>{data.host}</span>
                            <span className='event-date-info event-date'>{data.date}</span>
                        </>
                    )
                }
            </div>
        </div>
    )
}

import React from 'react'
