import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlusIcon, TrashIcon } from "@heroicons/react/outline";
type defineLineProps = {
	label: string;
};
export function DefineLine({ label }: defineLineProps) {
	return (
		<>
			<div className="flex items-center justify-center gap-2 p-2">
				<span> {label} </span>
				<Input
					type="text"
					className="w-fit border-primary-400"
					placeholder="08:00"
				/>
				<span> para </span>
				<Input
					type="text"
					className="w-fit border-primary-400"
					placeholder="12:00"
				/>
				<Button variant="link" className="text-primary-400">
					<PlusIcon width={24} height={24} />
				</Button>
				<Button variant="link" className="text-red-400">
					<TrashIcon width={24} height={24} />
				</Button>
			</div>
		</>
	);
}
