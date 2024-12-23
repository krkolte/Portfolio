import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import FadeTransition from "@/components/FadeTransition";

export const metadata = {
    title: "My Portfolio",
    author: "Kapil",
    description: "Generated by create next app",
};

const redHat = localFont({
    src: [
        {
            path: "../../public/fonts/RedHatDisplay-Variable.woff2",
            weight: "100 900",
            style: "normal",
        },
    ],
    display: "swap",
    variable: "--font-red-hat",
});

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${redHat.variable} bg-slate-950 text-slate-50 relative`}
            >
                <FadeTransition />
                <Header />
                <PageTransition>{children}</PageTransition>
            </body>
        </html>
    );
}

