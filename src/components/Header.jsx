import React from 'react'
import logo from '../assets/logo.svg'
import heroimgmobile from '../assets/tablet/image-hero.png'
import heroimgtablet from '../assets/tablet/image-hero.png'
import heroimgdesktopleft from '../assets/desktop/image-hero-left.png'
import heroimgdesktopright from '../assets/desktop/image-hero-right.png'

const Header = () => {
    return (
        <div className='py-10 '>
            <img className="m-auto" src={logo} alt="logo" />
            <div className='my-10'>
                <img className='mx-auto flex md:hidden' src={heroimgmobile} alt="heromobile" />
                <img className='mx-auto hidden md:flex xl:hidden' src={heroimgtablet} alt="herotablet" />
                <div className='hidden md:hidden relative xl:flex'>
                    <img className='absolute -left-10' src={heroimgdesktopleft} alt="herodesktopleft" />
                    <img className='absolute -right-10' src={heroimgdesktopright} alt="herodesktopright" />
                </div>
            </div>
        </div>
    )
}

export default Header