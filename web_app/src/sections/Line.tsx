"use client"
import { motion } from "framer-motion"

export const Line = () => {
    return <section className="py-3 bg-black">
        <div className="container">
                <div className='flex overflow-hidden justify-center items-center'>
                  <motion.span 
                  animate={{
                    backgroundPositionX: "-100%",
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                  }}
                  className='bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text font-semibold text-sm md:text-lg lg:text-lg  '>Close for summer break. Back on August 28th</motion.span>
                </div>
         </div> 
    </section>
}