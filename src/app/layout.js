import { Inter } from "next/font/google";
import "./globals.css";
import SideNavbar from "./components/SideNavbar";
import SearchBar from "./components/SearchBar";
import CategoryList from "./components/CategoryList";
import BusinessList from "./components/BusinessList";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex">
      <SideNavbar />
          <div className="grid grid-cols-1 md:grid-cols-2 px-6 md:px-10 w-full mt-10 gap-8">
            <div>
              <SearchBar />
              <CategoryList />
              <BusinessList />
            </div>

            <div>
              {/* Google Map */}
              Google Map
            </div>
          </div>
          {children}
      </body>
    </html>
  );
}
