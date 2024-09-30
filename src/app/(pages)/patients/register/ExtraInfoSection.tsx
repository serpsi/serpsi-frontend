import { InputText } from "@/components/form/InputText";
import { FormSection } from "./FormSection";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from "@/components/ui/select";
import { useFormContext } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { ReactNode, useState } from "react";
import { PlusIcon, TrashIcon } from "@heroicons/react/outline";

interface ExtraInfoProps {
	progress: number;
	componentIndex: number;
}

export default function ExtraInfoSection({
	progress,
	componentIndex
}: ExtraInfoProps) {
	const { register, watch } = useFormContext();
	const [medicineNumber, setMedicineNumber] = useState<number>(1);

	const addMedicine = () => {
		setMedicineNumber((prev) => prev + 1);
	};

	const removeMedicine = () => {
		setMedicineNumber((prev) => prev - 1);
	};

	const generateMedicinesFormSection = () => {
		var medicinesList: ReactNode[] = [];
		for (let i = 1; i <= medicineNumber; i++) {
			medicinesList.push(
				<>
					{i > 1 && <hr className="col-span-2 my-2 border" />}
					<div>
						<InputText
							id={`nome-medicamento-${i}`}
							label="Nome do Medicamento:"
							placeholder={`Nome do Medicamento ${i}`}
							type="text"
						/>
					</div>
					<div>
						<InputText
							id={`frq-diaria-${i}`}
							label="Frequência Diária:"
							placeholder="Digite a Frequência Diária"
							type="number"
						/>
					</div>
					<div>
						<InputText
							id={`dosagem-medicamento-${i}`}
							label="Dosagem do Medicamento:"
							placeholder="Ex: 5"
							type="number"
						/>
					</div>
					<div>
						<InputText
							id={`unidade-dosagem-medicamento-${i}`}
							label="Unidade de Medida da Dosagem:"
							placeholder="Ex: mg"
							type="text"
						/>
					</div>
					<div>
						<InputText
							id={`data-inicio-medicamento-${i}`}
							label="Data de Início do Medicamento:"
							placeholder=""
							type="date"
						/>
					</div>
					<div>
						<InputText
							id={`data-inicio-medicamento-${i}`}
							label="Horário da Primeira Dose:"
							placeholder="Ex: 8"
							type="time"
						/>
					</div>
					<div>
						<InputText
							id={`obs-medicamento-${i}`}
							label="Observações do Medicamento"
							placeholder="Digie as observações"
							type="text"
						/>
					</div>
					<br />
					{i === medicineNumber && (
						<Button
							className="bg-primary-600 text-left hover:bg-primary-400"
							onClick={addMedicine}
							type={"button"}
						>
							<PlusIcon width={18} height={18} />
							&nbsp; Adicionar Outro Medicamento
						</Button>
					)}
					{medicineNumber > 1 && i === medicineNumber && (
						<Button
							className="text-left"
							onClick={removeMedicine}
							type={"button"}
						>
							<TrashIcon width={18} height={18} />
							&nbsp; Remover Medicamento
						</Button>
					)}
				</>
			);
		}
		return medicinesList;
	};

	const medicinesList = generateMedicinesFormSection();
	return (
		<FormSection
			currentStep={progress}
			componentStep={componentIndex}
			title="Informações Adicionais"
		>
			<>
				<div>
					<InputText
						id="comorbidades"
						label="Possui Comorbidade? se Sim, Qual(is)?"
						placeholder="Comorbidade 1, Comorbidade 2, ..."
						type="text"
					/>
				</div>
				<div>
					<InputText
						id="acompanhamentos"
						label="Acompanhamentos anteriores:"
						placeholder=""
						type="file"
					/>
				</div>
				<div>
					<label htmlFor="plano-pagamento">Plano de Pagamento:</label>

					<Select name="plano-pagamento">
						<SelectTrigger className="w-full border-primary-400 focus:ring-primary-500">
							<SelectValue placeholder="Selecione o plano de pagamento..." />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="AVULSO">Avulso</SelectItem>
							<SelectItem value="MENSAL">Mensal</SelectItem>
							<SelectItem value="BIMESTRAL">Bimestral</SelectItem>
							<SelectItem value="TRIMESTRAL">
								Trimestral
							</SelectItem>
						</SelectContent>
					</Select>
				</div>
				<br />

				<div className="flex w-full items-center justify-start">
					<input
						className="mr-2 h-4 w-4 accent-primary-600"
						id="checkMedicamentos"
						type="checkbox"
						{...register("checkMedicamentos")}
					/>
					<label htmlFor="checkMedicamentos">
						Faz uso de medicamentos.
					</label>
				</div>
				<br />
				{watch("checkMedicamentos") &&
					medicinesList.map((value, key) => <>{value}</>)}
			</>
		</FormSection>
	);
}
