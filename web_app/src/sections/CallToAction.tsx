"use client"
import Link from "next/link"
import Instagram from "@/assets/social-insta.svg"
import {useEffect, useState} from "react";

export const CallToAction = () => {

  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }))
    }
    updateTime()
    const timer = setInterval(updateTime, 60000) // Update every minute
    return () => clearInterval(timer)
    }, 
  []);

  return (
    <footer className="w-full py-16 bg_gradient mt-20">
      <h2 className="title text-center mb-4">What's next?</h2>
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="bg-white rounded-xl p-8 shadow-sm gap-10 ">        
          <p className="text-center text-black mb-6">
            <span className="md:text-3xl text-2xl font-semibold">Stay connected with us!</span><br/>Follow our Instagram for the latest updates and coffee inspiration.
          </p>
          <div className="flex justify-center">
            <Link
              href="https://www.instagram.com/rectoversocafe/" 
              className="inline-flex items-center justify-center text-black hover:text-gray-600 transition-colors duration-300"
            >
              <Instagram src={Instagram}  alt="Instagram" className="w-6 h-6 mr-2" />
              <span className="text-lg">@rectoversocafe</span>
            </Link>
          </div>          
        </div>
      </div>
      <div className="container">
            <div className="text-gray-500 text-sm">{currentTime}</div>
      </div>
  
    </footer>
  )
}
