import { Suspense } from 'react';

import { TaskListPlaceholder } from './placeholder';
import { TaskListContent } from './content';

export const TaskList = () => {
  return (
    <Suspense fallback={<TaskListPlaceholder />}>
      <TaskListContent />
    </Suspense>
  );
};
