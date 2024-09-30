import React from 'react';

const ThreeColumnLayout: React.FC = () => {
    return (
        <div
            className="w-full max-w-screen-md mx-auto px-4 py-2 text-xs lowercase text-gray-700 font-sans font-light bg-white">
            <div className="text-left font-bold">jing yi xu</div>
            <div className="w-full h-px bg-gray-200 my-2"/>
            {/* Corrected the bg class */}
            <div className="grid grid-cols-3 gap-4">
                <div className="text-left overflow-hidden whitespace-nowrap">
                    <div className="inline-flex animate-scroll">
                        {/* Repeated text */}
                        {[...Array(12)].map((_, i) => (
                            <span key={i} className="mr-8">
                        jing yi xu is an artist and fashion designer based in new york city
                    </span>
                        ))}
                    </div>
                </div>
                <div className="text-center">Information</div>
                <div className="text-right">mail</div>
            </div>
            <div className="w-full h-px bg-gray-200 my-2"/>
            <div className="grid grid-cols-3 gap-4">
                <div className="text-left">@jingyix_</div>
                <div className="text-center">Archive</div>
                <div className="text-right">1 444 222 444</div>
            </div>
            <div className="w-full h-px bg-gray-200 my-2"/>
        </div>
    );
};

export default ThreeColumnLayout;