import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator
} from "@/components/ui/breadcrumb";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<header className="sticky top-0 z-50 flex w-full items-center justify-between bg-white p-2">
				<div className="">
					<Button variant={"ghost"}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="size-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							/>
						</svg>
					</Button>
				</div>
				<div className="hidden flex-1 items-center justify-start pl-5 md:flex">
					<Image
						alt="logo-empresa"
						src={"/logo-teste.jpg"}
						width={33}
						height={33}
						className="mr-3 rounded-full"
					/>
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem>
								<BreadcrumbLink href="/home">
									Home
								</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator>
								<span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="size-6"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="m8.25 4.5 7.5 7.5-7.5 7.5"
										/>
									</svg>
								</span>
							</BreadcrumbSeparator>
							<BreadcrumbItem>
								<BreadcrumbPage>Breadcrumb</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>
				<div className="flex flex-row flex-nowrap">
					<DropdownMenu>
						<DropdownMenuTrigger>
							<div className="flex w-full flex-row items-center justify-center">
								<span className="underline">Fulano de Tal</span>
								<span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="ml-1 mr-1 size-4"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="m19.5 8.25-7.5 7.5-7.5-7.5"
										/>
									</svg>
								</span>
							</div>
						</DropdownMenuTrigger>
						<DropdownMenuContent>
							<DropdownMenuItem>Conta</DropdownMenuItem>
							<DropdownMenuItem>
								Definir Horários
							</DropdownMenuItem>
							<DropdownMenuItem>Sair</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
					<Image
						alt="logo-empresa"
						src={"/avatar-teste.jpg"}
						width={33}
						height={33}
						className="rounded-full"
					/>
				</div>
			</header>
			<div className="sticky flex flex-row">
				<aside className="fixed z-50 h-full bg-white">
					<nav className="flex flex-col">
						<Button variant={"ghost"} asChild>
							<Link href={"/home"}>home</Link>
						</Button>
						<Button variant={"ghost"} asChild>
							<Link href={"/teste"}>teste</Link>
						</Button>
					</nav>
				</aside>
				<div className="flex-1">{children}</div>
			</div>
		</>
	);
}
