import React from 'react';
import Image from 'next/image';
import PageTitle from '@/components/PageTitle';

const LoadADose: React.FC<{}> = () => {
  return (
    <div className='flex m-8 flex-col h-full'>
      <PageTitle title='LOAD-A-DOSE' id='load-a-dose' />
      <div className='grid  md:grid-cols-4 lg:grid-cols-10 gap-3'>
        <div className='lg:col-span-2 md:col-span-1'>
          <div className=''>
            <Image
              src='/portfolio/data/load-a-dose-device.jpg'
              alt='Load-A-Dose'
              width={449}
              height={540}
            />
          </div>
        </div>

        <div className='lg:col-span-8 md:col-span-3'>
          <p className='text-lg'>
            Load-A-Dose is an electro-mechanical medical device that takes user
            input to measure and draw insulin from a vial into a syringe. It has
            an LCD screen to display the reading and a speaker that reads aloud
            the information displayed. The target user group for the device is
            diabetic people that are blind or have low visual acuity. It has
            large tactile buttons that are designed with the key demographic in
            mind. There are many insulin devices in the market, what makes
            Load-A-Dose stand out is it's affordability. Syringe and vial are
            the cheapest form of insulin administration compared to syringe pens
            and closed loop insulin pumps. However for a person with low visual
            acuity the small markers on the already small syringes makes it
            difficult to self administer insulin accurately, leading to further
            health complications. <br />
            Load-A-Dose was designed as part of Engineering in Health senior
            project at the University of Washington. My role was to design and
            prototype the hardware and firmware. I also designed some of the
            shrouding and the attachments to the linear actuator.
            <br />I also designed and built a prototype of a Near Field
            Communications reader for insulin vials. As there are many types of
            insulin it is crucial that a person with low visual acuity is able
            to administer the correct type. Although there are products like
            this one in the market (designed mainly for pill bottles) ours is
            designed to be integrated with the Load-A-Dose device itself.
          </p>
        </div>
      </div>
      <h2 className='text-2xl font-bold my-2'>How it works</h2>
      <div className='grid md:grid-cols-5 gap-4'>
        <div className='md:col-span-1'>
          <video width={300}  controls controlsList='nodownload'>
            <source src='/portfolio/data/load-a-dose-video.mp4' />
          </video>
        </div>
        <div className='md:col-span-2 mx-4'>
          <h2 className='text-xl font-bold my-2'>Steps</h2>
          <ol className='text-xl list-decimal' type='1'>
            <li>Load syringe and insulin vial into device</li>
            <li>Start device by pushing start button</li>
            <li>Enter x amount of units to be drawn (default 10)</li>
            <li>Device draws x amount of air into syringe</li>
            <li>Vial is lowered and air is injected into it</li>
            <li>The device draws x amount insulin from the vial</li>
            <li>The vial is raised</li>
            <li>The syringe is removed</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default LoadADose;
