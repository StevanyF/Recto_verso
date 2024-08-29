import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialPin from "@/assets/social-youtube.svg";


export const  Footer = ()=>{
    return <footer className=" bg-black text-[#BCBCBC] text-sm py-10 text-center">
        <div className="container">
            <div className="flex justify-center gap-6 mt-6">
            <SocialInsta/>
            <SocialX/>
            <SocialPin/>
            </div>
            <p className="mt-6">&copy; 2024 Recto Verso. All rights reserved</p>
        </div>
    </footer>
}