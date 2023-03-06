import { UserCircleIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { Formik } from 'formik';
import ky from 'ky';
import type { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';

import type { PistacheWeb3function } from '@/interfaces';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { classNames } from '@/utils/utils';

type Props = {
  items: PistacheWeb3function[];
};

const navigation = [
  { name: 'New Secret', href: '#', icon: UserCircleIcon, current: true },
  // { name: 'Schema JSON', href: '#', icon: KeyIcon, current: false },
  /* { name: 'Plan & Billing', href: '#', icon: CreditCardIcon, current: false },
  { name: 'Team', href: '#', icon: UserGroupIcon, current: false }, */
  { name: 'Secrets', href: '#', icon: UserGroupIcon, current: false },
  // { name: 'Integrations', href: '#', icon: SquaresPlusIcon, current: false },
];

const url = 'http://localhost:3000/api/new-secret';

export default function New3Secret({ items }: Props) {
  return (
    <Main
      meta={
        <Meta
          title="Pistache Web3 functions hub"
          description="Streamline your decentralized applications with Pistache's web3 functions marketplace."
        />
      }
    >
      <div className="bg-white lg:min-w-0 lg:flex-1">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
          <aside className="py-6 px-2 sm:px-6 lg:col-span-3 lg:mt-6 lg:p-0">
            <nav className="space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-50 text-indigo-700 hover:text-indigo-700 hover:bg-white'
                      : 'text-gray-900 hover:text-gray-900 hover:bg-gray-50',
                    'group rounded-md px-3 py-2 flex items-center text-sm font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  <item.icon
                    className={classNames(
                      item.current
                        ? 'text-indigo-500 group-hover:text-indigo-500'
                        : 'text-gray-400 group-hover:text-gray-500',
                      'flex-shrink-0 -ml-1 mr-3 h-6 w-6'
                    )}
                    aria-hidden="true"
                  />
                  <span className="truncate">{item.name}</span>
                </a>
              ))}
            </nav>
          </aside>

          <div className="space-y-6 sm:px-6 lg:col-span-9 lg:px-0">
            <Formik
              initialValues={{
                name: '',
                description: '',
              }}
              validate={({ name, description }) => {
                const errors = {} as any;
                if (!name) {
                  errors.name = 'Required';
                }
                if (!description) {
                  errors.description = 'Required';
                }
                /* if (!w3fsourcecode) {
                errors.w3fsourcecode = 'Required';
              } */

                /* admins.split(';').forEach((address) => {
                if (!ethers.utils.isAddress(address)) {
                  errors.admins = `Address (${address})ist not valid`;
                }
              }); */

                return errors;
              }}
              onSubmit={async (
                { name, description },
                { setSubmitting, resetForm }
              ) => {
                /* const adminsList = admins.split(';');

              const address = await createNewWallet(adminsList, +required);
              setMessage(
                address
                  ? `Contract deployed to ${address}`
                  : 'Something went wrong'
              ); */
                console.log(name, description);

                const formData = {
                  name,
                  description,
                };

                const response = await ky.post(url, {
                  body: JSON.stringify(formData),
                });
                console.log(response);

                setSubmitting(false);
                resetForm();
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isValid,
              }) => (
                <form onSubmit={handleSubmit} method="POST">
                  <div className="shadow sm:overflow-hidden sm:rounded-md">
                    <div className="space-y-6 bg-white py-6 px-4 sm:p-6">
                      <div>
                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                          New Secret
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          This information will be displayed publicly so be
                          careful what you share.
                        </p>
                      </div>

                      <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-6">
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="web3FunctionName"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                            placeholder="<Your web3 function name>"
                            className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          />
                          {errors.name && touched.name && errors.name}
                        </div>

                        <div className="col-span-6">
                          <label
                            htmlFor="description"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Description
                          </label>
                          <textarea
                            id="web3FunctionDescription"
                            name="description"
                            rows={3}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.description}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="<Your web3 function description>"
                          />
                          {errors.description &&
                            touched.description &&
                            errors.description}
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                      <button
                        type="submit"
                        disabled={!isValid}
                        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Save Secret
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </Formik>

            <div className="shadow sm:overflow-hidden sm:rounded-md">
              <div className="space-y-6 bg-white py-6 px-4 sm:p-6">
                <div>
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Secrets
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    This information will be displayed publicly so be careful
                    what you share.
                  </p>
                </div>

                <ul
                  role="list"
                  className="divide-y divide-gray-200 rounded-md border border-gray-200 shadow"
                >
                  {items.map((project) => (
                    <li
                      key={project.repo}
                      className="relative py-5 pl-4 pr-6 hover:bg-gray-50 sm:py-6 sm:pl-6 lg:pl-8 xl:pl-6"
                    >
                      <div className="flex items-center justify-between space-x-4">
                        {/* Repo name and link */}
                        <div className="min-w-0 space-y-3">
                          <div className="flex items-center space-x-3">
                            <span
                              className={classNames(
                                project.active ? 'bg-green-100' : 'bg-gray-100',
                                'h-4 w-4 rounded-full flex items-center justify-center'
                              )}
                              aria-hidden="true"
                            >
                              <span
                                className={classNames(
                                  project.active
                                    ? 'bg-green-400'
                                    : 'bg-gray-400',
                                  'h-2 w-2 rounded-full'
                                )}
                              />
                            </span>

                            <h2 className="text-sm font-medium">
                              <Link href={`/function/${project.id}`}>
                                <span
                                  className="absolute inset-0"
                                  aria-hidden="true"
                                />
                                {project.name}{' '}
                                <span className="sr-only">
                                  {project.active ? 'Running' : 'Not running'}
                                </span>
                              </Link>
                            </h2>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.

  // You can use any data fetching library
  const res = await fetch('http://localhost:3000/api/functions');
  const cFunctions = await res.json();
  const functions = cFunctions.map((func) => {
    return {
      id: func.id,
      name: func.name,
      href: '#',
      siteHref: '#',
      repoHref: '#',
      repo: `gelato/${func.id}`,
      tech: 'Web3 function',
      location: 'United states',
      starred: false,
      active: true,
    };
  });

  // console.log(functions);
  const items = functions;
  return { props: { items } };
};
