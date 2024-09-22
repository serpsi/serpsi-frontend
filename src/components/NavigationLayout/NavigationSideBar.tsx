import classNames from "classnames";

export default function NavigationSideBar({
	children,
	isHidden
}: Readonly<{
	children: React.ReactNode;
	isHidden: boolean;
}>) {
	const asideClassName = classNames(
		"fixed top-14 z-50 min-w-full bg-white sm:flex sm:h-full sm:min-w-16",
		{ "hidden ": isHidden }
	);

	return (
		<aside className={asideClassName}>
			<nav className="flex w-full flex-col">{children}</nav>
		</aside>
	);
}
