import React from 'react'

const Hero = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='mx-auto px-4 text-center font-extrabold text-darkgrayishblue text-4xl md:text-5xl md:w-4/5 xl:text-7xl xl:w-2/5'>Group Chat for Everyone</h1>
            <h2 className='px-6 text-center mx-auto my-5 text-gray md:w-3/5 md:my-7 xl:text-lg xl:w-2/5'>Meet makes it easy to connect with others face-to-face virtually and collaborate across any device.</h2>
            <div className='flex flex-col my-5 items-center gap-3 md:flex-row'>
                <button className='px-7 py-3 font-bold text-white bg-darkblue hover:bg-darkbluehover rounded-full '>Download <span className='text-lightblue'>v1.3</span></button>
                <button className='px-6 py-3 font-bold text-white bg-darkpurple hover:bg-darkpurplehover rounded-full'>What is it?</button>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <hr className='mt-9 h-24 w-px bg-[#87879D]'></hr>
                <p className='flex items-center justify-center p-4 px-5 border rounded-full border-[#87879D] text-gray font-bold h-16 w-16'>01</p>
            </div>
        </div>
    )
}

export default Hero