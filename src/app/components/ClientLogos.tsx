import React from 'react'
import Image from 'next/image'

interface Logo {
    src: string;
    alt: string;
    width: number;
    height: number;
}


const logos: Logo[] = [
    {
        src: '/clientLogos/screenfixer.png',
        alt: 'screenfixer',
        width: 96,
        height: 39
    },
    {
        src: '/clientLogos/walsos.png',
        alt: 'walsos',
        width: 153,
        height: 31
    },
    {
        src: '/clientLogos/moengage.png',
        alt: 'moengage',
        width: 168,
        height: 26
    },
    {
        src: '/clientLogos/hashgrowth.png',
        alt: 'hashgrowth',
        width: 122,
        height: 31
    },
    {
        src: '/clientLogos/century.png',
        alt: 'century',
        width: 170,
        height: 26
    },
    {
        src: '/clientLogos/sectona.png',
        alt: 'sectona',
        width: 126,
        height: 34
    },
]

const ClientLogos: React.FC = () => {
    return (
        <section className='bg-blushPink'>
            <div className='lg:container mx-auto px-4'>
                <div className='flex items-center justify-around px-4 py-12'>
                    {logos.map((logo, index) => (
                        <div
                            key={index}
                            className={`flex max-w-full aspect-[${logo.width}/${logo.height}]`}
                        >
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                width={logo.width}
                                height={logo.height}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ClientLogos
