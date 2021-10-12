import Menu from '../components/Menu';
import PackingList from '../components/PackingList';
import Program from '../components/Program';
import Rules from '../components/Rules';

export default function Home() {
  return (
    <>
      <div className="flex justify-between min-h-screen w-full px-20 bg-hero bg-cover">
        <div className="self-center pt-24 tracking-wider text-gray-300">
          <h1 className="mb-2 text-6xl">Slow Retreats</h1>
          <p className="text-xl">Find strength in stillness and connection.</p>
        </div>

        <div className="flex flex-col self-start pt-24 pr-24 text-right">
          <h2 className="mb-5 text-xl font-medium tracking-widest text-gray-900 uppercase whitespace-nowrap">
            Reset Edition
          </h2>
          <Menu />
        </div>
      </div>

      <main className="text-lg text-gray-300 leading-relaxed tracking-wide">
        <div className="min-h-screen px-20 py-12">
          <Program />
        </div>
        <div className="min-h-screen py-12 bg-gray-800">
          <div className="px-20">
            <PackingList />
          </div>
        </div>
        <div className="min-h-screen px-20 py-12">
          <Rules />
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-12 mt-6 text-gray-100">
        <span>&copy; {new Date().getFullYear()}</span>
      </footer>
    </>
  );
}
