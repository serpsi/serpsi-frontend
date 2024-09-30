import { InputText } from "@/components/form/InputText";
import { FormSection } from "./FormSection";

interface AddressInfoProps {
	progress: number;
	componentIndex: number;
}

export default function AddressInfoSection({
	progress,
	componentIndex
}: AddressInfoProps) {
	return (
		<FormSection
			currentStep={progress}
			componentStep={componentIndex}
			title="Endereço:"
		>
			<>
				<div>
					<InputText
						id="cep"
						label="CEP:"
						placeholder="CEP"
						type="text"
					/>
				</div>
				<div>
					<InputText
						id="cidade"
						label="Cidade:"
						placeholder="Digite a Cidade"
						type="text"
					/>
				</div>
				<div>
					<InputText
						id="rua"
						label="Rua:"
						placeholder="Digite a Rua"
						type="text"
					/>
				</div>
				<div>
					<InputText
						id="uf"
						label="Estado:"
						placeholder="Digite o Estado"
						type="text"
					/>
				</div>
				<div>
					<InputText
						id="bairro"
						label="Bairro:"
						placeholder="Digite o Bairro"
						type="text"
					/>
				</div>
				<div>
					<InputText
						id="numero"
						label="Número:"
						placeholder="Digite o Número"
						type="number"
					/>
				</div>
				<div>
					<InputText
						id="Complemento"
						label="Complemento:"
						placeholder="Digite o Complemento"
						type="text"
					/>
				</div>
			</>
		</FormSection>
	);
}
