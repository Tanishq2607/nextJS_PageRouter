import { Geist, Geist_Mono } from "next/font/google";
import { useRouter } from "next/router";
import { Navbar } from "@/components";
import { HOME_PAGE } from "@/constants/message";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const router = useRouter();

  return (
    <>
      <div className={`min-h-screen flex flex-col items-center p-8 ${geistSans.variable} ${geistMono.variable} font-sans`}>
        <div className="w-full max-w-4xl">
          <Navbar />
          <div className="bg-white rounded-lg shadow-xl p-8 mb-8 border border-gray-100">
            <h2 className="text-2xl font-bold mb-4">{HOME_PAGE.title}</h2>
            <p className="text-gray-700 mb-6">
            {HOME_PAGE.description}
            </p>
            <button
              onClick={() => router.push("/userPost")}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              {HOME_PAGE.buttonText}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}