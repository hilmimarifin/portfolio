import Image from 'next/image'
import React from 'react'
import SnowFallComponent from '../SnowFall'
import Link from 'next/link'
import TogleDark from '../Togle'
import { MotionDiv } from '../motion'
import { slideInVariants } from '@/framer-motion/slide-in'


const index = () => {
    return (
        <div>
            <TogleDark className={`text-center flex flex-row justify-end pr-4 mt-10`} />
            <SnowFallComponent />
            {/* <MotionDiv
                variants={slideInVariants({ from: "right", duration: 1 })}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-64px" }}
            > */}
            <div className=' min-h-screen  flex flex-col items-center justify-center md:flex-row'>
                <ImageSketch />
                <Description />
            </div>

            {/* </MotionDiv> */}


        </div>
    )
}

const Description = () => {
    return (
        <MotionDiv
            variants={slideInVariants({ from: "right", duration: 1 })}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-64px" }}
        >
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

        </MotionDiv>

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
        <MotionDiv
            variants={slideInVariants({ from: "right", duration: 1 })}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-64px" }}
        >
            <div>
                <div className={`w-[300px] h-[390px] md:w-[380px] md:h-[480px] `}>
                    <div className='relative top-[50px] md:w-[380px] md:h-[380px] w-[300px] h-[300px] rounded-full '>
                        <div className='absolute md:w-[380px] md:h-[380px] w-[300px] h-[300px] rounded-full  bg-[#FFE569]  dark:bg-gray-600 dark:animate-ping-fast -z-10' />
                        <div className='absolute md:w-[380px] md:h-[380px] w-[300px] h-[300px] rounded-full dark:bg-gray-600 -z-10' />

                        <Image src={"/images/giphy.webp"}
                            alt="eyes"
                            width={70}
                            height={70}
                            sizes='(min-width: 768px) 70px, 50px '
                            className='absolute z-20 object-contain w-[50px] h-[50px] md:w-[80px] md:h-[80px] left-[48%] -top-[3%] md:left-[45%] md:-top-[7%] hidden dark:block'
                        />

                        <Image src={"/images/836127.png"}
                            alt="hilmi"
                            width={800}
                            height={800}
                            sizes='(min-width: 768px) 1000px, 800px '
                            className='absolute z-10 -top-[15%] left-1/4  object-none dark:grayscale w-[150px] h-[390px] object-[-270px_-70px] md:w-[180px] md:h-[480px] md:object-[-340px_-90px]'
                        />

                    </div>
                </div>

            </div>

        </MotionDiv>

    )
}

export default index