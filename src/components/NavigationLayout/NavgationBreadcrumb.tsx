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
import React from "react";

type TRoute = {
	title: string;
	link: string;
};

// Title of the route that will appear in the BreadCrumb
const routeTitles: { [key: string]: string } = {
	home: "Início",
	patients: "Meus Pacientes",
	schedule: "Agenda",
	register: "Cadastro",
	documents: "Documentos",
	bills: "Financeiro",
	schedule_definer: "Minha agenda",
	past_sessions: "Histórico de Sessões"
};

export default function NavigationBreadcrumb() {
	const urlpath: string = usePathname();

	const getCrumbs = (): TRoute[] => {
		const parts = urlpath.split("/").filter(Boolean);

		var crumbs: TRoute[] = parts.map((part, index) => {
			const link = "/" + parts.slice(0, index + 1).join("/");
			const title = routeTitles[part] || part;
			return { title, link };
		});

		if (
			!crumbs.some(
				(crumb) => crumb.title === "Início" && crumb.link === "/home"
			)
		) {
			crumbs = [{ title: "Início", link: "/home" }, ...crumbs];
		}

		return crumbs;
	};

	const crumbs = getCrumbs();

	return (
		<>
			<Breadcrumb>
				<BreadcrumbList className="font-medium text-gray-600">
					{crumbs.map((value, key) => (
						<React.Fragment key={key}>
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
						</React.Fragment>
					))}
				</BreadcrumbList>
			</Breadcrumb>
		</>
	);
}
