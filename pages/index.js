export default function Home() {
  return (
    <>
      <main className="flex flex-col items-start justify-center w-full min-h-screen px-20 bg-hero bg-cover">
        <h1 className="pt-24 text-6xl text-gray-200 tracking-wide">
          Slow Retreats
        </h1>
      </main>

      <footer className="flex items-center justify-center w-full h-12 text-gray-100">
        <span>&copy; {new Date().getFullYear()}</span>
      </footer>
    </>
  );
}
