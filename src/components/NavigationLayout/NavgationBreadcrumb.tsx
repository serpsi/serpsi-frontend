import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator
} from "@/components/ui/breadcrumb";

export default function NavigationBreadcumb() {
	return (
		<>
			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink href="/home">Home</BreadcrumbLink>
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
		</>
	);
}
