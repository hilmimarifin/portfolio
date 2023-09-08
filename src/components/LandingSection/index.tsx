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
        <div className='md:items-start md:text-left md:ml-20 lg:ml-28 flex flex-col justify-center items-center'>
            <div className='font-bold text-xl md:text-4xl'>
                Hallo, {`I'm`} Hilmi,
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
            <div className={`w-[300px] h-[300px] relative left-[calc(12vw)] bottom-[calc(20vw)] md:w-[380px] md:h-[380px] md:left-[8vw] md:bottom-[14vh]`}>
                <div className='w-[300px] h-[300px] md:w-[380px] md:h-[380px] rounded-full absolute bottom-[-50px] left-[-50px] bg-[#FFE569] -z-10'></div>
                <Image src={"/images/836127.png"}
                    alt="hilmi"
                    // width={800}
                    // height={800}
                    fill
                    sizes='(min-width: 768px) 1000px, 800px '
                    objectFit="none"
                    className=' z-10 absolute overflow-visible'
                />
            </div>
        </div>
    )
}

export default index