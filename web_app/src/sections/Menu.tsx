const menuList =[
    {
        item:'Espresso',
        price:4
    },
    {
        item:'Allongé',
        price:4.5
    },
    {
        item:'Cortado',
        price:4.5
    },
    {
        item:'Crème',
        price:5.5
    },
    {
        item:'Hand brew',
        price:'12'
    },
    {
        item:'Thé',
        price:5.5
    },
    {
        item:'Iced black',
        price:5.5
    },
    {
        item:'Cold brew',
        price:6
    },
    {
        item:'Iced latte',
        price:6.5
    },
    {
        item:'Espresso tonic',
        price:7
    },
    {
        item:'Thé glacé',
        price:7
    },
    {
        item:'Lait fraise',
        price:7.5
    },
    {
        item:'Affogato',
        price: 10
    },
    {
        item:'Oat milk',
        price:'+0.5'
    },
    {
        item:'Biscoito',
        price:4.5
    },
    {
        item:'Scone',
        price:5.5
    },
    {
        item:'Gâteau',
        price:7
    },
    {
        item:'Brioche pudding',
        price:8
    },
]
export const Menu = () =>{
    return <section className="py-10 bg-[#fcfcfbd6] overflow-x-clip">
        <div className="container ">
            <div className="flex flex-col ">
                <h1 className=" title text-5xl tracking-tighter">The Menu</h1>
                <div  className="paragraph mt-12 sm:m-6 ">
                    {menuList.map(({item, price}) =>( 
                    <div  className="py-2 md:py-6 ">
                        <div className="flex items-center border-b border-black/20 ">
                            <div key={item} className="text-left flex-1 font-bold tracking-tighter">{item}</div>
                            <div key={price} className="hidden md:block lg:block">€{price}</div>
                        </div>
                    </div>     
                    ))}
                </div>
            </div>
        </div>
    </section>
}