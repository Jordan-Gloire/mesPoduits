import Image from "next/image";
export default async function home() {
    const getUsers = async () => {
        const res = await fetch('https://dummyjson.com/products');
        return res.json();
    }
    const data = await getUsers();
    return (
        <>
            {
                data.products.map((elt, index) => {
                    return (
                        <div key={index} className="flex flex-col justify-center items-center">
                            <Image src={elt.thumbnail} alt="ok" width={200} height={200} className=" w-80 hover:grayscale ease-in-out duration-700 hover:scale-95"/>
                            
                            <div className="p-5 my-3">
                                <h1 className="text-2xl font-bold">{elt.title}</h1>
                                <p className="text-xl py-2">{elt.description}</p>
                                <p className="text-xl py-2">Prix :{elt.price}$</p>
                                <p className="text-xl py-2">Stock: {elt.stock}</p>
                                <p className="text-xl py-2">Categorie {elt.category}</p>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}