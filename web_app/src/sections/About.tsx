import story1 from "@/assets/story_1.png";
import story2 from "@/assets/story_2.png";
import story3 from "@/assets/story_3.png";
import story4 from "@/assets/story_4.png";
import Image from "next/image";

const illustration = 
    [story1.src,
    story2.src,
    story3.src,
    story4.src];



export const About = ()=> {
    return <section className="bg-gradient-to-b from-[#FFFFFF] to-[#fcfcfbd6] py-16 overflow-x-clip">
        <div className="container">
            <div className="">
                <div className="flex justify-center">
                    <div className="title">Why Recto Verso ?</div>
                </div>
                <p className="uppercase text-center mt-8">Here a short story of how we started</p>
            </div>
            <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">        
                {illustration.map((illustration) =>(
                    <div key={illustration}className="">                       
                        <Image src={illustration} alt="Story" width={140} height={140} className="flex "></Image>                   
                    </div>
                ))}              
            </div>
            
            
        </div>

    </section>
}