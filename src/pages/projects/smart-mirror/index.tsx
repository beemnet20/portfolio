import React from 'react';
import Image from 'next/image';
import PageTitle from '@/components/PageTitle';
import FeaturedImageGallery from '@/components/FeaturedImageGallery';

const data = [
  {
    url: '/data/smart-mirror/smart-mirror-building-the-frame.jpg',
    caption: 'Building the frame for the smart mirror'
  },
  {
    url: '/data/smart-mirror/smart-mirror-mounting-the-frame.jpg',
    caption: 'Mounting the frame for the smart mirror'
  },
  {
    url: '/data/smart-mirror/smart-mirror-back-of-the-mirror.jpg',
    caption: 'Placing the monitor on the top corner and covering the rest with black poster'
  },
  {
    url: '/data/smart-mirror/smart-mirror-send-alert-feature.jpg',
    caption: 'Using the send alert feature to send a message to the mirror from my phhone'
  }
];

const SmartMirror: React.FC<{}> = () => {
  return (
    <div className='flex m-8 flex-col h-full'>
      <PageTitle title='Smart Mirror' id='smart-mirror' />
      <div className=' md:w-2/3 flex mx-auto'>
        <div className=''></div>

        <div className=''>
          <div className='flex flex-col lg:flex-row'>
            <div className='m-4'>
              <Image
                src='/data/smart-mirror/smart-mirror.jpg'
                alt='Smart Mirror'
                className=''
                width={1800}
                height={1800}
              />
            </div>
            <p className='text-lg inline m-2'>
              The smart mirror or Magic Mirror was originally developed by
              Micheal Teeuw. How it works is that there is a Raspberry Pi
              processor attached to a monitor displaying a black background and
              white text. The monitor is then placed behind a one way mirror
              mounted on a wooden frame. The screen displays modules such as
              time, weather, calendar, news feed, etc. The modules you'd like to
              display can be modified by editing the open source configuration
              document. For my mirror I edited the config document to display
              weather for Seattle by using my API key from my openweather.com
              account. I've also edited the config document to show my personal
              Google calendar and the news feed from my favorite news source. I
              also configured an existing module to use my processor's IP
              address so that I can control the displayed modules on my phone or
              computer. I plan to write my own Python module to integrate
              cameras and/or motion sensors to the mirror as well as a voice
              assistant.
            </p>
          </div>
          <p className='m-2 text-lg'>
            The mirror I built is 2x5 ft and weighs approximately 50 lbs. It was
            challenging to build in a studio apartment, with no power tools
            except an impact drill. This is my first project that involved wood
            work and I spent a whole afternoon at the Home Depot measuring and
            cutting all the pieces.
          </p>
        </div>
      </div>
      <FeaturedImageGallery data={data} />
    </div>
  );
};

export default SmartMirror;
