import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

function classNames(...classes: [string]) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const [showBee, setShowBee] = useState(false);
  const [active, setActive] = useState<string>('');
  const [pageOrigin, setPageOrigin] = useState<string>('');

  const getCurrentPage = () => {
    const path = window.location.pathname;
    let currentPage = '';
    setPageOrigin(window.location.origin);
    navigation.forEach((item) => {
      if (item.href === path) {
        currentPage = item.name;
      }
    });
    return currentPage;
  };
  useEffect(() => {
    setActive(getCurrentPage());
    setShowBee(getCurrentPage() === "Home"? false:true)
  }, []);

  return (
    <Disclosure as='nav' className='z-20 block bg-black top-0  w-full'>
      <div className='mx-auto px-2 sm:px-6 lg:px-8'>
        <div className='relative flex h-16 items-center justify-end'>
          <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
            {/* Mobile menu button*/}
            <DisclosureButton className='group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-yellow-300 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
              <span className='absolute -inset-0.5' />
              <span className='sr-only'>Open main menu</span>
              <Bars3Icon
                aria-hidden='true'
                className='block h-6 w-6 group-data-[open]:hidden'
              />
              <XMarkIcon
                aria-hidden='true'
                className='hidden h-6 w-6 group-data-[open]:block'
              />
            </DisclosureButton>
          </div>
          <div className='flex-1 flex justify-start sm:justify-start'>
            { showBee &&
            <Link href='/' className=''>
              <Image
                width={32}
                height={32}
                className='hidden sm:block'
                src='/android-chrome-192x192.png'
                alt='Workflow'
              />
            </Link>
            }
          </div>
          <div className='flex    justify-end sm:items-stretch sm:justify-start'>
            <div className='justify-end hidden sm:ml-6 sm:block'>
              <div className='flex '>
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={`${pageOrigin}${item.href}`}
                    className={classNames(
                      ` ${
                        item.name === active
                          ? 'text-gray-900 bg-yellow-300'
                          : ''
                      }  text-gray-300 hover:bg-yellow-300 hover:text-gray-900 rounded-md px-3 py-2  font-medium`,
                    )}
                    onMouseEnter={() => setActive(item.name)}
                    onMouseLeave={() => setActive(getCurrentPage())}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className='sm:hidden'>
        <div className='space-y-1 px-2 pb-3 pt-2'>
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as='a'
              href={item.href}
              className={classNames(
                'text-gray-300 hover:bg-yellow-300 hover:text-gray-900 block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
