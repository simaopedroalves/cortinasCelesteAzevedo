
export default function MenuOptions ({onclickOption}) {

    const menuOptionsClasses = 'font-bold z-12 text-2xl lg:text-xl my-6 text-white hover:text-beige text-center bg-transparent cursor-pointer';

    const menuOptions = [
        'Início',
        'Portefólio',
        'Contactos',
        'Sobre',
        'Pedir Orçamento',
        'Termos e condições'
    ];

    let menuClasses = 'z-11 transition-all duration-700 ease-in-out bg-gray/90 w-screen h-[100lvh] fixed top-0 gap-0 uppercase justify-center py-4 lg:gap-8 lg:py-auto lg:p-0 lg:block lg:flex lg:top-0 lg:h-min lg:bg-transparent lg:transition-none lg:duration-0 lg:ease-none';

    const menu = menuOptions.map((option, index) => (
        <li key={index} className={menuOptionsClasses} id={index} onClick={() => onclickOption(index)}>
          {option}
        </li>
      ))

    return ( 
        <ul className={menuClasses}>
          {menu}
        </ul>
      );

}