import React from "react";
import { Link } from "gatsby";
import { container } from "./layout.module.css";
import {
	heading,
	navLinks,
	navLinkItem,
	navLinkText,
} from "./layout.module.css";
//console.log("Container  :  ", container);

const Layout = ({ pageTitle, pageHeading, children }) => {
	return (
		<main className={container}>
			<title> {pageTitle}</title>
			<nav>
				<ul className={navLinks}>
					<li className={navLinkItem}>
						<Link className={navLinkText} to="/">
							Home Page
						</Link>
					</li>
					<li className={navLinkItem}>
						<Link className={navLinkText} to="/About">
							{" "}
							About Us
						</Link>
					</li>
					<li className={navLinkItem}>
						<Link className={navLinkText} to="/ContactPage">
							{" "}
							Contact Us
						</Link>
					</li>
				</ul>
			</nav>
			<h1 className={heading}>{pageHeading}</h1>
			{children}
		</main>
	);
};

export default Layout;
