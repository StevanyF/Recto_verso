import finger from '@/assets/finger1.png';
import quotes from '@/assets/quotes_.png'
import Image from 'next/image';

export const Quote = () => {
    return <section>
        <div className="container">
            <div className="inline-flex mt-8 md:mt-20 ">
                <div className="mt-16 md:-mt-12 md:flex-1 relative ">
                    <Image src={finger} 
                        alt="Finger"
                        height={100}
                        width={100} 
                        className="hidden md:block bottom-24 -left-36 -rotate-12">               
                    </Image>
                </div>
                <div className="flex flex-col items-center justify-center  ">
                    <Image src={quotes} 
                        alt="Quotes" 
                        height={52}
                        width={52}
                    >                        
                    </Image>
                    <p className='uppercase text-center mt-10 text-black '>
                        "  We created Recto Verso with the aim of giving free space to our creativity and fantasies,<br/>
                        without seeking external validation <br/>
                        — just enjoying the process of choosing coffee beans and <br/>
                        making homemade pastries that reflect who we are. "                       
                    </p>
                    <Image src={quotes} 
                        alt="Quotes" 
                        height={52}
                        width={52}
                        className='mt-6 -rotate-180'>                        
                    </Image>
                </div>
            </div>

        </div>

    </section>
}