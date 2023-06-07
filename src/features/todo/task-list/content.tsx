import prisma from '@/src/lib/prisma';
import { revalidatePath } from 'next/cache';
import { routes } from '@/src/config';

export const TaskListContent = async () => {
  // data fetch
  const startTime = Date.now();
  const tasks = await prisma.task.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
  const duration = Date.now() - startTime;

  // react actions
  const completeTask = async (formData: FormData) => {
    'use server';

    const taskId = formData.get('task_id');

    await prisma.task.update({
      where: {
        id: taskId as string,
      },
      data: {
        completedAt: new Date(),
      },
    });

    revalidatePath(routes.home);
  };

  return (
    <div className="w-full">
      <p className="text-sm text-gray-500">
        Fetched {tasks.length} tasks in {duration}ms
      </p>
      <div className="divide-y divide-gray-900/5">
        {tasks.map((task) => (
          <div key={task.id} className="flex items-center justify-between py-3">
            <div className="flex items-center space-x-4">
              <div className="space-y-1">
                <p className="font-medium leading-none">{task.title}</p>
                <p className="text-sm text-gray-500">
                  {`${task.createdAt.toLocaleDateString()} ${task.createdAt.toLocaleTimeString()}`}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {task.completedAt ? (
                <div className="text-sm text-gray-500">
                  Completed at{' '}
                  {`${task.completedAt.toLocaleDateString()} ${task.completedAt.toLocaleTimeString()}`}
                </div>
              ) : (
                <form action={completeTask}>
                  <input type="hidden" name="task_id" value={task.id} />
                  <button
                    type="submit"
                    className="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Complete
                  </button>
                </form>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
