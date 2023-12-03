import "./globals.css";
import { ReactQueryProviders } from "./react-query-provider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Studio-g Vigo",
  description: "Studio-g - Centro deportivo ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" min-h-screen bg-black flex flex-col px-2 lg:px-0">
        <ReactQueryProviders>
          <Navbar />
          <main className="flex-grow max-w-6xl mx-auto p-2 ">{children}</main>
          <Footer />
        </ReactQueryProviders>
      </body>
    </html>
  );
}
