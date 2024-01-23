import Image from 'next/image';
import { Test } from '../components/Test';

export default function Home() {
  return (
    <main>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Test />
        <div>test</div>
      </div>
    </main>
  );
}
