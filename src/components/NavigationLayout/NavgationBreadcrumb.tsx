import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { ChevronRightIcon } from "@heroicons/react/outline";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type TRoute = {
	title: string;
	link: string;
};

type TDictonaryRoutes = {
	[dict_key: string]: TRoute[];
};

const dictonaryRoutes: TDictonaryRoutes = {
	"/home": [
		{ title: "Início", link: "/home" },
		{ title: "Nome 2", link: "/home" },
		{ title: "Nome 3", link: "/home" }
	],
	"/patients": [
		{ title: "Início", link: "/home" },
		{ title: "Meus Pacientes", link: "/patients" }
	],
	"/documents": [
		{ title: "Início", link: "/home" },
		{ title: "Documentos", link: "/documents" }
	],
	"/bills": [
		{ title: "Início", link: "/home" },
		{ title: "Financeiro", link: "/bills" }
	],
	"/home/schedule": [
		{ title: "Início", link: "/home" },
		{ title: "Nome 2", link: "/home" }
	]
};

export default function NavigationBreadcumb() {
	const urlpath: string = usePathname();

	const getCrumbs = (): TRoute[] => {
		return dictonaryRoutes[urlpath];
	};

	return (
		<>
			<Breadcrumb>
				<BreadcrumbList className="font-medium text-gray-600">
					{getCrumbs().map((value, key) => (
						<>
							<BreadcrumbItem>
								{key < getCrumbs().length - 1 ? (
									<BreadcrumbLink href={value.link}>
										{value.title}
									</BreadcrumbLink>
								) : (
									<BreadcrumbPage className="font-medium text-primary-700">
										{value.title}
									</BreadcrumbPage>
								)}
							</BreadcrumbItem>
							{key < getCrumbs().length - 1 ? (
								<BreadcrumbSeparator>
									<ChevronRightIcon />
								</BreadcrumbSeparator>
							) : null}
						</>
					))}
				</BreadcrumbList>
			</Breadcrumb>
		</>
	);
}
