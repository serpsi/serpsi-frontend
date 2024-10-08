import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlusIcon, TrashIcon } from "@heroicons/react/outline";
import { useFieldArray, useFormContext } from "react-hook-form";
import { Agenda, ScheduleAgendas } from "./dayTypes";
type defineLineProps = {
	label: string;
	id: number;
	aditional?: boolean;
};
export function DefineLine({ id, label, aditional = false }: defineLineProps) {
	const { register } = useFormContext();
	const { fields, insert, remove } = useFieldArray<ScheduleAgendas>({
		name: `agendas.${id}.avaliableTimes`
	});

	const addAvaliableTime = (index: number) => {
		insert(index, {
			key: id,
			startTime: "",
			endTime: ""
		});
	};

	const removeAvaliableTime = (index: number) => {
		remove(index);
	};

	return (
		<li className="flex items-center justify-center gap-2">
			<div className="flex flex-col gap-2 p-2">
				{fields.map((value, index) => {
					return (
						<div
							key={value.id}
							className="flex flex-col md:flex-row "
						>
							<div className="flex items-center justify-center gap-2">
								<span className="w-8">
									{" "}
									{!index ? label : ""}{" "}
								</span>
								<Input
									type="text"
									className="w-20 border-primary-400 lg:w-fit"
									placeholder="hora inicial"
									defaultValue="08:00"
									{...register(
										`agendas.${id}.avaliableTimes.${index}.startTime`
										// 	, {
										// 	pattern: RegExp("^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$"),
										// 	required: true
										// }
									)}
								/>
								<span className="w-8"> para </span>
								<Input
									type="text"
									className="w-20 border-primary-400 lg:w-fit"
									placeholder="hora final"
									defaultValue="12:00"
									{...register(
										`agendas.${id}.avaliableTimes.${index}.endTime`
										// 	, {
										// 	pattern: RegExp("^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$"),
										// 	required: true
										// }
									)}
								/>
							</div>
							<div className="flex items-center justify-center lg:justify-start ml-2">
								<span className="w-9 md:w-0"> </span>
								{index == fields.length - 1 ? (
									<Button
										type="button"
										variant="link"
										className="mt-2 w-20 md:w-fit bg-primary-400 text-white md:m-0 lg:bg-white lg:text-primary-400"
										size="sm"
										onClick={() => addAvaliableTime(1)}
									>
										<PlusIcon width={24} height={24} />
									</Button>
								) : (
									null
								)}
								<span className="w-12 md:w-1"> </span>
								{index == fields.length - 1 && index ? (
									<Button
										type="button"
										variant="link"
										className="mt-2 w-20 md:w-fit bg-red-400 text-white md:m-0 lg:bg-white lg:text-red-400"
										size="sm"
										onClick={() => removeAvaliableTime(1)}
									>
										<TrashIcon width={24} height={24} />
									</Button>
								) : (
									<span className="md:w-fit w-20 px-4 md:py-2 text-white">
										<TrashIcon width={24} height={1} />
									</span>
								)}
							</div>
						</div>
					);
				})}
			</div>
		</li>
	);
}
