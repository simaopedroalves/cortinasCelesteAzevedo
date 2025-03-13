
export default function Navbar ({onOpenMenu, onHome}) {

    
    return (
      <header className="w-screen p-2 bg-gray/50 fixed top-0 z-12">
        <nav className="flex justify-between">
          <img
            src="/src/assets/logotipo.jpeg"
            alt="Logotipo"
            className="w-10 h-10 object-fit rounded-full my-auto sm:w-16 sm:h-16"
            onClick={() => onHome(0)}
          />
          <button onClick={onOpenMenu} className="cursor-pointer">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-6 h-6 fill-cream cursor-pointer hover:text-cream md:hidden my-auto"
            >
                <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
            </svg>
            </button>
        </nav>
      </header>
    );
}