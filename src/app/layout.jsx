import Navbar from "@/components/shared/Navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pageContent">
        {children}
        </main>
      </body>
    </html>
  );
}