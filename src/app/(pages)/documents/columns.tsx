"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { ArchiveIcon, DocumentTextIcon, EyeIcon, SearchCircleIcon } from "@heroicons/react/outline";

export type Document = {
	id: string;
	name: string;
	title: string;
	createDate: string;
	link: string;
};

export const columns: ColumnDef<Document>[] = [
	{
		id: "select",
		header: ({ table }) => (
			<div className="flex justify-center">
				<Checkbox
					checked={
						table.getIsAllPageRowsSelected() ||
						(table.getIsSomePageRowsSelected() && "indeterminate")
					}
					onCheckedChange={(value) =>
						table.toggleAllPageRowsSelected(!!value)
					}
					aria-label="Selecione todas as linhas"
				/>
			</div>
		),
		cell: ({ row }) => (
			<div className="flex justify-center">
				<Checkbox
					checked={row.getIsSelected()}
					onCheckedChange={(value) => row.toggleSelected(!!value)}
					aria-label="Selecione a linha"
				/>
			</div>
		),
		enableSorting: false,
		enableHiding: false
	},
	{
		accessorKey: "editar",
		header: "",
		size: 70,
		cell: (cell) => (
			<Link href={cell.row.original.link} target="_blank" className="text-primary-600">
				<DocumentTextIcon width={24} height={24} />
			</Link>
		)
	},
	{
		accessorKey: "name",
		header: "Nome",
		size: 250
	},
	{
		accessorKey: "title",
		header: "Titulo",
		size: 250
	},
	{
		accessorKey: "createDate",
		header: "Data da sessão",
		size: 250
	}
];

export const data = [
	{
		id: "1",
		createDate: "04/11/2024",
		name: "Roberto Santos",
		title: "Acompanhamento da psiquiatra",
		link: "https://res.cloudinary.com/carabolasjoao/image/upload/v1729105086/samples/ecommerce/PDS_-_prova_1_maq3my.pdf"
	},
	{
		id: "2",
		createDate: "04/11/2024",
		name: "Roberto Santos",
		title: "Acompanhamento da psiquiatra 2",
		link: "https://res.cloudinary.com/carabolasjoao/image/upload/v1729105086/samples/ecommerce/PDS_-_prova_1_maq3my.pdf"
	},
	{
		id: "3",
		createDate: "04/11/2024",
		name: "Roberto Santos",
		title: "Acompanhamento da psiquiatra 3",
		link: "https://res.cloudinary.com/carabolasjoao/image/upload/v1729105086/samples/ecommerce/PDS_-_prova_1_maq3my.pdf"
	},
	{
		id: "4",
		createDate: "04/11/2024",
		name: "Roberto Santos",
		title: "Acompanhamento da psiquiatra 4",
		link: "https://res.cloudinary.com/carabolasjoao/image/upload/v1729105086/samples/ecommerce/PDS_-_prova_1_maq3my.pdf"
	},
	{
		id: "5",
		createDate: "04/11/2024",
		name: "camelô da sila",
		title: "Acompanhamento da psiquiatra",
		link: "https://res.cloudinary.com/carabolasjoao/image/upload/v1729105086/samples/ecommerce/PDS_-_prova_1_maq3my.pdf"
	},
	{
		id: "6",
		createDate: "04/11/2024",
		name: "camelô da sila",
		title: "Acompanhamento da psiquiatra 2",
		link: "https://res.cloudinary.com/carabolasjoao/image/upload/v1729105086/samples/ecommerce/PDS_-_prova_1_maq3my.pdf"
	},
	{
		id: "7",
		createDate: "04/11/2024",
		name: "camelô da sila",
		title: "Acompanhamento da psiquiatra 3",
		link: "https://res.cloudinary.com/carabolasjoao/image/upload/v1729105086/samples/ecommerce/PDS_-_prova_1_maq3my.pdf"
	},
	{
		id: "8",
		createDate: "04/11/2024",
		name: "camelô da sila",
		title: "Acompanhamento da psiquiatra 4",
		link: "https://res.cloudinary.com/carabolasjoao/image/upload/v1729105086/samples/ecommerce/PDS_-_prova_1_maq3my.pdf"
	},
	{
		id: "9",
		createDate: "04/11/2024",
		name: "camelô da sila",
		title: "Acompanhamento da psiquiatra 5",
		link: "https://res.cloudinary.com/carabolasjoao/image/upload/v1729105086/samples/ecommerce/PDS_-_prova_1_maq3my.pdf"
	},
	{
		id: "10",
		createDate: "04/11/2024",
		name: "camelô da sila",
		title: "Acompanhamento da psiquiatra 6",
		link: "https://res.cloudinary.com/carabolasjoao/image/upload/v1729105086/samples/ecommerce/PDS_-_prova_1_maq3my.pdf"
	},
	{
		id: "11",
		createDate: "04/11/2024",
		name: "camelô da sila",
		title: "Acompanhamento da psiquiatra 7",
		link: "https://res.cloudinary.com/carabolasjoao/image/upload/v1729105086/samples/ecommerce/PDS_-_prova_1_maq3my.pdf"
	}
];
