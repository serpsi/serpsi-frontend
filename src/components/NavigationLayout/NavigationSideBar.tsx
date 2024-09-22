export default function NavigationSideBar({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<aside className="fixed z-50 h-full min-w-16 bg-white">
			<nav className="flex w-full flex-col">{children}</nav>
		</aside>
	);
}
