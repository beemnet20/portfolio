import React from 'react';

const About: React.FC = () => {
    return (
        <div id='about' style={{scrollMarginTop: "100px"}} className="flex m-8 flex-col h-screen">
            <img
                className="w-40 h-40 rounded-full mb-4"
                src="/portfolio/me.jpg"
                alt="Profile Picture"
            />
            <h1 className="text-2xl font-bold mb-2">About Me</h1>
            <p className="text-lg text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                consectetur, nunc id aliquet lacinia, mauris tellus lacinia elit, id
                fringilla nunc nunc id lectus.
            </p>
        </div>
    );
};

export default About;