import { DataTable } from "@/components/table/data-table";
import Link from "next/link";
import { Payment, columns, invoices } from "./columns";

async function getData(): Promise<Payment[]> {
	const response = invoices;
	return response;
}

export default async function PatientsPage() {
	const data = await getData();
	return (
		<main className="flex h-screen w-screen items-center justify-center bg-primary-50 p-5 md:p-10">
			<section className="flex w-[70%] flex-col justify-center gap-2 rounded-[20px] border border-red-700">
				<section className="flex w-full items-center gap-4">
					<div>busca</div>
					<div>filtro</div>
					<div>tipo</div>
				</section>
				<section>
					<Link
						href=""
						className="text-sm font-medium text-primary-500 underline"
					>
						{" "}
						Cadastrar novo paciente
					</Link>
				</section>
				<DataTable columns={columns} data={data} />
			</section>
		</main>
	);
}
