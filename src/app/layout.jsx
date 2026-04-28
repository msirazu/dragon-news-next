import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})

export const metadata = {
  title: "The Dragon News",
  description: "the dragon news website",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.className} h-full antialiased`}
      data-theme='light'
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}