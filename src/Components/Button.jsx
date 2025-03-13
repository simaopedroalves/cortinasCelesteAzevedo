export default function Button ({children, ...props}) {
    return (
      <button
        {...props}
        className="rounded-xl p-3 mt-12 mx-12 duration-1000 bg-gray border-2 border-cream text-beige hover:bg-cream hover:text-gray font-semibold"
      >
        {children}
      </button>
    );
}