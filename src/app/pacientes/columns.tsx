"use client";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import pencilSquare from "@/assets/pencil-square.svg";
import Link from "next/link";

export type Payment = {
	id: string;
	amount: string;
	status: "Pending" | "processing" | "Paid" | "Unpaid";
	documento: string;
};

export const columns: ColumnDef<Payment>[] = [
	{
		accessorKey: "editar",
		header: () => <div className="flex justify-center w-full">Editar</div>,
		size: 70,
		cell: () => (
			<Link href="" className="flex justify-center">
				<Image
					src={pencilSquare}
					alt="pencil-square"
					width={24}
					height={24}
				/>
			</Link>
		)
	},
	{
		accessorKey: "status",
		header: "Status"
	},
	{
		accessorKey: "amount",
		header: "Amount"
	},
	{
		accessorKey: "documento",
		header: "Documento"
	}
];

export const invoices: Payment[] = [
	{
		id: "INV001",
		status: "Paid",
		amount: "$250.00",
		documento: "aaaa134;docm"
	},
	{
		id: "INV002",
		status: "Pending",
		amount: "$150.00",
		documento: "aaaa134;docm"
	},
	{
		id: "INV003",
		status: "Unpaid",
		amount: "$350.00",
		documento: "aaaa134;docm"
	},
	{
		id: "INV004",
		status: "Paid",
		amount: "$450.00",
		documento: "aaaa134;docm"
	},
	{
		id: "INV005",
		status: "Paid",
		amount: "$550.00",
		documento: "aaaa134;docm"
	},
	{
		id: "INV006",
		status: "Pending",
		amount: "$200.00",
		documento: "aaaa134;docm"
	},
	{
		id: "INV007",
		status: "Unpaid",
		amount: "$300.00",
		documento: "aaaa134;docm"
	},
	{
		id: "INV008",
		status: "Paid",
		amount: "$550.00",
		documento: "aaaa134;docm"
	},
	{
		id: "INV009",
		status: "Pending",
		amount: "$200.00",
		documento: "aaaa134;docm"
	},
	{
		id: "INV010",
		status: "Unpaid",
		amount: "$300.00",
		documento: "aaaa134;docm"
	},
	{
		id: "INV011",
		status: "Paid",
		amount: "$550.00",
		documento: "aaaa134;docm"
	},
	{
		id: "INV012",
		status: "Pending",
		amount: "$200.00",
		documento: "aaaa134;docm"
	},
	{
		id: "INV013",
		status: "Unpaid",
		amount: "$300.00",
		documento: "aaaa134;docm"
	}
];
