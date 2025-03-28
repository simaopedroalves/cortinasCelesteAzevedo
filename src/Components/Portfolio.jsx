import Image from "./Image";
import imageOne from '../assets/cortinado-sala.jpg';

export default function Portfolio () {
    return (
        <section className="py-12 bg-gray">
            <h1 className=" text-beige text-3xl font-bold text-center mt-4 sm:mt-8">
            O nosso trabalho
            </h1> 
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-screen mt-10 gap-12 md:gap-20 ">
                <Image src={imageOne} alt="celeste" className=""/>
                <Image src={imageOne} alt="celeste" className="rounded-xl"/>
                <Image src={imageOne} alt="celeste" className=""/>
                <Image src={imageOne} alt="celeste" className=""/>
                <Image src={imageOne} alt="celeste" className=""/>
                <Image src={imageOne} alt="celeste" className=""/>
                <Image src={imageOne} alt="celeste" className=""/>
                <Image src={imageOne} alt="celeste" className=""/>
                <Image src={imageOne} alt="celeste" className="rounded-xl"/>

            </div>
        </section>
    );
}