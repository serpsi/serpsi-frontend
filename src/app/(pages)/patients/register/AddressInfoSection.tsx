import { InputText } from "@/components/form/InputText";
import { FormSection } from "./FormSection";
import { useFormContext } from "react-hook-form";

interface AddressInfoProps {
	progress: number;
	componentIndex: number;
}

export default function AddressInfoSection({
	progress,
	componentIndex
}: AddressInfoProps) {
	const { register } = useFormContext();
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
						name="address.zipCode"
						register={register}
					/>
				</div>
				<div>
					<InputText
						id="cidade"
						label="Cidade:"
						placeholder="Digite a Cidade"
						type="text"
						name="address.city"
						register={register}
					/>
				</div>
				<div>
					<InputText
						id="rua"
						label="Rua:"
						placeholder="Digite a Rua"
						type="text"
						name="address.street"
						register={register}
					/>
				</div>
				<div>
					<InputText
						id="uf"
						label="Estado:"
						placeholder="Digite o Estado"
						type="text"
						name="address.state"
						register={register}
					/>
				</div>
				<div>
					<InputText
						id="bairro"
						label="Bairro:"
						placeholder="Digite o Bairro"
						type="text"
						name="address.district"
						register={register}
					/>
				</div>
				<div>
					<InputText
						id="numero"
						label="Número:"
						placeholder="Digite o Número"
						type="number"
						name="address.houseNumber"
						register={register}
					/>
				</div>
				<div>
					<InputText
						id="Complemento"
						label="Complemento:"
						placeholder="Digite o Complemento"
						type="text"
						name="address.complement"
						register={register}
					/>
				</div>
			</>
		</FormSection>
	);
}
