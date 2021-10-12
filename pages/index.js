import Menu from '../components/Menu';
import PackingList from '../components/PackingList';
import Program from '../components/Program';
import Rules from '../components/Rules';

export default function Home() {
  return (
    <>
      <div className="grid min-h-screen width-screen-80 py-12 px-screen-10 bg-hero bg-cover">
        <div className="content-start	sm:content-center grid gap-y-3 sm:gap-y-5 text-right">
          <h2 className="text-lg sm:text-xl font-medium tracking-widest text-gray-900 uppercase whitespace-nowrap">
            Reset Edition
          </h2>
          <Menu />
        </div>
        <div className="tracking-wider text-gray-300">
          <h1 className="mb-2 text-4xl sm:text-6xl">Slow Retreats</h1>
          <p className="text-lg sm:text-xl">
            Find strength in stillness and connection.
          </p>
        </div>
      </div>

      <main className="text-normal sm:text-lg text-gray-300 leading-relaxed tracking-wide">
        <div className="min-h-screen px-screen-10 py-12">
          <Program />
        </div>
        <div className="min-h-screen px-screen-10 py-12 bg-gray-800">
          <div>
            <PackingList />
          </div>
        </div>
        <div className="min-h-screen px-screen-10 py-12">
          <Rules />
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-12 mt-6 text-gray-100">
        <span>&copy; {new Date().getFullYear()}</span>
      </footer>
    </>
  );
}
