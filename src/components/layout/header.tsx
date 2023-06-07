import { FC } from 'react';
import Link from 'next/link';

import { routes } from '@/src/config';

const navigation = [
  { name: 'Home', href: routes.home },
  { name: 'Create', href: routes.createTask },
];

export const Header: FC = () => {
  return (
    <header className="bg-white">
      <nav className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href={routes.home} className="-m-1.5 p-1.5">
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            />
          </Link>
        </div>
        <div className="flex gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};
