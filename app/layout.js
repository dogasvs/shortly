import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/header/page";
import Subheader from "./components/subheader/page";
import Form from "./components/form/page";
import Statistics from "./components/statistics/page";
import LinkPromotion from "./components/linkPromotion/page";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="container">
        <div className="content">
            <Header />
            <Subheader />
          </div>
            <Form />
            <Statistics />
        </div>
            <LinkPromotion />
        {children}
      </body>
    </html>
  );
}
