export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<header>
			<div>{children}</div>
		</header>
	);
}
