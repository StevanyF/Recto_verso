
export const Header = () => {
    return <header className='sticky top-0 backdrop-blur-sm z-20'>
        <div className="flex justify-center items-center py-3 text-sm bg-black ">
            <p className="text-white ">Coffee and Baked Goods</p>
        </div>
        <div className="py-5">
            <div className="container flex justify-center items-center">
                <div className="flex items-center justify-between">
                    <nav className="flex text-black/60 items-center gap-6 ">
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Contact</a>
                    </nav>
                </div>
            </div>
        </div>
    </header>
   
   
}