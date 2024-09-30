import { Input } from "@/components/ui/input";
import { DefineLine } from "./defineLine";
const week = [
	{
		id: "sunday",
		name: "Dom.",
		checked: false
	},
	{
		id: "monday",
		name: "Seg.",
		checked: true
	},
	{
		id: "tuesday",
		name: "Ter.",
		checked: true
	},
	{
		id: "wednesday",
		name: "Qua.",
		checked: true
	},
	{
		id: "Thursday",
		name: "Qui.",
		checked: true
	},
	{
		id: "friday",
		name: "Sex.",
		checked: true
	},
	{
		id: "saturday",
		name: "Sab.",
		checked: false
	}
];

export function ScheduleDefiner() {
	return (
		<section className="w-1/2 text-black">
			<div className="flex items-center justify-center gap-2">
				<label htmlFor="valor">Valor:</label>
				<Input
					id="valor"
					className="w-fit border border-primary-400"
					placeholder="valor"
				/>
				<label htmlFor="duracao">Duração:</label>
				<Input
					id="duracao"
					className="w-fit border border-primary-400"
					min={0}
					max={600}
				/>
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
								checked={value.checked}
							/>
							<label htmlFor="checkbox">{value.name}</label>
						</>
					);
				})}
			</div>
			<div>
				{week.map((value, index) => {
					if (value.checked) {
						return <DefineLine key={index} label={value.name} />;
					}
				})}
			</div>
		</section>
	);
}
