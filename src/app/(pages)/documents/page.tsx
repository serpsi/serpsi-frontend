import { DataTable } from "@/components/table/data-table";
import { columns, data } from "./columns";

export default function Teste() {
	return (
		<main className="flex h-full w-full justify-center bg-white p-3">
			<DataTable
				columns={columns}
				data={data}
				filteringColumn="name"
			/>
		</main>
	);
}
