import "./globals.css";
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "My App",
  description: "My NextJs App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <div className="root">{children}</div>
    </html>
  );
}
