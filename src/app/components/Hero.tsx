import React from 'react'
import Button from '@components/Button'
import Image from 'next/image'

const Hero = () => {
    return (
        <section className='bg-blushPink'>
            <div className='lg:container mx-auto px-4 pt-[150px] flex flex-col justify-center items-center'>
                <div className='text-center w-[1180px] max-w-full'>
                    <h1 className='text-64 text-black-400'>We build high performance products on <span className='text-black-950'>time and budget.</span></h1>
                </div>
                <div className='pt-4'>
                    <p className='text-lg text-black-800'>We build high performance products on time and budget. </p>
                </div>
                <Button href="#" variant="primary" children={"Get in touch now"} className='px-6 py-3 rounded-[4px] mt-4 text-lg' />
                <div className='aspect-[1185/666] w-[1185px] max-w-full mt-[96px]'>
                    <Image src="/hero/banner-image.webp" width={1185} height={666} className='h-full object-cover rounded-2xl' loading='lazy' alt='hero-banner-img'/>
                </div>
            </div>
        </section>
    )
}

export default Hero
