import React from 'react'

const Footer = () => {
    return (
        <div className="mt-20 flex flex-col relative text-center bg-[url('./assets/mobile/image-footer.jpg')] md:bg-[url('./assets/tablet/image-footer.jpg')] xl:bg-[url('./assets/desktop/image-footer.jpg')] bg-cover bg-no-repeat">
            <div className='flex flex-col justify-center items-center absolute -top-160px inset-x-0 '>
                <hr className='mt-9 h-24 w-px bg-[#87879D]'></hr>
                <p className='flex items-center justify-center p-4 px-5 border rounded-full border-[#87879D] bg-white text-gray font-bold h-16 w-16'>02</p>
            </div>
            <div className='bg-[#4D96A9]/75 bg-cover py-20 px-5 flex flex-col items-center xl:flex-row xl:justify-around xl:items-center xl:gap-5'>
            <p className='text-white text-4xl font-bold'>Experience more together</p>
            <p className='text-white my-10 text-lg font-light'>Stay connected with reliable HD meetings and unlimited one-on-one and group video sessions.</p>
            <button className='py-4 px-10 font-bold rounded-full bg-darkpurple text-white hover:bg-darkpurplehover'>Donwload <span className='text-lightpurple'>v1.3</span></button>
            </div>
        </div>
    )
}

export default Footer