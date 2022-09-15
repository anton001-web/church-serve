import React, {useEffect} from 'react'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {toggleBurger} from "../store/actions";

const Header = () => {
    const dispatch = useDispatch()
    const burgerMenu = React.createRef()

    const handleBurger = () => {
        dispatch(toggleBurger())
    }

    const {visibility} = useSelector(state => {
        const {burger} = state
        return burger
    })

    useEffect(() => {
        if(visibility) {
            burgerMenu.current.classList.add('burger-open__active')
            document.documentElement.classList.add('scroll-active')
        } else {
            burgerMenu.current.classList.remove('burger-open__active')
            document.documentElement.classList.remove('scroll-active')
        }
    }, [visibility])

    return (
        <header className="header">
            <div className='container'>
                <div className='header-body'>
                    {/*<div className='header-contet__block'>*/}
                        <div className='header-left__content'>
                            <div className='header-logo__wrap'>
                                <img src="./assets/images/logo.png" alt=""/>
                            </div>
                            <div className='header-list__block' ref={burgerMenu}>
                                <div className='header-list__container'>
                                    <ul className="header-list">
                                        <div className='burger-menu__close' data-mar onClick={handleBurger}>
                                            <span data-p></span>
                                            <span></span>
                                        </div>
                                        <li className="header-list__item" data-mar><Link className='header-link' to=''>home</Link></li>
                                        <li className="header-list__item" data-mar><Link className='header-link' to='/about-page'>about us</Link></li>
                                        <li className="header-list__item" data-mar><Link className='header-link' to='/sermons'>sermon</Link></li>
                                        <li className="header-list__item"><Link className='header-link' to='/blog'>blog</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    {/*</div>*/}
                    <div className='header-ri'>
                        <button className='header-btn'>
                            contact us
                        </button>
                    </div>
                    <div className='hidden-burger__toggle-block'>
                        <div className='burger-toggle' onClick={handleBurger}>
                            <span data-mb></span>
                            <span data-mb></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;