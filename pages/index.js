import Menu from '../components/Menu';
import PackingList from '../components/PackingList';
import Program from '../components/Program';
import Rules from '../components/Rules';

export default function Home() {
  return (
    <>
      <div className="flex justify-between w-full min-h-screen px-20 bg-hero bg-cover">
        <h1 className="self-center pt-24 text-6xl tracking-wider">
          Slow Retreats
        </h1>
        <Menu />
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
