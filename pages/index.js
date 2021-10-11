import Menu from '../components/Menu';
import PackingList from '../components/PackingList';
import Program from '../components/Program';
import Rules from '../components/Rules';

export default function Home() {
  return (
    <>
      <div className="flex justify-between min-h-screen w-full px-20 bg-hero bg-cover">
        <h1 className="self-center pt-24 text-6xl tracking-wider text-gray-300">
          Slow Retreats
        </h1>
        <div className="flex flex-col self-start pt-24 pr-24 text-right">
          <h2 className="mb-5 text-xl font-medium tracking-widest text-gray-900 uppercase whitespace-nowrap">
            Reset Edition
          </h2>
          <Menu />
        </div>
      </div>

      <main className="py-10 px-20 text-lg text-gray-300 leading-relaxed tracking-wide">
        <Program />
        <PackingList />
        <Rules />
      </main>

      <footer className="flex items-center justify-center w-full h-12 text-gray-100">
        <span>&copy; {new Date().getFullYear()}</span>
      </footer>
    </>
  );
}
