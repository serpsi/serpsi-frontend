"use client";
import { Navigation } from "@/components/NavigationLayout";
import { Button } from "@/components/ui/button";
import {
	CurrencyDollarIcon,
	InboxIcon,
	MenuIcon,
	UserGroupIcon
} from "@heroicons/react/outline";
import { ClipboardListIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useState } from "react";

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	const [collapsedLink, setCollapsedLink] = useState(true);

	return (
		<>
			<Navigation.Root>
				<Navigation.Header>
					{/* SideBar Button */}
					<div className="w-16 flex-none">
						<Button
							variant={"ghost"}
							onClick={() => setCollapsedLink((prev) => !prev)}
						>
							<MenuIcon width={24} />
						</Button>
					</div>
					{/* BreadCrumbs */}
					<div className="hidden flex-1 items-center justify-start pl-5 md:flex">
						<Image
							alt="logo-empresa"
							src={"/logo-teste.jpg"}
							width={33}
							height={33}
							className="mr-3 rounded-full"
						/>
						<Navigation.Breadcrumb />
					</div>
					{/* User Profile */}
					<div className="flex flex-row flex-nowrap">
						<Navigation.User></Navigation.User>
					</div>
				</Navigation.Header>

				<div className="flex flex-row">
					<Navigation.SideBar>
						<Navigation.Link
							link="/home"
							title="Minhas Consultas"
							Icon={ClipboardListIcon}
							collapsed={collapsedLink}
						/>
						<Navigation.Link
							link="/teste"
							title="Meus Pacientes"
							Icon={UserGroupIcon}
							collapsed={collapsedLink}
						/>
						<Navigation.Link
							link="/home"
							title="Documentos"
							Icon={InboxIcon}
							collapsed={collapsedLink}
						/>
						<Navigation.Link
							link="/home"
							title="Financeiro"
							Icon={CurrencyDollarIcon}
							collapsed={collapsedLink}
						/>
					</Navigation.SideBar>
					<div className="flex-1">{children}</div>
				</div>
			</Navigation.Root>
		</>
	);
}
