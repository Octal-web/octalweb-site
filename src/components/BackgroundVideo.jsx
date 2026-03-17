export function BackgroundVideo () {
    return (
        <video className="absolute top-0 left-0 w-full h-full object-cover -z-10" autoPlay muted loop playsInline>
            <source src="/animate-bg.mp4" type="video/mp4" />
        </video>
    )
};