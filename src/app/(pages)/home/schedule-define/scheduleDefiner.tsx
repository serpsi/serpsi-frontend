import { Input } from "@/components/ui/input";
import { DefineLine } from "./defineLine";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useState } from "react";
const week = [
	{
		id: "Sunday",
		name: "Dom.",
		checked: false
	},
	{
		id: "Monday",
		name: "Seg.",
		checked: true
	},
	{
		id: "Tuesday",
		name: "Ter.",
		checked: true
	},
	{
		id: "Wednesday",
		name: "Qua.",
		checked: true
	},
	{
		id: "Thursday",
		name: "Qui.",
		checked: true
	},
	{
		id: "Friday",
		name: "Sex.",
		checked: true
	},
	{
		id: "Saturday",
		name: "Sab.",
		checked: false
	}
];
type AvaliableTime = {
	startTime: string;
	endTime: string;
};
export type Agenda = {
	dayType: string;
	avaliableTimes: AvaliableTime[];
};

type ScheduleAgendas = {
	meetValue: number;
	duration: number;
	agendas: Agenda[];
};

export function ScheduleDefiner() {
	const methods = useForm<ScheduleAgendas>();
	const { fields, append, remove } = useFieldArray({
		name: "agendas",
	});
	const [meetValue, setMeetValue] = useState(Number);
	const [duration, setDuration] = useState(Number);
	return (
		<section className="w-fit text-black">
			<FormProvider {...methods}>
				<form
					onSubmit={methods.handleSubmit(
						() => console.log(methods.getValues()),
						(erro) => console.log(erro)
					)}
					onReset={() => console.log("reset")}
				>
					<div className="flex items-center justify-center gap-2">
						<label htmlFor="valor">Valor:</label>
						<Input
							id="valor"
							type="number"
							step="0.01"
							min={0}
							className="w-fit border border-primary-400"
							{...methods.register("meetValue", {
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
							{...methods.register("duration", {
								valueAsNumber: true,
								setValueAs: setDuration,
								value: duration
							})}
						/>
						<label htmlFor="duracao">minutos</label>
					</div>
					<div className="flex items-center justify-center gap-2 py-2">
						{week.map((value) => {
							return (
								<>
									<input
										id={value.id}
										type="checkbox"
										value=""
										className="h-4 w-4"
										defaultChecked={value.checked}
									/>
									<label htmlFor="checkbox">
										{value.name}
									</label>
								</>
							);
						})}
					</div>
					<div>
						{week.map((value, index) => {
							if (value.checked) {
								return (
									<DefineLine
										key={index}
										day={value.id}
										label={value.name}
									/>
								);
							}
						})}
					</div>
					<div className="mt-3 flex justify-around">
						<Button
							type="reset"
							variant="ghost"
							className="text-primary-600 hover:bg-primary-100/70 hover:text-primary-600"
						>
							Descartar
						</Button>
						<Button
							type="submit"
							className="bg-primary-600 hover:bg-primary-800"
						>
							Salvar horários
						</Button>
					</div>
				</form>
			</FormProvider>
		</section>
	);
}
