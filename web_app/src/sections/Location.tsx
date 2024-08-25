"use client";
import cake from '@/assets/cake.png';
import cake2 from '@/assets/cake2.png';
import coffee from '@/assets/coffee.png';
import cookes from '@/assets/cookes.png';
import cookes2 from '@/assets/cookes2.png';
import cups from '@/assets/cups.png';
import door from '@/assets/door.png';
import inside from '@/assets/inside_dog.png';
import inside1 from '@/assets/inside1.png';
import inside2 from '@/assets/inside2.png';
import outside2 from '@/assets/outside2.png';
import pic from '@/assets/pic1.png';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image'
import LocationIcon from '@/assets/location.svg'


const pictures = [
    cake.src,
    cake2.src,
    coffee.src,
    cookes.src,
    cookes2.src,
    cups.src,
    door.src,
    inside.src,
    inside1.src,
    inside2.src,
    outside2.src,
    pic.src,   
]

const firstColumn= pictures.slice(0,4);
const secondColumn= pictures.slice(4,8);
const thirdColumn= pictures.slice(8,12);

const PicturesColumn = (props: {
    className?: string ;
    pictures: typeof pictures
    duration?: number;  
  }) =>(
    <div className={props.className} >
      <motion.div
      animate={{
        translateY: "-50%"
      }}
      transition={{
        duration: props.duration || 10,
        repeat:Infinity,
        ease:"linear",
        repeatType: "loop",
      }} 
      className="flex flex-col gap-2 pb-4"
      >
        {[...new Array(2)].fill(0).map((_, index)=>(
          <React.Fragment key={index}>
            {props.pictures.map((pictures)=>(
                <div className="">                  
                  <div key={pictures} className="flex items-center gap-2 ">
                    <Image src={pictures} alt="Pics" width={220} height={220}></Image>                              
                  </div> 
                </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div> 
    </div>
  )

export const Location = () =>{
    return <section>
        <div className="container">
            <div className="section-heading mt-14">
                <div className="flex justify-center">
                    <div className="tag">Location</div>
                </div>      
                <h2 className="title mt-5">Our Location</h2>
                <div className=" flex justify-center items-center gap-1 m-2">
                  <LocationIcon className='inline-flex h-10 w-10 -mt-5'></LocationIcon>
                  <p className="paragraph mt-5">
                      6 rue Portefoin 75003, <br/> Paris
                  </p>
                </div>
               
            </div>
        </div>
        <div className="flex justify-center gap-2 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[738px]">
          <PicturesColumn pictures={firstColumn} duration={15} />
          <PicturesColumn pictures={secondColumn} duration={20} className="hidden md:block"/>
          <PicturesColumn pictures={thirdColumn} duration={16}className="hidden lg:block"/>
        </div>
    </section>
}