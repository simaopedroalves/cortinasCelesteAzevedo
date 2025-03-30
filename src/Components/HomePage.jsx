import imageOne from '../assets/portfolio-images/cortinado-sala.jpg';
import Image from './Image.jsx';
import About from './About.jsx';
import ContactUs from './ContactUs.jsx';


export default function HomePage () {

    const sectionClasses = 'w-screen h-screen bg-transparent';
    
    return (
      <>
        <section className={sectionClasses}>
          <h1 className="bg-cream/30 absolute z-9 mt-[50lvh] w-[100vw] py-6 text-center text-2xl md:text-4xl text-navy font-bold px-8 overflow-hidden">
            Transformamos o seu espaço com cortinados personalizados e feitos à
            medida
          </h1>
          <div className="top-0 gap-0 absolute w-screen h-screen">
            <Image src={imageOne} alt="cortinados" classes="" />
          </div>
        </section>
        <About />
        <ContactUs />
      </>
    );
}