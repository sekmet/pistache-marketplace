import {
  KeyIcon,
  SquaresPlusIcon,
  UserCircleIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

import { CodeEditor } from '@/components/Editor';
import type { PistacheWeb3function } from '@/interfaces';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { classNames } from '@/utils/utils';

const navigation = [
  { name: 'Web3 Function', href: '#', icon: UserCircleIcon, current: true },
  { name: 'Schema JSON', href: '#', icon: KeyIcon, current: false },
  /* { name: 'Plan & Billing', href: '#', icon: CreditCardIcon, current: false },
  { name: 'Team', href: '#', icon: UserGroupIcon, current: false }, */
  { name: 'Secrets', href: '#', icon: UserGroupIcon, current: false },
  { name: 'Integrations', href: '#', icon: SquaresPlusIcon, current: false },
];

const functionMockup: PistacheWeb3function = {
  sourcecode: `import {
    Web3Function,
    Web3FunctionContext,
  } from "@gelatonetwork/web3-functions-sdk";
  import { Contract } from "ethers";
  import ky from "ky"; // we recommend using ky as axios doesn't support fetch by default

  Web3Function.onRun(async (context: Web3FunctionContext) => {
    const { userArgs, gelatoArgs, provider } = context;

    // #### Write or paste you function code here
    //...

    // Return execution call data
    return {
      canExec: true,
      callData: <...>,
    };
  });
`,
};

const fmockup = functionMockup.sourcecode;

export default function Newfunction() {
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
            <form action="#" method="POST">
              <div className="shadow sm:overflow-hidden sm:rounded-md">
                <div className="space-y-6 bg-white py-6 px-4 sm:p-6">
                  <div>
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      Web3 Function
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      This information will be displayed publicly so be careful
                      what you share.
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3">
                      <div>
                        <CodeEditor sourcecode={fmockup} />
                        {/**/}
                      </div>
                      <p className="mt-2 text-sm text-gray-500">
                        Web3 function typescript code
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Save Code
                  </button>
                </div>
              </div>
            </form>

            <form action="#" method="POST">
              <div className="shadow sm:overflow-hidden sm:rounded-md">
                <div className="space-y-6 bg-white py-6 px-4 sm:p-6">
                  <div>
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      Schema JSON Information
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Define you schema json for your web3 function
                    </p>
                  </div>

                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6">
                      <label
                        htmlFor="web3FunctionVersion"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Web3 Function Version
                      </label>
                      <input
                        type="text"
                        name="web3FunctionVersion"
                        id="web3FunctionVersion"
                        placeholder="1.0.0"
                        className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="runtime"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Runtime
                      </label>
                      <input
                        type="text"
                        name="runtime"
                        id="runtime"
                        placeholder="1.0"
                        className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="memory"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Memory
                      </label>
                      <input
                        type="text"
                        name="memory"
                        id="memory"
                        placeholder="128"
                        className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="timeout"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Timeout
                      </label>
                      <input
                        type="text"
                        name="timeout"
                        id="timeout"
                        placeholder="30"
                        className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="userArgs"
                        className="block text-sm font-medium text-gray-700"
                      >
                        User Arguments
                      </label>
                      <textarea
                        id="userArgs"
                        name="userArgs"
                        rows={6}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder={`"currency": "string",
"oracle": "string"
`}
                        defaultValue={''}
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Save Schema
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Main>
  );
}
