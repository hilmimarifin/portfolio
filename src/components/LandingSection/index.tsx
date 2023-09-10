import Image from 'next/image'
import React from 'react'
import SnowFallComponent from '../SnowFall'
import Link from 'next/link'
import TogleDark from '../Togle'


const index = () => {
    return (
        <div>
            <TogleDark className={`text-center flex flex-row justify-end pr-4 mt-10`}/>
            <div className=' min-h-screen  flex flex-col items-center justify-center md:flex-row'>
                <SnowFallComponent />
                <ImageSketch />
                <Description />
            </div>

        </div>
    )
}

const Description = () => {
    return (
        <div className='md:items-start md:text-left flex flex-col justify-center items-center md:ml-4'>
            <div className='font-bold text-xl md:text-4xl'>
                Hallo, {`I'm`} Hilmi
            </div>
            <div className=' md:text-xl'>
                {`your typical ordinary Software Engineer`}
            </div>
            <div className=' flex flex-row mt-2'>
                <Link
                    href={`/#aboutme`}
                    scroll={false}
                >
                    <Button text='About me' type='primary' />
                </Link>
                <Link
                    href={`/#projects`}
                    scroll={false}
                >
                    <Button text='Portfolio' />
                </Link>
            </div>

        </div>
    )
}

export const Button = ({ text, type }: { text: string, type?: 'primary' | null }) => {
    return (
        <div>
            <button className={`border-2 dark:border-white border-primary rounded-md p-2 font-medium m-1 ${type === 'primary' && 'bg-primary dark:bg-white dark:text-primary text-white'} hover:scale-[0.95] transition ease-in-out duration-100`}>{text}</button>
        </div>
    )
}

const ImageSketch = () => {
    return (
        <div>
            <div className={`w-[300px] h-[390px] md:w-[380px] md:h-[480px] `}>
                <div className='relative top-[50px] md:w-[380px] md:h-[380px] w-[300px] h-[300px] rounded-full  bg-[#FFE569] -z-10'></div>
                <Image src={"/images/836127.png"}
                    alt="hilmi"
                    width={800}
                    height={800}
                    // fill
                    sizes='(min-width: 768px) 1000px, 800px '
                    objectFit="cover"
                    className='relative top-[-300px] md:top-[-390px] left-1/4 z-10  object-none w-[150px] h-[390px] object-[-270px_-70px] md:w-[180px] md:h-[480px] md:object-[-340px_-90px]'
                />
            </div>
        </div>
    )
}

export default index