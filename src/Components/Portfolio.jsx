import image1 from '../assets/portfolio-images/cortinado-quarto-2.jpg';
import image2 from '../assets/portfolio-images/cortinado-quarto-3.jpg';
import image3 from '../assets/portfolio-images/cortinado-quarto-4.jpg';
import image4 from '../assets/portfolio-images/cortinado-quarto-5.jpg';
import image5 from '../assets/portfolio-images/cortinado-quarto-6.jpg';
import image6 from '../assets/portfolio-images/cortinado-quarto-7.jpg';
import image7 from '../assets/portfolio-images/cortinado-quarto.jpg';
import image8 from '../assets/portfolio-images/cortinado-sala-2.jpg';
import image9 from '../assets/portfolio-images/cortinado-sala-3.jpg';
import image10 from '../assets/portfolio-images/cortinado-sala-4.jpg';
import image11 from '../assets/portfolio-images/cortinado-sala-jantar.jpg';
import image12 from '../assets/portfolio-images/cortinado-sala-jogos.jpg';
import image13 from '../assets/portfolio-images/cortinado-sala.jpg';
import image14 from '../assets/portfolio-images/cortinados-quarto-6.jpg';
import image15 from '../assets/portfolio-images/cortinados-quarto-criancas.jpg';
import image16 from '../assets/portfolio-images/cortinados-sala-estar.jpg';

// import imagess from '../assets';
const portfolioImages = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16
];

export default function Portfolio () {
    return (
      <section className="py-12 bg-gray">
        <h1 className=" text-beige text-3xl font-bold text-center mt-4 sm:mt-8">
          O nosso trabalho
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-screen mt-10 gap-12 md:gap-20 ">
          {portfolioImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="Fotografia de cortinados instalados"
              className="object-cover md:object-fit w-full h-full md:rounded-xl"
            />
          ))}
        </div>
      </section>
    );
}