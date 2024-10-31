"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { DocumentTextIcon } from "@heroicons/react/outline";
import Viewer from "@/components/viewer/viewer";

export type DocumentColumns = {
	_id: string;
	_title: string;
	_docLink: string;
	_name: string;
	_createDate: string;
}


export const columns: ColumnDef<DocumentColumns>[] = [
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
		cell: ({ row }) => (
				<Viewer
					link={row.original._docLink}
					title={row.original._name + " - " + row.original._title}
					className=""
				>
					<DocumentTextIcon
						width={24}
						height={24}
						className="text-primary-600"
					/>
				</Viewer>
		)
	},
	{
		accessorKey: "_name",
		header: "Nome",
		size: 250
	},
	{
		accessorKey: "_title",
		header: "Titulo",
		size: 250
	},
	{
		accessorKey: "_createDate",
		header: "Data da sessão",
		size: 250
	}
];
