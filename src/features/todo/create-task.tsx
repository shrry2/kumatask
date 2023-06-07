import { FC } from 'react';
import { redirect } from 'next/navigation';

import prisma from '@/src/lib/prisma';
import { routes } from '@/src/config';

export const CreateTask: FC = () => {
  const createTask = async (formData: FormData) => {
    'use server';

    const title = formData.get('title');

    if (typeof title !== 'string') {
      throw new Error('Title is required');
    }

    await prisma.task.create({
      data: {
        title,
      },
    });

    redirect(routes.home);
  };

  return (
    <form action={createTask} className="flex flex-col gap-6 w-full">
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Title
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="title"
            id="title"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Buy a milk"
          />
        </div>
      </div>

      <button
        type="submit"
        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Create
      </button>
    </form>
  );
};
