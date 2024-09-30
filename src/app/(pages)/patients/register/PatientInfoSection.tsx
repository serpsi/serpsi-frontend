import { InputText } from "@/components/form/InputText";
import { FormSection } from "./FormSection";

interface PacientInfoProps {
	progress: number;
	componentIndex: number;
}

export default function PatientInfoSection({
	progress,
	componentIndex
}: PacientInfoProps) {
	return (
		<FormSection
			currentStep={progress}
			componentStep={componentIndex}
			title="Informações do Paciente"
		>
			<>
				<div>
					<InputText
						id="nome"
						label="Nome:"
						placeholder="Nome do Paciente"
						type="text"
					/>
				</div>
				<div>
					<InputText
						id="cpf"
						label="CPF:"
						placeholder="CPF do Paciente"
						type="text"
					/>
				</div>
				<div>
					<InputText
						id="data-nasc"
						label="Data de Nascimento:"
						placeholder="dd/mm/aaaa"
						type="date"
					/>
				</div>
				<div>
					<InputText
						id="rg"
						label="RG:"
						placeholder="RG do Paciente"
						type="text"
					/>
				</div>
				<div>
					<InputText
						id="telefone"
						label="Telefone:"
						placeholder="Telefone do Paciente"
						type="text"
					/>
				</div>
			</>
		</FormSection>
	);
}
