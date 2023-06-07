import { Hero } from '@/src/components/layout/hero';
import { Container } from '@/src/components/layout/container';
import { TaskList } from '@/src/features/todo/task-list';

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero
        title="KumaTask"
        description="KumaTask is the only TODO app you'll ever need."
      />
      <Container>
        <TaskList />
      </Container>
    </main>
  );
}
