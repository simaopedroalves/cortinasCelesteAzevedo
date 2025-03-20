export default function Image ({src, alt, classes}) {
    
    const allClasses = `object-cover md:object-fit w-full h-full ${classes}`;

    return (
        <img src={src} alt={alt} className={allClasses}/>
    );
}