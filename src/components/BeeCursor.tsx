import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const BeeCursor: React.FC = () => {
    const beeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            if (beeRef.current) {
                const beeElement = beeRef.current;
                const beeImage = beeElement.querySelector('img');

                if (beeImage) {
                    // Calculate position of the bee
                    beeElement.style.left = `${event.clientX - beeImage.width/2}px`;
                    beeElement.style.top = `${event.clientY - beeImage.height/2}px`;

                    // Calculate the angle of rotation
                    const angle = Math.atan2(
                        event.clientY - window.innerHeight / 2,
                        event.clientX - window.innerWidth / 2
                    ) * 180 / Math.PI;

                    beeImage.style.transform = `rotate(${angle}deg)`;
                }
            }
        };

        document.addEventListener('mousemove', handleMouseMove);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);
    const containerStyle: React.CSSProperties = {
        position: 'absolute',
        top: 0,
        left: 0,
        pointerEvents: 'none',
    };

    const beeStyle: React.CSSProperties = {
        transformOrigin: 'center',
    };

    return (
        <div style={containerStyle} ref={beeRef}>
            <Image style={beeStyle} id="image" height={32} width={32} src={'/portfolio/favicon-32x32.png'} alt="Bee" />
        </div>
    );

};

export default BeeCursor;
