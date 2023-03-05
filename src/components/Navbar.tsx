import { Disclosure, Menu, Transition } from '@headlessui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { Bars3CenterLeftIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
// import { useRouter } from 'next/router';
import type { FC } from 'react';
import { Fragment, useEffect, useState } from 'react';

import Identicon from '@/components/Identicon';
import { classNames } from '@/utils/utils';

const Navbar: FC = () => {
  // const dispatch = useDispatch();
  // const router = useRouter();
  const [isMetamask, setIsMetamask] = useState(false);

  /* const getNavigation = (href: string) => {
    // let className = children.props.className || ''
    if (router.pathname === href) {
      // className = `${className} text-blue-500`
      return true;
    }
    return false;
  }; */

  const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Marketplace', href: '#', current: false },
  ];

  // const navigation = isMetamask ? navigationUser : navigationGuest;

  // const chainId = '84531';
  // const account = '0x6545646464656545';

  /* const user = {
    name: ellipsisAddress(String(account)),
    email: 'ipfs@blockchain.eth',
    imageUrl: '/favicon-32x32.png',
  }; */

  /* const handleSignOut = () => {
    console.log('Sign Out');
    // router.push('/login')
  }; */

  const userNavigation = [
    {
      name: 'Your Profile',
      href: '/profile',
      onClick: () => console.log('Profile'),
    },
    { name: 'Settings', href: '#', onClick: () => console.log('Settings') },
  ];

  useEffect(() => {
    const metamask = (window as any).ethereum;
    if (metamask) setIsMetamask(true);
  }, [isMetamask]);

  // const onOpen = () => console.log('onOpen disclosure');
  return (
    <>
      {/* Navbar */}
      <Disclosure as="nav" className="shrink-0 bg-indigo-600">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                {/* Logo section */}
                <div className="flex items-center px-2 lg:px-0 xl:w-64">
                  <div className="shrink-0">
                    <Link href="/">
                      <img
                        className="h-8 w-auto"
                        src="/assets/images/logo.png"
                        alt="Pistache Marketplace"
                      />
                    </Link>
                  </div>
                </div>

                {/* Search section */}
                <div className="flex flex-1 justify-center lg:justify-end">
                  <div className="w-full px-2 lg:px-6">
                    <label htmlFor="search" className="sr-only">
                      Search functions
                    </label>
                    <div className="relative text-indigo-200 focus-within:text-gray-400">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <MagnifyingGlassIcon
                          className="h-5 w-5"
                          aria-hidden="true"
                        />
                      </div>
                      <input
                        id="search"
                        name="search"
                        className="bg-opacity-25 block w-full rounded-md border border-transparent bg-indigo-400 py-2 pl-10 pr-3 leading-5 text-indigo-100 placeholder:text-indigo-200 focus:bg-white focus:text-gray-900 focus:outline-none focus:ring-0 focus:placeholder:text-gray-400 sm:text-sm"
                        placeholder="Search functions"
                        type="search"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex lg:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-indigo-600 p-2 text-indigo-400 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3CenterLeftIcon
                        className="block h-6 w-6"
                        aria-hidden="true"
                      />
                    )}
                  </Disclosure.Button>
                </div>
                {/* Links section */}
                <div className="hidden lg:block lg:w-80">
                  <div className="flex items-center justify-end">
                    <div className="flex">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="rounded-md px-3 py-2 text-sm font-medium text-indigo-200 hover:text-white"
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-4 shrink-0">
                      <div>
                        <Menu.Button className="flex rounded-full bg-indigo-700 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700">
                          <span className="sr-only">Open user menu</span>
                          <span className="h-8 w-8 rounded-full">
                            <Identicon
                              accountId={
                                '0xFf0573b826A3120df03Cb6F1eC0B5992a9948472'
                              }
                              iconSize={32}
                            />
                          </span>
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="ring-opacity-5 absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black focus:outline-none">
                          {userNavigation.map((item) => (
                            <Menu.Item key={item.name}>
                              {({ active }) => (
                                <a
                                  href={item.href}
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700'
                                  )}
                                >
                                  {item.name}
                                </a>
                              )}
                            </Menu.Item>
                          ))}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="lg:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'text-white bg-indigo-800'
                        : 'text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600',
                      'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
              <div className="border-t border-indigo-800 pt-4 pb-3">
                <div className="space-y-1 px-2">
                  {userNavigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className="block rounded-md px-3 py-2 text-base font-medium text-indigo-200 hover:bg-indigo-600 hover:text-indigo-100"
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
};

export default Navbar;
