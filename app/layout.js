
import "./globals.css";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

export const metadata = {
  title: "Facebook is the world",
  description: "here you connect the world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          <Navbar />
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
