
export default function MenuOptions ({onclickOption}) {

    const menuOptionsClasses = 'font-bold text-2xl my-6 md:text-md text-white text-center bg-transparent md:bg-transparent cursor-pointer hover:text-navy';

    const menuOptions = [
        'Início',
        'Portefólio',
        'Contactos',
        'Sobre',
        'Pedir Orçamento',
        'Termos e condições'
    ];

    let menuClasses = 'z-10 transition-all duration-700 ease-in-out bg-gray/90 w-screen h-[100lvh] fixed top-12 gap-0 uppercase justify-center py-4 md:block md:flex md:top-0 md:bg-transparent';

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