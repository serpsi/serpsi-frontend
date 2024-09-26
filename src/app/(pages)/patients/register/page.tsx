"use client";
import { ProgressBar } from "@/components/progressBar/progress-bar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlusIcon, TrashIcon, UploadIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { ReactNode, useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormSection } from "./FormSection";
import { InputText } from "@/components/form/InputText";

type FormValues = {
	image: FileList;
	checkMedicamentos: boolean;
};

export default function CadastroPage() {
	const [image, setImage] = useState<string | null>(null);
	const [progress, setProgress] = useState<number>(1);
	const [parentNumber, setParentNumber] = useState<number>(1);
	const [medicineNumber, setMedicineNumber] = useState<number>(1);

	const maxProgress = 5;

	const { register, handleSubmit, watch } = useForm<FormValues>();

	const onSubmit: SubmitHandler<FormValues> = (data) => {
		console.log("Imagem enviada:", data.image[0]);
	};

	const selectedImage = watch("image");

	useEffect(() => {
		if (selectedImage && selectedImage.length > 0) {
			const file = selectedImage[0];
			const reader = new FileReader();
			reader.onloadend = () => {
				setImage(reader.result as string);
			};
			reader.readAsDataURL(file);
		}
	}, [selectedImage]);

	const advanceProgress = () => {
		setProgress((prev) => prev + 1);
	};

	const regressProgress = () => {
		setProgress((prev) => prev - 1);
	};

	const addParent = () => {
		setParentNumber((prev) => prev + 1);
	};

	const removeParent = () => {
		setParentNumber((prev) => prev - 1);
	};

	const addMedicine = () => {
		setMedicineNumber((prev) => prev + 1);
	};

	const removeMedicine = () => {
		setMedicineNumber((prev) => prev - 1);
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
								className="text-left"
								onClick={addParent}
								type={"button"}
							>
								<PlusIcon width={18} height={18} />
								&nbsp; Adicionar Outro Responsável
							</Button>
						)}
						{parentNumber > 1 && i === parentNumber && (
							<Button
								className="text-left"
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
							className="text-left"
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

	const parentsList = generateParentsFormSection();
	const medicinesList = generateMedicinesFormSection();

	return (
		<main className="mt-3 flex h-full w-full items-center justify-center bg-white px-5 pb-12 md:px-10">
			<section className="flex w-3/4 flex-col items-center gap-5">
				<h1>Cadastrar Novo Paciente</h1>
				<form onSubmit={handleSubmit(onSubmit)} className="w-full">
					<div className="flex w-full flex-col items-center justify-center">
						<input
							type="file"
							id="foto-paciente"
							accept="image/jpeg, image/png"
							{...register("image")}
							className="hidden"
						/>
						<label
							htmlFor="foto-paciente"
							className="cursor-pointer"
						>
							{image ? (
								<>
									<Image
										src={image}
										alt="Foto Do Paciente"
										className="h-36 w-36 rounded-full object-cover"
										width={140}
										height={140}
									/>
								</>
							) : (
								<div className="flex h-36 w-36 items-center justify-center rounded-full bg-gray-300 p-5">
									<UploadIcon width={75} height={75} />
								</div>
							)}
						</label>
					</div>
					<ProgressBar
						steps={maxProgress}
						currentStep={progress}
						className="my-3 w-full"
					/>
					<FormSection
						currentStep={progress}
						componentStep={1}
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
					<FormSection
						currentStep={progress}
						componentStep={2}
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
					{parentsList.map((value, key) => (
						<div key={key}>{value}</div>
					))}
					<FormSection
						currentStep={progress}
						componentStep={4}
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
					<FormSection
						currentStep={progress}
						componentStep={5}
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
								<label htmlFor="plano-pagamento">
									Plano de Pagamento:
								</label>

								<select
									name="planoPagamento"
									id="plano-pagamento"
								>
									<option value="AVULSO">Avulso</option>
									<option value="MENSAL">Mensal</option>
									<option value="BIMESTRAL">Bimestral</option>
									<option value="TRIMESTRAL">
										Trimestral
									</option>
								</select>
							</div>
							<br />

							<div>
								<input
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
					<div className="mt-6 flex w-full flex-col-reverse items-center justify-around px-20 md:flex-row">
						{progress > 1 && (
							<Button
								onClick={regressProgress}
								className="w-24"
								type={"button"}
							>
								Voltar
							</Button>
						)}
						{progress === maxProgress ? (
							<Button
								type="submit"
								className="rounded-lg bg-green-500 text-white hover:bg-green-600"
							>
								Cadastrar Paciente
							</Button>
						) : (
							<Button
								onClick={advanceProgress}
								className="w-24"
								type={"button"}
							>
								Próximo
							</Button>
						)}
					</div>
				</form>
			</section>
		</main>
	);
}
