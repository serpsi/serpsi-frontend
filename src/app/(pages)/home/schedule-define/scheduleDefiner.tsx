import { Input } from "@/components/ui/input";
import { DefineLine } from "./defineLine";
import { useFieldArray, useFormContext } from "react-hook-form";
import { useState } from "react";
import { dayTypes, ScheduleAgendas } from "./dayTypes";
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

export function ScheduleDefiner() {
	const { register, setValue } = useFormContext();
	const { fields, insert, remove } = useFieldArray<ScheduleAgendas>({
		name: "agendas"
	});

	const addAgenda = (dayType: dayTypes, index: number) => {
		let iterator = 0;
		for (const value of fields) {
			if (value.key > index) {
				insert(iterator, {
					key: index,
					dayType,
					avaliableTimes: [
						{
							key: index,
							startTime: "8:00",
							endTime: "18:00"
						}
					]
				});
				return;
			}
			iterator++;
		}
		insert(index, {
			key: index,
			dayType,
			avaliableTimes: [
				{
					key: index,
					startTime: "8:00",
					endTime: "18:00"
				}
			]
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

	const changeMeetValue = (value: string) => {
		let number = +value.slice(2).replaceAll(".","").replaceAll(",",".");
		setValue("meetValue", number);
		console.log(`valor ${number}`)
		setMeetValue(number)
		return number;
	}
	return (
		<>
			{/* duração e valor */}
			<div className="flex flex-col justify-center gap-2 md:flex-row lg:items-center">
				<label htmlFor="valor">Valor:</label>
				<Input
					id="valor"
					type="numeric"
					mask={"R$ 999,99"}
					className="w-auto border border-primary-400 lg:w-fit"
					defaultValue={120.50}
					{...register("meetValue", {
						valueAsNumber: true,
						onChange: (e) => changeMeetValue(e.target.value)
					})}
				/>
				<label htmlFor="duracao">Duração:</label>
				<Input
					id="duracao"
					type="number"
					className="w-auto border border-primary-400 lg:w-fit"
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
							className="flex flex-col-reverse items-center justify-center gap-2 lg:flex-row"
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
