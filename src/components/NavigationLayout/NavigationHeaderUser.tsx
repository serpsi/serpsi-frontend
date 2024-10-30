import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

import {
	ChevronDownIcon,
	LogoutIcon,
	MailIcon,
	UserCircleIcon
} from "@heroicons/react/outline";
import { ReactNode } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import Link from "next/link";

interface NavigationHeaderUserProps {
	name: string;
	img: string;
}

export default function NavigationHeaderUser({
	name,
	img
}: NavigationHeaderUserProps) {
	return (
		<div className="flex flex-row flex-nowrap">
			<DropdownMenu>
				<DropdownMenuTrigger>
					<div className="flex w-full flex-row items-center justify-center">
						<span className="text-sm text-primary-950 underline">
							{name}
						</span>
						&nbsp;
						<ChevronDownIcon
							width={16}
							height={16}
							className="text-primary-950"
						/>
						&nbsp;
						<Avatar>
							<AvatarImage src={img} width={33}/>
							<AvatarFallback><UserCircleIcon/></AvatarFallback>
						</Avatar>
					</div>
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<Link href="/profile/">
						<DropdownMenuItem className="cursor-pointer">
							<UserCircleIcon width={16} height={16} />
							&nbsp; Conta
						</DropdownMenuItem>
					</Link>
					<Link href="/home/schedule_definer">
						<DropdownMenuItem className="cursor-pointer">
							<MailIcon width={16} height={16} />
							&nbsp;
							<span>Definir Horários</span>
						</DropdownMenuItem>
					</Link>
					<DropdownMenuItem className="cursor-pointer">
						<LogoutIcon width={16} height={16} />
						&nbsp;
						<span>Sair</span>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
}
