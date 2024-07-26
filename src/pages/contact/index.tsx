import React, { useState } from 'react';
import Image from 'next/image';

import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import * as EmailValidator from 'email-validator';
const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

const Contact: React.FC = () => {
  const [messageSent, setMessageSent] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');




  const handleSubmit = async () => {
    if(!EmailValidator.validate(email)) {
      alert('Please enter a valid email address');
      setEmail('');
      return;
    }
    const templateParams = {
      user_name: name,
      user_email: email,
      message: message,
    }
    try {
      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        {
          publicKey: publicKey,
        },
      );  
      setMessageSent(true);
      console.log('SUCCESS!');
    } catch (err) {
      if (err instanceof EmailJSResponseStatus) {
        console.log('EMAILJS FAILED...', err);
        alert('There was an error sending your message, please try again later');
        return;
      }
      setMessageSent(false);
      console.log('ERROR', err);
      alert('There was an error sending your message, please try again later');
    }
  }

  return (
    <div className='flex m-8 flex-col h-full'>
      {messageSent ? (
        <div className='transform translate-y-1/2'>
        <h1 className=' mx-auto text-yellow-500 text-5xl'>Thank you for your message, I will get back to you asap!</h1>

        </div>
      ) : (
        <form className='rounded w-full md:w-2/3 lg:w-1/2  m-4 p-4 mx-auto bg-gradient-to-r from-orange-200 via-amber-200 to-yellow-200'>
          <h3 className='font-bold text-xl text-black mb-4'>Contact me</h3>
          <div className='grid grid-cols-1 gap-2'>
            <div className=''>
              <label htmlFor='name' className='block text-black font-bold mb-2'>
                Name
              </label>
              <input
                type='text'
                id='name'
                className='shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline'
                placeholder='Enter your name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className=''>
              <label
                htmlFor='email'
                className='block text-black font-bold mb-2'
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                className='shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline'
                placeholder='Enter your email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className='mb-4'>
            <label
              htmlFor='message'
              className='block text-black font-bold mb-2'
            >
              Message
            </label>
            <textarea
              id='message'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Enter your message'
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div>
            <a
              href='https://www.linkedin.com/in/beemnet-workeneh-25b579b3/'
              target='_blank'
            >
              <Image
                src='/portfolio/logos/linkedin.svg'
                alt='linkedin'
                width={30}
                height={30}
                className='rounded inline m-2'
              />
            </a>
            <a href='https://github.com/beemnet20' target='_blank'>
              <Image
                src='/portfolio/logos/github.svg'
                alt='github'
                width={30}
                height={30}
                className='rounded inline m-2'
              />
            </a>
            <a href='mailto:beemnet17@gmail.com'>
              <Image
                src='/portfolio/logos/mail.svg'
                alt='mail'
                width={30}
                height={30}
                className='rounded inline m-2'
              />
            </a>

            <button
              type='button'
              className='float-right inline bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              disabled={name === '' || email === '' || message === ''}
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Contact;
