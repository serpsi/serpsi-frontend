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
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext
} from "@/components/ui/pagination";

import {
	ColumnDef,
	flexRender,
	getCoreRowModel,
	useReactTable,
	getPaginationRowModel,
	getFilteredRowModel
} from "@tanstack/react-table";
import { Button } from "../ui/button";
import {
	ChevronLeftIcon,
	ChevronRightIcon,
	MagnifyingGlassIcon
} from "@heroicons/react/24/outline";
import { Input } from "../ui/input";
import Link from "next/link";

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
		<section className="flex w-[80%] flex-col justify-center gap-2 rounded-[20px] p-4">
			<section className="flex w-full items-center gap-4">
				<section className="flex max-w-[300px] items-center rounded-lg border border-input px-2">
					<MagnifyingGlassIcon className="h-6 w-6" />
					<Input
						id="busca"
						className="border-0 text-start focus-visible:ring-0"
						placeholder="Pesquisar"
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
			{linkTop ? (
				<section>
					<Link
						href=""
						className="text-sm font-medium text-primary-500 underline"
					>
						{" "}
						Cadastrar novo paciente
					</Link>
				</section>
			) : null}
			<Table className="rounded-3xl">
				<TableHeader className="h-[80px] bg-primary-100 text-lg font-bold">
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
						<TableCell
							colSpan={columns.length}
							className="h-10 px-8"
						>
							<Pagination>
								<PaginationContent>
									<PaginationItem>
										<Button
											variant="link"
											onClick={() => table.previousPage()}
											disabled={
												!table.getCanPreviousPage()
											}
											className="text-primary-600 disabled:text-gray-500"
										>
											<ChevronLeftIcon className="h-4 w-4" />
										</Button>
									</PaginationItem>
									<PaginationItem className="text-primary-600">
										<span>Página</span>
										<Input
											id="pagination"
											className="mx-2 inline w-8 rounded-xl text-gray-500"
											onKeyDown={(e) => {
												e.key === "Enter"
													? table.setPageIndex(
															Number(
																e.currentTarget
																	.value
															) - 1
														)
													: null;
											}}
										/>
										<span>de </span>
										{table.getPageCount()}
									</PaginationItem>
									<PaginationItem>
										<Button
											variant="link"
											onClick={() => table.nextPage()}
											disabled={!table.getCanNextPage()}
											className="text-primary-600 disabled:text-gray-500"
										>
											<ChevronRightIcon className="h-4 w-4" />
										</Button>
									</PaginationItem>
								</PaginationContent>
							</Pagination>
						</TableCell>
					</TableRow>
				</TableFooter>
			</Table>
		</section>
	);
}
