import { DataTable } from "@/components/table/data-table";
import { columns, data, Document } from "./columns";

async function getData(): Promise<Document[]> {
	const response = data;
	return response;
}

export default async function Documents() {
	const data = await getData();
	return (
		<main className="flex flex-col items-center justify-center bg-white p-3">
			<DataTable columns={columns} data={data} filteringColumn="name" />
		</main>
	);
}
