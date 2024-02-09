import React from 'react'
import Image from 'next/image'
import { Button } from '../LandingSection'
import dynamic from "next/dynamic";
import Link from 'next/link';
import { socials } from '@/data/socials';
import { MotionLi } from '../motion';
import { Icon } from '../icon';
import { slideInVariants } from '@/framer-motion/slide-in';
import { scaleHoverVariants } from '@/framer-motion/scale-hover';


const SkillSection = dynamic(() => import("./SkillSection"), {
  ssr: false,
});

const index = () => {
  return (
    <div className='min-h-screen bg-secondary pt-20 flex flex-col items-cente z-10' id="aboutme">
      <div className='flex-1 flex flex-col justify-center items-center'>
        <div className=' flex flex-row items-center justify-center '>
          <Image
            src="/images/ishida (1).png" alt="hilmi"
            width={200}
            height={200}
          />
          <div className=' max-w-[270px] h-[350px]  ml-4 flex flex-col justify-between'>
            <h1 className='font-bold text-2xl'>About Me</h1>
            <ul className="flex items-center gap-6 md:gap-8">
              {socials.map((social, index) => (
                <MotionLi
                  key={social.title}
                  variants={{
                    ...slideInVariants({ from: "right", delay: index * 0.05 }),
                    ...scaleHoverVariants({ scale: 1.3 }),
                  }}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                >
                  <a
                    href={social.url}
                    target="_blank"
                    title={social.title}
                    className="transition hover:grayscale-0 grayscale"
                  >
                    <Icon className="text-lg md:text-xl" icon={social.icon} />
                  </a>
                </MotionLi>
              ))}
            </ul>


            <p className='font-nunito'>I am a  full stack web developer with over a year of hands-on experience in the field, I have proven expertise in developing robust and scalable solutions that deliver exceptional user experiences.<br/>- ChatGPT</p>
            <div>
              <a target="_blank" href="https://drive.google.com/file/d/1hmZZJDLftGd9udnxtAhzkZdZerQ4hJ52/view?usp=sharing" rel="noopener noreferrer">
                <Button text='Download CV' />
              </a>
              <a target="_blank" href="https://drive.google.com/file/d/1RWnpMBVo8BlS3RudZPSK2XQ3HWBX6OSn/view?usp=drive_link" rel="noopener noreferrer">
                <Button text='View Certificates' type={'primary'} />
              </a>
            </div>
          </div>
        </div>
        <SkillSection />
      </div>
    </div>
  )
}

export default index