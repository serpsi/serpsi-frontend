import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlusIcon, TrashIcon } from "@heroicons/react/outline";
import { useFieldArray, useFormContext } from "react-hook-form";
import { Agenda, ScheduleAgendas } from "./dayTypes";
type defineLineProps = {
	label: string;
	id: number;
};
export function DefineLine({ id, label }: defineLineProps) {
	const { register } = useFormContext();

	return (
		<li className="flex items-center justify-center gap-2 p-2">
			<span className="w-8"> {label} </span>
			<Input
				type="text"
				className="w-fit border-primary-400"
				placeholder="hora inicial"
				defaultValue="08:00"
				{...register(
					`agendas.${id}.avaliableTimes.${0}.startTime`
					// 	, {
					// 	pattern: RegExp("^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$"),
					// 	required: true
					// }
				)}
			/>
			<span className="w-8"> para </span>
			<Input
				type="text"
				className="w-fit border-primary-400"
				placeholder="hora final"
				defaultValue="12:00"
				{...register(
					`agendas.${id}.avaliableTimes.${0}.endTime`
					// 	, {
					// 	pattern: RegExp("^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$"),
					// 	required: true
					// }
				)}
			/>
			<Button type="button" variant="link" className="text-primary-400">
				<PlusIcon width={24} height={24} />
			</Button>
			<Button type="button" variant="link" className="text-red-400">
				<TrashIcon width={24} height={24} />
			</Button>
		</li>
	);
}
