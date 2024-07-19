import React from 'react';
import Image from 'next/image';
// Define the type for a single image object
interface ImageData {
  url: string;
  caption?: string;
}

// Define the props for the FeaturedImageGallery component
interface FeaturedImageGalleryProps {
  data: ImageData[];
}

// The FeaturedImageGallery component
const FeaturedImageGallery: React.FC<FeaturedImageGalleryProps> = ({
  data,
}) => {
  // State to keep track of the active image URL
  const [active, setActive] = React.useState(data[0]?.url || '');
  const [activeCaption, setActiveCaption] = React.useState(data[0]?.caption || '');
  return (
    <div className='grid gap-4 m-6 mx-auto md:w-2/3'>
      <h2 className='text-2xl text-center font-bold'>Images</h2>
      <div className='flex justify-between'>
        {data.map((item, index) => (
          <div key={index} onClick={() => {setActive(item.url); setActiveCaption(item.caption ?? '')}}>
            <Image
              height={100}
              width={100}
              src={item.url}
              className= { `${item.url === active? 'border-yellow-500 border-4 p-2':''} h-20 max-w-full cursor-pointer object-cover object-center`}
              alt='gallery-image'
            />
          </div>
        ))}
      </div>
      <div>
        <p className='text-center m-2'>{activeCaption}</p>
        <Image
          className='h-auto w-full max-w-full  object-cover object-center md:h-[500px] '
          src={active}
          alt=''
          height={400}
          width={400}
        />
      </div>
    </div>
  );
};

export default FeaturedImageGallery;
