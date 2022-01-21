import Image from "next/image";

function Card({ img, children }) {
    return (
        <div className="w-60 h-auto my-4 bg-white rounded shadow-2xl py-2 flex flex-col items-center">
            <Image src={img} alt=""
                   width={100} height={100}/>
            {children}
        </div>
    )
}

export default Card