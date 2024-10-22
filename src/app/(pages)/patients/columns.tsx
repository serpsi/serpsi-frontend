"use client";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { PencilAltIcon } from "@heroicons/react/outline";

export type Patient = {
	id: string;
	name: string;
	paymentPlan: "Mensal" | "Bimestral" | "Trimestral" | "Avulso";
	documento: string;
};

export const columns: ColumnDef<Patient>[] = [
	{
		accessorKey: "id",
		header: () => (
			<div className="flex w-[70px] justify-center">Editar</div>
		),
		size: 70,
		cell: (e) => (
			<Link href={"/patients/"+ e.getValue()} className="flex justify-center">
				<PencilAltIcon width={24} height={24} />
			</Link>
		)
	},
	{
		accessorKey: "name",
		header: "Paciente",
		size: 250
	},
	{
		accessorKey: "cpf",
		header: "Documento",
		size: 250
	},
	{
		accessorKey: "payment_plan",
		header: "Plano de pagamento",
		size: 250
	}
];

export const data: Patient[] = [
	{
		id: "INV001",
		paymentPlan: "Mensal",
		name: "Aurora",
		documento: "000.000.000-00"
	},
	{
		id: "INV002",
		paymentPlan: "Bimestral",
		name: "Antonio",
		documento: "000.000.000-00"
	},
	{
		id: "INV003",
		paymentPlan: "Mensal",
		name: "Daniel",
		documento: "000.000.000-00"
	},
	{
		id: "INV004",
		paymentPlan: "Trimestral",
		name: "Marcelo",
		documento: "000.000.000-00"
	},
	{
		id: "INV005",
		paymentPlan: "Avulso",
		name: "danillo",
		documento: "000.000.000-00"
	},
	{
		id: "INV006",
		paymentPlan: "Avulso",
		name: "Iara",
		documento: "000.000.000-00"
	},
	{
		id: "INV007",
		paymentPlan: "Bimestral",
		name: "Roberto Santos",
		documento: "000.000.000-00"
	},
	{
		id: "INV008",
		paymentPlan: "Mensal",
		name: "Roberto Santos",
		documento: "000.000.000-00"
	},
	{
		id: "INV009",
		paymentPlan: "Trimestral",
		name: "Roberto Santos",
		documento: "000.000.000-00"
	},
	{
		id: "INV010",
		paymentPlan: "Avulso",
		name: "Roberto Santos",
		documento: "000.000.000-00"
	},
	{
		id: "INV011",
		paymentPlan: "Mensal",
		name: "Roberto Santos",
		documento: "000.000.000-00"
	},
	{
		id: "INV012",
		paymentPlan: "Avulso",
		name: "Roberto Santos",
		documento: "000.000.000-00"
	},
	{
		id: "INV013",
		paymentPlan: "Mensal",
		name: "Roberto Santos",
		documento: "000.000.000-00"
	}
];
