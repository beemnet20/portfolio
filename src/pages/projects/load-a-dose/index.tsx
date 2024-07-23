import React from 'react';
import Image from 'next/image';
import PageTitle from '@/components/PageTitle';
import FeaturedImageGallery from '@/components/FeaturedImageGallery';

const data = [
  {
    url: '/portfolio/data/load-a-dose/load-a-dose-prototypes-and-nfc-reader.jpg',
    caption: 'Prototypes and NFC reader',
  },
  {
    url: '/portfolio/data/load-a-dose/load-a-dose-device-inside.jpg',
    caption: 'Inside the Load-A-Dose device',
  },
  {
    url: '/portfolio/data/load-a-dose/load-a-dose-arduino-mega-custom-shield.jpg',
    caption: 'Arduino Mega with custom shield',
  },
  {
    url: '/portfolio/data/load-a-dose/load-a-dose-wiring-diagram.jpg',
    caption: 'Wiring diagram for Load-A-Dose',
  },
  {
    url: '/portfolio/data/load-a-dose/load-a-dose-nfc-reader-wiring-diagram.jpg',
    caption: 'Wiring diagram for NFC reader that reads insulin vials',
  },
];

const LoadADose: React.FC<{}> = () => {
  return (
    <div className='flex m-8 flex-col h-full'>
      <PageTitle title='LOAD-A-DOSE' id='load-a-dose' />
      <div className=' md:w-2/3 flex mx-auto'>
        <div className=''>
          <div className='flex flex-col lg:flex-row'>
            <div className='m-4'>
              <Image
                src='/portfolio/data/load-a-dose/load-a-dose-device.jpg'
                alt='Load-A-Dose'
                className=''
                width={1800}
                height={1800}
              />
            </div>
            <p className='text-lg inline m-2'>
              Load-A-Dose is an electro-mechanical medical device that takes
              user input to measure and draw insulin from a vial into a syringe.
              It has an LCD screen to display the reading and a speaker that
              reads aloud the information displayed. The target user group for
              the device is diabetic people that are blind or have low visual
              acuity. It has large tactile buttons that are designed with the
              key demographic in mind. There are many insulin devices in the
              market, what makes Load-A-Dose stand out is it&apos;s
              affordability. Syringe and vial are the cheapest form of insulin
              administration compared to syringe pens and closed loop insulin
              pumps. However for a person with low visual acuity the small
              markers on the already small syringes makes it difficult to self
              administer insulin accurately, leading to further health
              complications.
            </p>
          </div>
          <p className='m-2 text-lg'>
            Load-A-Dose was designed as part of Engineering in Health senior
            project at the University of Washington. My role was to design and
            prototype the hardware and firmware. I also designed some of the
            shrouding and the attachments to the linear actuator.
          </p>
          <p className='m-2 text-lg'>
            I also designed and built a prototype of a Near Field Communications
            reader for insulin vials. As there are many types of insulin it is
            crucial that a person with low visual acuity is able to administer
            the correct type. Although there are products like this one in the
            market (designed mainly for pill bottles) ours is designed to be
            integrated with the Load-A-Dose device itself.
          </p>
        </div>
      </div>
      <FeaturedImageGallery data={data} />
      <h2 className='text-2xl font-bold my-2 mx-auto'>How it works</h2>
      <div className='flex justify-center flex-col sm:flex-row'>
        <div className='mx-2'>
          <video width={300} controls controlsList='nodownload'>
            <source src='/portfolio/data/load-a-dose/load-a-dose-video.mp4' />
          </video>
        </div>
        <div className='mx-2'>
          <ol
            className='items-center w-full space-y-4  rtl:space-x-reverse'
            type='1'
          >
            <li className='flex items-center space-x-2.5 rtl:space-x-reverse'>
              <span className='flex items-center justify-center w-8 h-8 border border-yellow-600 rounded-full shrink-0'>
                1
              </span>
              <span>Load syringe and vial into device</span>
            </li>
            <li className='flex items-center space-x-2.5 rtl:space-x-reverse'>
              <span className='flex items-center justify-center w-8 h-8 border border-yellow-600 rounded-full shrink-0'>
                2
              </span>
              <span>Press start button</span>
            </li>
            <li className='flex items-center space-x-2.5 rtl:space-x-reverse'>
              <span className='flex items-center justify-center w-8 h-8 border border-yellow-600 rounded-full shrink-0'>
                3
              </span>
              <span>
                Enter <span className='text-yellow-500'>x</span> amount of units
                to be drawn
              </span>
            </li>
            <li className='flex items-center space-x-2.5 rtl:space-x-reverse'>
              <span className='flex items-center justify-center w-8 h-8 border border-yellow-600 rounded-full shrink-0'>
                4
              </span>
              <span>
                <span className='text-yellow-500'>x</span> amount of air drawn
                into syringe
              </span>
            </li>
            <li className='flex items-center space-x-2.5 rtl:space-x-reverse'>
              <span className='flex items-center justify-center w-8 h-8 border border-yellow-600 rounded-full shrink-0'>
                5
              </span>
              <span>Vial lowered and injected with air</span>
            </li>
            <li className='flex items-center space-x-2.5 rtl:space-x-reverse'>
              <span className='flex items-center justify-center w-8 h-8 border border-yellow-600 rounded-full shrink-0'>
                6
              </span>
              <span>
                <span className='text-yellow-500'>x</span> amount of insulin
                drawn from the vial
              </span>
            </li>
            <li className='flex items-center space-x-2.5 rtl:space-x-reverse'>
              <span className='flex items-center justify-center w-8 h-8 border border-yellow-600 rounded-full shrink-0'>
                7
              </span>
              <span>The vial is raised</span>
            </li>
            <li className='flex items-center space-x-2.5 rtl:space-x-reverse'>
              <span className='flex items-center justify-center w-8 h-8 border border-yellow-600 rounded-full shrink-0'>
                8
              </span>
              <span>The syringe is removed</span>
            </li>
          </ol>
        </div>
      </div>

    </div>
  );
};

export default LoadADose;
