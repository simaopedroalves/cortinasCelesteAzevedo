export default function DeveloperLink () {

    const devName = 'Simão Pedro';
    const devLink = 'https://portfoliosimaopedro.webdevsp.com/'

    return (
    <div className="mt-10 text-center">
      <a 
        href={devLink}
        target="_blank"
        rel="noreferrer"
        className="hover:text-md transition-all duration-1000 text-xs"
      >
        Desenvolvido por {devName}
      </a>
    </div>
    );
}