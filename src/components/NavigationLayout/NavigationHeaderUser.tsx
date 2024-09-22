import Image from "next/image";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

import { ChevronDownIcon } from "@heroicons/react/outline";

export default function NavigationHeaderUser() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<div className="flex w-full flex-row items-center justify-center">
					<span className="text-sm text-primary-950 underline">
						Fulano de Tal
					</span>
					&nbsp;
					<ChevronDownIcon
						width={16}
						height={16}
						className="text-primary-950"
					/>
					&nbsp;
					<Image
						alt="logo-empresa"
						src={"/avatar-teste.jpg"}
						width={33}
						height={33}
						className="rounded-full"
					/>
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuItem>Conta</DropdownMenuItem>
				<DropdownMenuItem>Definir Horários</DropdownMenuItem>
				<DropdownMenuItem>Sair</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
