import React from 'react'
import womanvideocall from '../assets/desktop/image-woman-in-videocall.jpg'
import womanvideochatting from '../assets/desktop/image-women-videochatting.jpg'
import meninmeeting from '../assets/desktop/image-men-in-meeting.jpg'
import mentexting from '../assets/desktop/image-man-texting.jpg'

const Photos = () => {
    return (
        <div className='px-5 my-20 grid grid-cols-2 grid-rows-2 gap-5 md:grid-cols-4 md:px-10 md:grid-rows-1 xl:mx-auto xl:px-20 xl:gap-5'>
            <img className='rounded-md xl:w-full' src={womanvideocall} alt="womanvideocallimg" />
            <img className='rounded-md xl:w-full' src={womanvideochatting} alt="womanvideochatting" />
            <img className='rounded-md xl:w-full' src={meninmeeting} alt="meninmeetingimg" />
            <img className='rounded-md xl:w-full' src={mentexting} alt="mantextingimg" />
        </div>
    )
}

export default Photos