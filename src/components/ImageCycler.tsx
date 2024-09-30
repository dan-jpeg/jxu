import React, { useState, useEffect } from 'react';

interface ImageCyclerProps {
    images: string[];
    interval?: number;
}

const ImageCycler: React.FC<ImageCyclerProps> = ({ images, interval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, interval);

        return () => clearInterval(timer);
    }, [images, interval]);

    return (
        <div className="w-full  max-w-screen-lg items-center justify-center ">
        <img
            src={images[currentIndex]}
    alt={`Cycled image ${currentIndex + 1}`}
    className="w-full h-full mw-3xl object-contain  "
        />
        </div>
);
};

export default ImageCycler;
