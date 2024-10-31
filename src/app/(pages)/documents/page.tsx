import { DataTable } from "@/components/table/data-table";
import { columns, data } from "./columns";
import { Document } from "@/models";

async function getData(): Promise<Document[]> {
	const response = data;
	return response;
}

export default async function Documents() {
	const data = await getData();
	return (
		<main className="flex h-full w-full items-center justify-center bg-white p-3">
			<DataTable columns={columns} data={data} filteringColumn="name" filteringPlaceHolder="nome" />
		</main>
	);
}
