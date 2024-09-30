import ImageCycler from "../components/ImageCycler.tsx";
import ThreeColumnLayout from "../components/ThreeColumnLayout.tsx";


const Bonjour: React.FC = () => {



    const jxuimages: string[] = [
        "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/jxu/design.jpeg",
        "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/jxu/Adesign2.jpeg",
        "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/jxu/Adesign5.jpeg",
        "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/jxu/Adesign3.jpeg",
        "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/jxu/Adesign4.jpeg",
    ]
    //
    // useEffect(() => {
    //     const handleWheel = (event: WheelEvent) => {
    //         event.preventDefault();
    //         setCount(prevCount => {
    //             const newCount = prevCount + Math.sign(event.deltaY);
    //             return Math.max(0, newCount); // Prevent negative counts
    //         });
    //     };
    //
    //     const container = containerRef.current;
    //     if (container) {
    //         container.addEventListener('wheel', handleWheel, { passive: false });
    //     }
    //
    //     return () => {
    //         if (container) {
    //             container.removeEventListener('wheel', handleWheel);
    //         }
    //     };
    // }, []);

    return (
        <div className="h-screen w-screen bg-white flex items-center overflow-y-hidden  flex-col relative">
            {/*<InteractiveGradient count={count} />*/}

            <div className="flex mx-4  max-h-[60vh] max-w-screen-md pt-3 mb-4 ">
                <ImageCycler images={jxuimages} interval={1424} />
            </div>
            <ThreeColumnLayout />

        </div>
    );
};

export default Bonjour;