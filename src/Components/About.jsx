import myPhoto from '../assets/celeste-images/celeste-4.jpg';
import myPhotoTwo from '../assets/celeste-images/celeste-5.jpg';
import myPhotoThree from '../assets/celeste-images/celeste-2.jpg';

const imagesClass = 'object-cover h-[80lvh] w-screen rounded-md md:w-1/4 mx-auto ';
const divClass = 'mx-auto px-6 text-cream grid items-center gap-8 justify-center md:gap-20';

export default function About () {

    function AboutDiv ({image, text, title, inverted}) {
        return inverted ? (
          <div className={divClass}>
            <h2 className='font-bold italic text-xl text-beige text-center md:text-4xl'>{title}</h2>
            <p className='text-justify'>{text}</p>
            <img
              src={image}
              alt="Fotografia de Celeste"
              className={imagesClass}
            />
          </div>
        ) : (
          <div className={divClass}>
            <h2 className='font-bold italic text-xl text-beige text-center md:text-4xl'>{title}</h2>
            <img
              src={image}
              alt="Fotografia de Celeste"
              className={imagesClass}
            />
            <p className='text-justify md:px-40 md:text-md lg:px-[30vw] lg:text-xl'>{text}</p>
          </div>
        );
    }

    return (
      <>
        <section className="mx-auto bg-gray grid gap-6 justify-center items-center py-12 md:py-30 md:gap-60">
          {/* <h1 className="font-bold text-2xl text-cream text-center drop-shadow-md outline-0 border-0 bg-transparent">
            Sobre mim
          </h1> */}

          <AboutDiv
            title='Experiência e Dedicação'
            image={myPhoto}
            text="A Celeste é natural de Famalicão, no norte de Portugal, e conta 
                com mais de 30 anos de experiência no setor têxtil. Ao longo da sua carreira, passou por diversas
                empresas do setor, mas foi trabalhando por conta própria que encontrou a sua verdadeira vocação. 
                A sua paixão pelo trabalho manual e a atenção aos detalhes fazem dela uma profissional de excelência, 
                sempre empenhada em superar as expectativas dos seus clientes. A Celeste é modelista de formação e domina 
                todas as etapas da criação de uma peça de roupa: desde a elaboração de moldes, o desenho e o corte, até à 
                confeção final. Seja um vestido, uma blusa, uma calça, uma camisola ou uma t-shirt, ela garante que cada 
                peça seja única e feita à medida das necessidades do cliente. A prova de ajuste é uma etapa crucial no seu 
                processo, assegurando que o produto final só é entregue quando o cliente está 100% satisfeito."
          />

          <AboutDiv 
            title='Precisão e Versatilidade'
            image={myPhotoTwo}
            text="Um dos maiores talentos da Celeste é a sua capacidade de olhar para uma peça de roupa e recriá-la 
            com precisão, mantendo a qualidade e o design originais. Esta habilidade, aliada à sua vasta experiência, 
            faz dela uma referência no setor.
            Além da confeção de roupa, a Celeste destaca-se também na criação de cortinas sob medida. Seja para salas, 
            cozinhas, escritórios ou quartos, ela adapta-se a qualquer espaço e tipo de tecido, garantindo um resultado 
            final que combina funcionalidade e estética. O seu portfólio, repleto de trabalhos realizados e clientes 
            satisfeitos, é a prova do seu profissionalismo e dedicação."
          />

          <AboutDiv 
            title='Confiança e Satisfação'
            image={myPhotoThree}
            text="A Celeste tem experiência tanto no setor empresarial como no atendimento ao consumidor final, 
            o que lhe permite compreender as necessidades específicas de cada cliente. O seu compromisso com a qualidade, 
            o respeito pelos prazos e a atenção aos detalhes são valores que definem o seu trabalho.
            Ao escolher os serviços da Celeste, os clientes podem ter a certeza de que estão a trabalhar com uma 
            profissional experiente, que valoriza a sua satisfação acima de tudo. Cada peça criada ou adaptada por 
            ela reflete o seu cuidado artesanal e a sua paixão pelo que faz."
          />
        </section>
      </>
    );
}
