import { DataTable } from "@/components/table/data-table";
import { Patient, columns, data } from "./columns";

async function getData(): Promise<Patient[]> {
	const response = data;
	return response;
}

export default async function PatientsPage() {
	const data = await getData();
	return (
		<main className="flex h-screen w-screen items-center justify-center bg-primary-50 p-5 md:p-10">
				<DataTable columns={columns} data={data} linkTop={true} filteringColumn="name" />
		</main>
	);
}
