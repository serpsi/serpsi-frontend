export default function NavigationHeader({
	children
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<header className="sticky top-0 z-50 flex w-full items-center justify-between bg-white p-2">
			{children}
		</header>
	);
}
