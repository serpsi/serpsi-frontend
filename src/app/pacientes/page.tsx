import { DataTable } from "@/components/table/data-table";
import Link from "next/link";
import { Payment, columns, invoices } from "./columns";
import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"

async function getData(): Promise<Payment[]> {
	const response = invoices;
	return response;
}

export default async function PatientsPage() {
	const data = await getData();
	return (
		<main className="flex h-screen w-screen items-center justify-center bg-primary-50 p-5 md:p-10">
				<DataTable columns={columns} data={data} linkTop={true} filteringColumn="status" />
		</main>
	);
}
