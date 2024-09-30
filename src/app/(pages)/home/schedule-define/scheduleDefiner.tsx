import { Input } from "@/components/ui/input";
import { DefineLine } from "./defineLine";

export function ScheduleDefiner() {
	return (
		<section className="w-1/2 border border-red-700 text-black">
			<div className="flex justify-center gap-2 items-center">
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
			<div className="flex border border-green-600 items-center justify-center gap-2">
				<input id="checkbox" type="checkbox" value="" className="w-4 h-4"/>
				<label htmlFor="checkbox">Seg</label>
			</div>
			<div>
				<DefineLine />
				<DefineLine />
				<DefineLine />
			</div>
		</section>
	);
}
