import CoffeCup from '@/assets/coffee_bg.png'
import Image from 'next/image'



export const Hero = () => {
    return <section className="relative overflow-clip pt-8 pb-16 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#FDE68A,#FFFFFF_66%)]" 
    >
        <div className="container ">        
            <div className=" flex flex-col justify-center items-center text-8xl md:text-[200px] font-extrabold tracking-tighter mt-4 uppercase z-10 ">
                <span>Recto</span>
                <span className='z-10 text-white'>Verso</span>                
            </div>
            <div className='flex justify-center items-center '>
                <Image src={CoffeCup} alt='Coffe' height={660} width={660} className=' -mt-24 md:-mt-48'></Image>
            </div>
        </div>
       
        

        {/* <div className="absolute h-[375px] w-[800px] rounded-[100%] left-1/2 -translate-x-1/2  bg-[radial-gradient(closest-side,#FDE68A,#FFFFFF)] top-[calc(100%-150px)]"></div> */}
    </section>
}