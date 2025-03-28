export default function Image ({src, alt, classes}) {
    
    const allClasses = `object-cover md:object-fit w-full h-full md:rounded-xl ${classes}`;

    return (
        <img src={src} alt={alt} className={allClasses}/>
    );
}