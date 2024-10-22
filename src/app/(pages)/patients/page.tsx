import { DataTable } from "@/components/table/data-table";
import { Patient, columns, data } from "./columns";

async function getData(): Promise<Patient[]> {
	const response = data;
	return response;
}

export default async function PatientsPage() {
	const data = await getData();
	return (
		<main className="flex h-full w-full items-center justify-center bg-white p-4">
			<DataTable
				columns={columns}
				data={data}
				linkTop={true}
				filteringColumn="name"
			/>
		</main>
	);
}
