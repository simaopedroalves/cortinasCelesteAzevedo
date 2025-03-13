import imageOne from '../assets/cortinado-quarto-4.jpg';
import imageTwo from '../assets/cortinado-quarto-2.jpg';  
import imageThree from '../assets/cortinado-quarto.jpg';
import Image from './Image.jsx';
import About from './About.jsx';
import ContactUs from './ContactUs.jsx';


export default function HomePage () {

    const sectionClasses = 'w-screen h-screen bg-transparent';
    
    return (
      <>
        <section className={sectionClasses}>
          <h1 className="bg-cream/30 absolute z-9 mt-[50lvh] w-[100vw] py-6 text-center text-2xl text-navy font-bold px-8 overflow-hidden">
            Transformamos o seu espaço com cortinados personalizados e feitos à
            medida
          </h1>
          <div className="flex gap-0 scroll-smooth w-screen h-screen">
            <Image src={imageOne} alt="cortinados" classes="w-full h-full" />
            <Image src={imageTwo} alt="cortinados" classes="w-full h-full" />
            <Image src={imageThree} alt="cortinados" classes="w-full h-full" />
          </div>
        </section>
        <About />
        <ContactUs />
      </>
    );
}