import { InputText } from "@/components/form/InputText";
import { FormSection } from "./FormSection";
import { useFormContext } from "react-hook-form";

interface SchoolInfoProps {
	progress: number;
	componentIndex: number;
}

export default function SchoolInfoSection({
	progress,
	componentIndex
}: SchoolInfoProps) {
	const { register } = useFormContext();
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
						name="school.name"
						register={register}
					/>
				</div>
				<div>
					<InputText
						id="cnpj-escola"
						label="CNPJ:"
						placeholder="CNPJ da Escola"
						type="text"
						name="school.cnpj"
						register={register}
						mask="99.999.999/9999-99"
					/>
				</div>
				<div>
					<InputText
						id="cep-escola"
						label="CEP:"
						placeholder="CEP da Escola"
						type="text"
						name="school.zipCode"
						register={register}
						mask="99999-999"
					/>
				</div>
				<div>
					<InputText
						id="cidade-escola"
						label="Cidade:"
						placeholder="Cidade da Escola"
						type="text"
						name="school.city"
						register={register}
					/>
				</div>
				<div>
					<InputText
						id="rua-escola"
						label="Rua:"
						placeholder="Rua da Escola"
						type="text"
						name="school.street"
						register={register}
					/>
				</div>
				<div>
					<InputText
						id="estado-escola"
						label="Estado:"
						placeholder="Estado da Escola"
						type="text"
						name="school.state"
						register={register}
						mask="aa"
					/>
				</div>
				<div>
					<InputText
						id="bairro-escola"
						label="Bairro:"
						placeholder="Bairro da Escola"
						type="text"
						name="school.district"
						register={register}
					/>
				</div>
				<div>
					<InputText
						id="numero-escola"
						label="Número:"
						placeholder="Número da Escola"
						type="number"
						name="school.schoolNumber"
						register={register}
					/>
				</div>
				<div>
					<InputText
						id="complemento-escola"
						label="Complemento:"
						placeholder="Complemento da Escola"
						type="text"
						name="school.complement"
						register={register}
					/>
				</div>
				<div>
					<InputText
						id="telefone-escola"
						label="Telefone:"
						placeholder="Telefone da Escola"
						type="text"
						name="school.phone"
						register={register}
						mask="(99) 99999-9999"
					/>
				</div>
			</>
		</FormSection>
	);
}
