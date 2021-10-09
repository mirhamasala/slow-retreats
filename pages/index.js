import sections from '../constants/sections';
import Menu from '../components/Menu';
import Rules from '../components/Rules';

export default function Home() {
  return (
    <>
      <div className="flex justify-between w-full min-h-screen px-20 bg-hero bg-cover">
        <h1 className="self-center pt-24 text-6xl text-gray-200 tracking-wide">
          Slow Retreats
        </h1>
        <Menu />
      </div>

      <main className="py-10 px-20">
        {sections.map((section) => (
          <section key={section.id} id={`${section.id}`} className="h-screen">
            <h2 className="pt-10 text-4xl text-gray-200 capitalize tracking-wide">
              {section.title}
            </h2>
          </section>
        ))}
        <Rules />
      </main>

      <footer className="flex items-center justify-center w-full h-12 text-gray-100">
        <span>&copy; {new Date().getFullYear()}</span>
      </footer>
    </>
  );
}
