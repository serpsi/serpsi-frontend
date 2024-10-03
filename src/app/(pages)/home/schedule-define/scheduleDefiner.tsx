import { Input } from "@/components/ui/input";
import { DefineLine } from "./defineLine";
import { useFieldArray, useFormContext } from "react-hook-form";
import { useState } from "react";
import { AvaliableTime, dayTypes, Agenda, ScheduleAgendas } from "./dayTypes";

const week = [
	{
		key: 0,
		name: dayTypes.Sunday,
		checked: false
	},
	{
		key: 1,
		name: dayTypes.Monday,
		checked: true
	},
	{
		key: 2,
		name: dayTypes.Tuesday,
		checked: true
	},
	{
		key: 3,
		name: dayTypes.Wednesday,
		checked: true
	},
	{
		key: 4,
		name: dayTypes.Thursday,
		checked: true
	},
	{
		key: 5,
		name: dayTypes.Friday,
		checked: true
	},
	{
		key: 6,
		name: dayTypes.Saturday,
		checked: false
	}
];
type defaultValues = {
	agendas: [
		{
			key: number;
			dayType: dayTypes;
			avaliableTimes: { key: number, startTime: string; endTime: string }[];
		}
	];
};

export function ScheduleDefiner() {
	const { register } = useFormContext();
	const { fields, insert, remove } = useFieldArray<ScheduleAgendas>({
		name: "agendas"
	});

	const addAgenda = (dayType: dayTypes, index: number) => {
		insert(index, {
			key: index,
			dayType,
			avaliableTimes: []
		});
	};
	const removeAgenda = (idx: number) => {
		fields.map((value, index) => {
			if (value.key == idx) {
				remove(index);
			}
		});
	};

	const [checkboxes, setCheckboxes] = useState(
		week.map((value) => value.checked)
	);
	const handleClickCheckbox = (index: number) => {
		const updatedCheckBoxes = checkboxes.map((value, idx) => {
			let newValue = value;
			if (index === idx) {
				newValue = !value;
				if (newValue) addAgenda(week[index].name, index);
				else removeAgenda(index);
			}
			return newValue;
		});
		setCheckboxes(updatedCheckBoxes);
	};

	const [meetValue, setMeetValue] = useState(Number);
	const [duration, setDuration] = useState(Number);
	return (
		<>
			{/* duração e valor */}
			<div className="flex items-center justify-center gap-2">
				<label htmlFor="valor">Valor:</label>
				<Input
					id="valor"
					type="number"
					step="0.01"
					min={0}
					className="w-fit border border-primary-400"
					{...register("meetValue", {
						valueAsNumber: true,
						setValueAs: setMeetValue,
						value: meetValue
					})}
				/>
				<label htmlFor="duracao">Duração:</label>
				<Input
					id="duracao"
					type="number"
					className="w-fit border border-primary-400"
					min={0}
					max={600}
					{...register("duration", {
						valueAsNumber: true,
						setValueAs: setDuration,
						value: duration
					})}
				/>
				<label htmlFor="duracao">minutos</label>
			</div>
			{/* array de checkbox */}
			<div className="flex justify-center gap-2 py-2">
				{week.map((value, index) => {
					return (
						<div
							key={value.key}
							className="flex items-center justify-center gap-2"
						>
							<input
								id={"check" + value.name}
								type="checkbox"
								checked={checkboxes[index]}
								onChange={() => handleClickCheckbox(index)}
								className="h-4 w-4"
							/>
							<label htmlFor={"check" + value.name}>
								{value.name}
							</label>
						</div>
					);
				})}
			</div>
			<ul>
				{fields.map((value, index) => {
					return (
						checkboxes[value.key] && (
							<DefineLine
								key={value.id}
								id={index}
								label={week[value.key].name}
							/>
						)
					);
				})}
			</ul>
		</>
	);
}
