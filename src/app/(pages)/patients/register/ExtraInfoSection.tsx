import { InputText } from "@/components/form/InputText";
import { FormSection } from "./FormSection";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from "@/components/ui/select";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { ReactNode, useState } from "react";
import { PlusIcon, TrashIcon } from "@heroicons/react/outline";
import React from "react";

interface ExtraInfoProps {
	progress: number;
	componentIndex: number;
}

export default function ExtraInfoSection({
	progress,
	componentIndex
}: ExtraInfoProps) {
	// const [medicineNumber, setMedicineNumber] = useState<number>(1);

	const { control, register, watch } = useFormContext();
	const { fields, append, remove } = useFieldArray({
		control,
		name: "medicines"
	});

	const addMedicine = () => {
		append({
			name: "",
			dosage: "",
			dosageUnity: "",
			frequency: "",
			firstTimeOfTheDay: "",
			startDate: "",
			observation: ""
		});
	};

	const removeMedicine = () => {
		remove(fields.length - 1);
	};

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
						name="comorbidities"
						register={register}
					/>
				</div>
				<div>
					<InputText
						id="acompanhamentos"
						label="Acompanhamentos anteriores:"
						placeholder=""
						type="file"
						name="previousDocuments"
						register={register}
					/>
				</div>
				<div>
					<label htmlFor="paymentPlan">Plano de Pagamento:</label>

					<Controller
						name="paymentPlan"
						control={control}
						render={({ field }) => (
							<Select
								onValueChange={field.onChange}
								value={field.value}
							>
								<SelectTrigger className="w-full border-primary-400 focus:ring-primary-500">
									<SelectValue placeholder="Selecione o plano de pagamento..." />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="AVULSO">
										Avulso
									</SelectItem>
									<SelectItem value="MENSAL">
										Mensal
									</SelectItem>
									<SelectItem value="BIMESTRAL">
										Bimestral
									</SelectItem>
									<SelectItem value="TRIMESTRAL">
										Trimestral
									</SelectItem>
								</SelectContent>
							</Select>
						)}
					/>
				</div>
				<br />

				<div className="flex w-full items-center justify-start">
					<input
						className="mr-2 h-4 w-4 accent-primary-600"
						id="checkMedicines"
						type="checkbox"
						{...register("checkMedicines")}
					/>
					<label htmlFor="checkMedicines">
						Faz uso de medicamentos.
					</label>
				</div>
				<br />
				{watch("checkMedicines") &&
					fields.map((value, index) => (
						<React.Fragment key={value.id}>
							{index > 0 && (
								<hr className="col-span-2 my-2 border" />
							)}
							<div>
								<InputText
									id={`nome-medicamento-${index}`}
									label="Nome do Medicamento:"
									placeholder={`Nome do Medicamento ${index}`}
									type="text"
									name={`medicines.${index}.name`}
									register={register}
								/>
							</div>
							<div>
								<InputText
									id={`frq-diaria-${index}`}
									label="Frequência Diária:"
									placeholder="Digite a Frequência Diária"
									type="number"
									name={`medicines.${index}.frequency`}
									register={register}
								/>
							</div>
							<div>
								<InputText
									id={`dosagem-medicamento-${index}`}
									label="Dosagem do Medicamento:"
									placeholder="Ex: 5"
									type="number"
									name={`medicines.${index}.dosage`}
									register={register}
								/>
							</div>
							<div>
								<InputText
									id={`unidade-dosagem-medicamento-${index}`}
									label="Unidade de Medida da Dosagem:"
									placeholder="Ex: mg"
									type="text"
									name={`medicines.${index}.dosageUnity`}
									register={register}
								/>
							</div>
							<div>
								<InputText
									id={`data-inicio-medicamento-${index}`}
									label="Data de Início do Medicamento:"
									placeholder=""
									type="date"
									name={`medicines.${index}.startDate`}
									register={register}
								/>
							</div>
							<div>
								<InputText
									id={`data-inicio-medicamento-${index}`}
									label="Horário da Primeira Dose:"
									placeholder="Ex: 8"
									type="time"
									name={`medicines.${index}.firstTimeOfTheDay`}
									register={register}
								/>
							</div>
							<div>
								<InputText
									id={`obs-medicamento-${index}`}
									label="Observações do Medicamento"
									placeholder="Digie as observações"
									type="text"
									name={`medicines.${index}.observation`}
									register={register}
								/>
							</div>
							<br />
							{index === fields.length - 1 && (
								<Button
									className="bg-primary-600 text-left hover:bg-primary-400"
									onClick={addMedicine}
									type={"button"}
								>
									<PlusIcon width={18} height={18} />
									&nbsp; Adicionar Outro Medicamento
								</Button>
							)}
							{fields.length > 1 &&
								index === fields.length - 1 && (
									<Button
										className="text-left"
										onClick={removeMedicine}
										type={"button"}
									>
										<TrashIcon width={18} height={18} />
										&nbsp; Remover Medicamento
									</Button>
								)}
						</React.Fragment>
					))}
			</>
		</FormSection>
	);
}
