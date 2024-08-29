
import { About } from '@/sections/About';
import { Header} from '@/sections/Header';
import {Hero} from '@/sections/Hero';
import { Location } from '@/sections/Location';
import { Quote} from '@/sections/Quote';
import { Line } from '@/sections/Line';
import { Menu } from '@/sections/Menu';
import { CallToAction } from '@/sections/CallToAction';
import { Footer } from '@/sections/Footer';

export default function Home() {
  return (
    <>
    <Header />
    <Hero/>
    <Line />
    <Quote/>
    <About/>
    <Menu/>
    <Location/>
    <CallToAction/>  
    <Footer/>
    </>
  )
   
  
}
