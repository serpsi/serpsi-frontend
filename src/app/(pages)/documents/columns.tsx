"use client";
import { PencilAltIcon } from "@heroicons/react/outline";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

export type Document = {
	id: string;
	name: string;
	title: string;
  createDate: string;
};

export const columns: ColumnDef<Document>[] = [
	{
		accessorKey: "editar",
		header: () => (
			<div className="flex w-[70px] justify-center"></div>
		),
		size: 70,
		cell: () => (
			<Link href="" className="flex justify-center">
				<PencilAltIcon width={24} height={24} />
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
    link: "https://google.com"
  },
  {
    id: "2",
    createDate: "04/11/2024",
    name: "Roberto Santos",
    title: "Acompanhamento da psiquiatra 2"
  },
  {
    id: "3",
    createDate: "04/11/2024",
    name: "Roberto Santos",
    title: "Acompanhamento da psiquiatra 3"
  },
  {
    id: "4",
    createDate: "04/11/2024",
    name: "Roberto Santos",
    title: "Acompanhamento da psiquiatra 4"
  },
  {
    id: "5",
    createDate: "04/11/2024",
    name: "camelô da sila",
    title: "Acompanhamento da psiquiatra"
  },
  {
    id: "6",
    createDate: "04/11/2024",
    name: "camelô da sila",
    title: "Acompanhamento da psiquiatra 2"
  },
  {
    id: "7",
    createDate: "04/11/2024",
    name: "camelô da sila",
    title: "Acompanhamento da psiquiatra 3"
  },
  {
    id: "8",
    createDate: "04/11/2024",
    name: "camelô da sila",
    title: "Acompanhamento da psiquiatra 4"
  },
  {
    id: "9",
    createDate: "04/11/2024",
    name: "camelô da sila",
    title: "Acompanhamento da psiquiatra 5"
  },
  {
    id: "10",
    createDate: "04/11/2024",
    name: "camelô da sila",
    title: "Acompanhamento da psiquiatra 6"
  }
]