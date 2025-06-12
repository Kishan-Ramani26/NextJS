import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="h-screen w-full flex items-center justify-center flex-col bg-blue-100 text-black">
        <div className="bg-white py-8 px-6 rounded-xl shadow-md w-full max-w-sm flex flex-col gap-4">
          <h1 className="text-xl font-bold mb-6">
            Welcome to the Admin Dashboard
          </h1>
        </div>

        <Link href="/login">
          <div className="absolute top-5 right-10  border-1 border-black p-4 h-8 text-black flex items-center justify-center cursor-pointer focus:bg-gray-200 hover:bg-gray-200 rounded-lg">
            Login
          </div>
        </Link>
      </div>
    </>
  );
}
