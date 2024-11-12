import { InputText } from "@/components/form/InputText";
import { FormSection } from "./FormSection";
import { Controller, useFormContext } from "react-hook-form";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from "@/components/ui/select";
import { CreatePatientForm } from "./schema";

interface SchoolInfoProps {
	progress: number;
	componentIndex: number;
}

export default function SchoolInfoSection({
	progress,
	componentIndex
}: SchoolInfoProps) {
	const {
		control,
		register,
		formState: { errors }
	} = useFormContext<CreatePatientForm>();
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
						error={errors.school?.name?.message}
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
						error={errors.school?.cnpj?.message}
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
						error={errors.school?.zipCode?.message}
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
						error={errors.school?.city?.message}
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
						error={errors.school?.street?.message}
					/>
				</div>
				<div>
					<label
						className="mb-1 w-full text-sm font-normal text-primary-950"
						htmlFor="school.state"
					>
						Estado:
					</label>
					<Controller
						name="school.state"
						control={control}
						render={({ field }) => (
							<Select
								onValueChange={field.onChange}
								value={field.value}
							>
								<SelectTrigger
									className={
										errors.school?.state
											? "w-full border-red-500 focus:ring-red-600"
											: "w-full border-primary-400 focus:ring-primary-500"
									}
								>
									<SelectValue placeholder="Selecione o estado" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="AC">Acre</SelectItem>
									<SelectItem value="AL">Alagoas</SelectItem>
									<SelectItem value="AP">Amapá</SelectItem>
									<SelectItem value="AM">Amazonas</SelectItem>
									<SelectItem value="BA">Bahia</SelectItem>
									<SelectItem value="CE">Ceará</SelectItem>
									<SelectItem value="DF">
										Distrito Federal
									</SelectItem>
									<SelectItem value="ES">
										Espírito Santo
									</SelectItem>
									<SelectItem value="GO">Goiás</SelectItem>
									<SelectItem value="MA">Maranhão</SelectItem>
									<SelectItem value="MT">
										Mato Grosso
									</SelectItem>
									<SelectItem value="MS">
										Mato Grosso do Sul
									</SelectItem>
									<SelectItem value="MG">
										Minas Gerais
									</SelectItem>
									<SelectItem value="PA">Pará</SelectItem>
									<SelectItem value="PB">Paraíba</SelectItem>
									<SelectItem value="PR">Paraná</SelectItem>
									<SelectItem value="PE">
										Pernambuco
									</SelectItem>
									<SelectItem value="PI">Piauí</SelectItem>
									<SelectItem value="RJ">
										Rio de Janeiro
									</SelectItem>
									<SelectItem value="RN">
										Rio Grande do Norte
									</SelectItem>
									<SelectItem value="RS">
										Rio Grande do Sul
									</SelectItem>
									<SelectItem value="RO">Rondônia</SelectItem>
									<SelectItem value="RR">Roraima</SelectItem>
									<SelectItem value="SC">
										Santa Catarina
									</SelectItem>
									<SelectItem value="SP">
										São Paulo
									</SelectItem>
									<SelectItem value="SE">Sergipe</SelectItem>
									<SelectItem value="TO">
										Tocantins
									</SelectItem>
								</SelectContent>
							</Select>
						)}
					/>
					{errors.school?.state && (
						<span className="text-sm text-red-400">
							{errors.school?.state?.message}
						</span>
					)}
				</div>
				<div>
					<InputText
						id="bairro-escola"
						label="Bairro:"
						placeholder="Bairro da Escola"
						type="text"
						name="school.district"
						register={register}
						error={errors.school?.district?.message}
					/>
				</div>
				<div>
					<InputText
						id="numero-escola"
						label="Número:"
						placeholder="Número da Escola"
						type="text"
						name="school.schoolNumber"
						register={register}
						error={errors.school?.schoolNumber?.message}
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
						error={errors.school?.complement?.message}
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
						error={errors.school?.phone?.message}
					/>
				</div>
			</>
		</FormSection>
	);
}
