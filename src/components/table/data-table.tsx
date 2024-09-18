"use client";

import {
	Table,
	TableBody,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow
} from "@/components/ui/table";
import {
	ColumnDef,
	flexRender,
	getCoreRowModel,
	useReactTable,
	getPaginationRowModel
} from "@tanstack/react-table";
import { Button } from "../form/button";

interface DataTableProps<TData, TValue> {
	columns: ColumnDef<TData, TValue>[];
	data: TData[];
}
export function DataTable<TData, TValue>({
	columns,
	data
}: DataTableProps<TData, TValue>) {
	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel()
	});
	return (
		<section>
			<Table className="rounded-3xl">
				<TableHeader className="bg-primary-100 h-[80px] text-lg font-bold">
					{table.getHeaderGroups().map((headerGroup) => (
						<TableRow
							key={headerGroup.id}
							className="hover:bg-primary-100"
						>
							{headerGroup.headers.map((header) => {
								return (
									<TableHead
										key={header.id}
										className={`w-[${header.getSize()}px]`}
									>
										{header.isPlaceholder
											? null
											: flexRender(
													header.column.columnDef
														.header,
													header.getContext()
												)}
									</TableHead>
								);
							})}
						</TableRow>
					))}
				</TableHeader>
				<TableBody>
					{table.getRowModel().rows?.length ? (
						table.getRowModel().rows.map((row) => (
							<TableRow
								key={row.id}
								data-state={row.getIsSelected() && "selected"}
							>
								{row.getVisibleCells().map((cell) => (
									<TableCell key={cell.id}>
										{flexRender(
											cell.column.columnDef.cell,
											cell.getContext()
										)}
									</TableCell>
								))}
							</TableRow>
						))
					) : (
						<TableRow>
							<TableCell
								colSpan={columns.length}
								className="h-24 text-center"
							>
								No results.
							</TableCell>
						</TableRow>
					)}
				</TableBody>
				<TableFooter>
					<TableRow className="hover:bg-primary-50">
						<TableCell colSpan={columns.length - 1} />
						<TableCell className="text-right">
							<div>
								<Button
									text="Previous"
									onClick={() => table.previousPage()}
									disabled={!table.getCanPreviousPage()}
								/>
								<Button
									text="Next"
									onClick={() => table.nextPage()}
									disabled={!table.getCanNextPage()}
								/>
							</div>
						</TableCell>
					</TableRow>
				</TableFooter>
			</Table>
		</section>
	);
}
