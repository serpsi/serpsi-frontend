import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlusIcon, TrashIcon } from "@heroicons/react/outline";
import { useFormContext } from "react-hook-form";
type defineLineProps = {
	label: string;
	day: string;
	key: string | number;
};
export function DefineLine({ key, day, label }: defineLineProps) {
	const { register } = useFormContext();
	return (
		<div key={key} className="flex items-center justify-center gap-2 p-2">
			<span className="w-8"> {label} </span>
			<Input
				type="text"
				className="w-fit border-primary-400"
				placeholder="08:00"
				{...register(`agendas.${key}.`)}
			/>
			<span className="w-8"> para </span>
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
	);
}
