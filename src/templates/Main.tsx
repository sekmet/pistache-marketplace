import type { ReactNode } from 'react';

import Navbar from '@/components/Navbar';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="relative flex min-h-screen flex-col">
    {props.meta}
    <Navbar />

    <div className="mx-auto w-full max-w-7xl grow lg:flex xl:px-8">
      {props.children}
    </div>
  </div>
);

export { Main };
