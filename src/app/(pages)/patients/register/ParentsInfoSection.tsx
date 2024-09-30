import { ReactNode, useState } from "react";
import { FormSection } from "./FormSection";
import { InputText } from "@/components/form/InputText";
import { Button } from "@/components/ui/button";
import { PlusIcon, TrashIcon } from "@heroicons/react/outline";

interface ParentsInfoProps {
	progress: number;
	componentIndex: number;
}

export default function ParentsInfoSection({
	progress,
	componentIndex
}: ParentsInfoProps) {
	const [parentNumber, setParentNumber] = useState<number>(1);
	const addParent = () => {
		setParentNumber((prev) => prev + 1);
	};

	const removeParent = () => {
		setParentNumber((prev) => prev - 1);
	};

	const generateParentsFormSection = () => {
		var parentsList: ReactNode[] = [];
		for (let i = 1; i <= parentNumber; i++) {
			parentsList.push(
				<>
					<FormSection
						currentStep={progress}
						componentStep={3}
						title={`Informações do Responsável ${i}`}
					>
						<div>
							<InputText
								id={`nome-responsavel-${i}`}
								label="Nome:"
								placeholder={`Nome do Responsável ${i}`}
								type="text"
							/>
						</div>
						<div>
							<InputText
								id={`cpf-responsavel-${i}`}
								label="CPF:"
								placeholder={`CPF do Responsável ${i}`}
								type="text"
							/>
						</div>
						<div>
							<InputText
								id={`data-nasc-responsavel-${i}`}
								label="Data de Nascimento:"
								placeholder="dd/mm/aaaa"
								type="date"
							/>
						</div>
						<div>
							<InputText
								id={`rg-responsavel-${i}`}
								label="RG:"
								placeholder={`RG do Responsável ${i}`}
								type="text"
							/>
						</div>
						<div>
							<InputText
								id={`telefone-responsavel-${i}`}
								label="Telefone:"
								placeholder={`Telefone do Responsável ${i}`}
								type="text"
							/>
						</div>
						<br />
						{i === parentNumber && (
							<Button
								className="bg-primary-600 text-left hover:bg-primary-400"
								onClick={addParent}
								type={"button"}
							>
								<PlusIcon width={18} height={18} />
								&nbsp; Adicionar Outro Responsável
							</Button>
						)}
						{parentNumber > 1 && i === parentNumber && (
							<Button
								className="bg-primary-600 text-left hover:bg-primary-400"
								onClick={removeParent}
								type={"button"}
							>
								<TrashIcon width={18} height={18} />
								&nbsp; Remover responsável
							</Button>
						)}
					</FormSection>
					{i != parentNumber && <br />}
				</>
			);
		}
		return parentsList;
	};

	const parentsList = generateParentsFormSection();
	return (
		<>
			{parentsList.map((value, key) => (
				<div key={key}>{value}</div>
			))}
		</>
	);
}
