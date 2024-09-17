'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaBug } from "react-icons/fa";
import classnames from "classnames";

const NavBar = () => {
	const currentPath = usePathname();

	const links = [
		{ label: "Dashboard", href: "/" },
		{ label: "Issues", href: "/issues" },
	];
	return (
		<nav className="flex border-b space-x-6 p-5 mb-5 h-14 items-center">
			<Link href="/">
				<FaBug />
			</Link>
			<ul className="flex space-x-6">
				{links.map((link) => (
					<Link
						key={link.href}
						className={classnames({
							"text-zinc-500 dark:text-zinc-400": link.href !== currentPath,
							"text-zinc-900 dark:text-zinc-50": link.href === currentPath,
							"hover:text-zinc-800 transition-colors": true,
							"font-semibold": link.href === currentPath
						})}
						href={link.href}
					>
						{link.label}
					</Link>
				))}

			</ul>
		</nav>
	);
};

export default NavBar;