import React, { useState, useEffect, useRef } from 'react';
import ImageCycler from "../components/ImageCycler.tsx";
import ThreeColumnLayout from "../components/ThreeColumnLayout.tsx";


const Bonjour: React.FC = () => {
    const [count, setCount] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const images: string[] = [
        "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/philtrum_01%400.3x.jpg",
        "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/philtrum_02%400.33x.jpg",
        "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/philtrum_03%400.33x.jpg",
        "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/philtrum_04%400.3x.jpg",
        "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/philtrum_05%400.3x.jpg",
        "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/philtrum_06%400.3x.jpg",
    ];

    const images2: string[] = [
        "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/edie+exhib+cover+photos/somatic-attunement_01.png",
        "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/somatic-attunement02%400.25x.jpg",
        "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/somatic-attunement03%400.2x.jpg",
        "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/somatic-attunement04%400.2x.jpg",
        "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/somatic-attunement05%400.2x.jpg",
        "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/somatic-attunement06%400.2x.jpg",
        "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/somatic-attunement07%400.2x.jpg",
        "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/somatic-attunement08%400.2x.jpg",
        "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/somatic-attunement09%400.2x.jpg",
        "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/somatic-attunement10%400.2x.jpg",
        "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/somatic-attunement11%400.2x.jpg",
        "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/somatic-attunement12%400.2x.jpg",
        "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/somatic-attunement13%400.2x.jpg",
        "https://edie-xu-portfolio.s3.us-east-2.amazonaws.com/photos/somatic-attunement14%400.25x.jpg",
    ];

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