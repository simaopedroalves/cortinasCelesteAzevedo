export default function Button ({children, ...props}) {
    return (
      <button
        {...props} 
        type="button"
        className="rounded-xl w-3/4 mx-auto p-3 mt-12 duration-1000 bg-gray border-2 border-cream text-beige hover:bg-cream hover:text-gray font-semibold hover:cursor-pointer"
      >
        {children}
      </button>
    );
}