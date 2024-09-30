import { InputText } from "@/components/form/InputText";
import { FormSection } from "./FormSection";

interface SchoolInfoProps {
	progress: number;
	componentIndex: number;
}

export default function SchoolInfoSection({
	progress,
	componentIndex
}: SchoolInfoProps) {
	return (
		<FormSection
			currentStep={progress}
			componentStep={componentIndex}
			title="Escola:"
		>
			<>
				<div>
					<InputText
						id="nome-escola"
						label="Nome:"
						placeholder="Nome da Escola"
						type="text"
					/>
				</div>
				<div>
					<InputText
						id="cnpj-escola"
						label="CNPJ:"
						placeholder="CNPJ da Escola"
						type="text"
					/>
				</div>
				<div>
					<InputText
						id="cep-escola"
						label="CEP:"
						placeholder="CEP da Escola"
						type="text"
					/>
				</div>
				<div>
					<InputText
						id="cidade-escola"
						label="Cidade:"
						placeholder="Cidade da Escola"
						type="text"
					/>
				</div>
				<div>
					<InputText
						id="rua-escola"
						label="Rua:"
						placeholder="Rua da Escola"
						type="text"
					/>
				</div>
				<div>
					<InputText
						id="estado-escola"
						label="Estado:"
						placeholder="Estado da Escola"
						type="text"
					/>
				</div>
				<div>
					<InputText
						id="bairro-escola"
						label="Bairro:"
						placeholder="Bairro da Escola"
						type="text"
					/>
				</div>
				<div>
					<InputText
						id="numero-escola"
						label="Número:"
						placeholder="Número da Escola"
						type="number"
					/>
				</div>
				<div>
					<InputText
						id="complemento-escola"
						label="Complemento:"
						placeholder="Complemento da Escola"
						type="text"
					/>
				</div>
				<div>
					<InputText
						id="telefone-escola"
						label="Telefone:"
						placeholder="Telefone da Escola"
						type="text"
					/>
				</div>
			</>
		</FormSection>
	);
}
