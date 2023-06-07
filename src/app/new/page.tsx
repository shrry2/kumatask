import { CreateTask } from '@/src/features/todo/create-task';
import { Hero } from '@/src/components/layout/hero';
import { Container } from '@/src/components/layout/container';

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero title="Create new task" />
      <Container>
        <CreateTask />
      </Container>
    </main>
  );
}
