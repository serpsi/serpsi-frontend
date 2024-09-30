"use client";

import {
	Table,
	TableBody,
	TableCell,
	TableFooter,
	TableHeader,
	TableRow
} from "@/components/ui/table";
import {
	ColumnDef,
	flexRender,
	getCoreRowModel,
	useReactTable,
	getPaginationRowModel,
	getFilteredRowModel
} from "@tanstack/react-table";
import { Input } from "../ui/input";
import Link from "next/link";
import { PaginationTable } from "./pagination-table";
import { HeaderTable } from "./header-table";
import { BodyTable } from "./body-table";
import { SearchIcon } from "@heroicons/react/outline";

interface DataTableProps<TData, TValue> {
	columns: ColumnDef<TData, TValue>[];
	data: TData[];
	linkTop: boolean;
	filteringColumn: string;
}
export function DataTable<TData, TValue>({
	columns,
	data,
	linkTop,
	filteringColumn
}: DataTableProps<TData, TValue>) {
	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getPaginationRowModel: getPaginationRowModel()
	});

	return (
		<section className="flex w-4/5 flex-col items-start gap-2 rounded-[20px] p-4">
			{/* seção de filtros para a tabela */}
			<section className="flex w-full items-center gap-4">
				<section className="border-1 flex max-w-[300px] items-center rounded-lg border px-2">
					<SearchIcon className="h-6 w-6" />
					<Input
						id="busca"
						className="border-0 focus-visible:ring-0"
						placeholder="Procurar por nome..."
						value={
							(table
								.getColumn(filteringColumn)
								?.getFilterValue() as string) ?? ""
						}
						onChange={(event) =>
							table
								.getColumn(filteringColumn)
								?.setFilterValue(event.target.value)
						}
					/>
				</section>
			</section>
			{/* se verdadeiro aparece o Link para cadastrar novo paciente */}
			{linkTop ? (
				<section>
					<Link
						href="/patients/register"
						className="text-sm font-medium text-primary-600 underline"
					>
						Cadastrar novo paciente
					</Link>
				</section>
			) : null}
			<Table className="rounded-3xl">
				<HeaderTable table={table} />
				<BodyTable table={table} columns={columns} />
				<TableFooter>
					<TableRow className="hover:bg-primary-50">
						<TableCell
							colSpan={columns.length}
							className="h-10 px-8"
						>
							<PaginationTable table={table} />
						</TableCell>
					</TableRow>
				</TableFooter>
			</Table>
		</section>
	);
}
