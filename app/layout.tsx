import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Theme } from '@radix-ui/themes'
import NavBar from "./NavBar";

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

export const metadata: Metadata = {
	title: "Issues Tracker",
	description: "This is a platform for reporting issues",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<Theme accentColor="blue">
					<NavBar />
					<main className="p-5">{children}</main>
				</Theme>
			</body>
		</html>
	);
}
