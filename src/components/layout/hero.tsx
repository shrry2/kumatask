import { FC } from 'react';

type Props = {
  title: string;
  description?: string;
};

export const Hero: FC<Props> = ({ title, description }) => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto px-6 lg:px-8">
        <div className="mx-auto lg:mx-0">
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {description}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
};
