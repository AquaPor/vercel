import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-red-400">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-white">Welcome to the Home Page</h1>
        <p className="text-lg text-white">
          This is your beautifully styled starting page. Customize it as you like!
        </p>
        <button className="px-4 py-2 bg-white text-red-500 rounded-lg hover:bg-gray-200 transition">
          Get Started
        </button>
      </div>
    </div>
  );
}
