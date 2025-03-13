export default function Image ({src, alt, classes}) {
    
    const allClasses = `object-cover ${classes}`;

    return (
        <img src={src} alt={alt} className={allClasses}/>
    );
}