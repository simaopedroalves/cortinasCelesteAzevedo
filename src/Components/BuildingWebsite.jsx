import logo from '/src/assets/logotipo.jpeg';
//src\assets\logotipo.jpeg

export default function BuildingWebsite () {
        const phoneNumber = '937 402 642';
        const email = 'cortinascelesteazevedo@gmail.com';

    return (
      <>
        <img src={logo} alt="Logotipo" className='rounded-full max-w-[50vw] sm:max-w-[10vw] object-fit mx-auto'/>
        <h1 className="font-bold text-4xl md:text-6xl text-center text-beige">
          Cortinas Celeste Azevedo
        </h1>
        <p className="text-2xl md:text-4xl text-cream font-bold text-center ">
          Website em construção
        </p>
        <div className="bg-beige w-full h-[25lvh] grid items-center justify-center font-bold rounded-md">
          <h4 className="underline mx-auto">Contactos</h4>
          <p className="font-bold cursor-pointer flex gap-4">
            Telemóvel:
            <a href={`tel:${phoneNumber}`} className="hover:underline hover:text-navy"> 937 402 642</a>
          </p>
          <p
            className="font-bold cursor-pointer flex gap-4"
          >
            Email:
            <a href={`mailto:${email}`} className="hover:underline hover:text-navy">cortinascelesteazevedo@gmail.com</a>
          </p>
        </div>
      </>
    );
}
