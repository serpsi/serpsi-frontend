"use client";
import { ProgressBar } from "@/components/progressBar/progress-bar";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import PatientInfoSection from "./PatientInfoSection";
import AddressInfoSection from "./AddressInfoSection";
import ParentsInfoSection from "./ParentsInfoSection";
import SchoolInfoSection from "./SchoolInfoSection";
import ExtraInfoSection from "./ExtraInfoSection";
import PatientPictureSection from "./PatientPictureSection";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Validations Regex
const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
const cepRegex = /^\d{5}-\d{3}$/;
const phoneRegex = /^\(\d{2}\) \d{4,5}-\d{4}$/;
const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;

const fileListType =
	typeof window !== "undefined" && typeof FileList !== "undefined"
		? z.instanceof(FileList)
		: z.any();

const createPatientFormSchema = z
	.object({
		// PatientPictureSection
		profilePicture: fileListType.optional(),

		// PatientInfoSection
		person: z.object({
			name: z.string().min(1, "Nome é um campo obrigatório."),
			rg: z.string().min(1, "RG é um campo obrigatório."),
			birthdate: z
				.preprocess((val) => {
					return val === "" ? undefined : val;
				}, z.coerce.date().optional())
				.refine((val) => val !== undefined, {
					message: "Data de nascimento é obrigatória."
				}),
			phone: z
				.string()
				.regex(
					phoneRegex,
					"O telefone deve seguir o padrão (00) 00000-0000."
				),
			cpf: z
				.string()
				.regex(cpfRegex, "O CPF deve seguir o padrão 000.000.000-00.")
		}),

		// AddressInfoSection
		address: z.object({
			state: z
				.string()
				.min(2, "Estado é um campo obrigatório.")
				.max(2, "Estado deve ter exatamente 2 caracteres.")
				.transform((val) => val.toUpperCase()),
			zipCode: z
				.string()
				.regex(cepRegex, "O CEP deve seguir o padrão 00000-000."),
			street: z.string().min(1, "Rua é um campo obrigatório."),
			district: z.string().min(1, "Bairro é um campo obrigatório."),
			city: z.string().min(1, "Cidade é um campo obrigatório."),
			homeNumber: z
				.string()
				.min(1, "Número residencial é um campo obrigatório."),
			complement: z.string().optional()
		}),

		// ParentsInfoSection
		parents: z.array(
			z.object({
				name: z.string().min(1, "Nome é um campo obrigatório."),
				rg: z.string().min(1, "RG é um campo obrigatório."),
				birthdate: z
					.preprocess((val) => {
						return val === "" ? undefined : val;
					}, z.coerce.date().optional())
					.refine((val) => val !== undefined, {
						message: "Data de nascimento é obrigatória."
					}),
				phone: z
					.string()
					.regex(
						phoneRegex,
						"O telefone deve seguir o padrão (00) 00000-0000."
					),
				cpf: z
					.string()
					.regex(
						cpfRegex,
						"O CPF deve seguir o padrão 000.000.000-00."
					)
			})
		),

		// SchoolInfoSection
		school: z.object({
			name: z.string().min(1, "Nome é um campo obrigatório."),
			cnpj: z
				.string()
				.regex(
					cnpjRegex,
					"O CNPJ deve seguir o padrão 00.000.000/0000-00."
				),
			phone: z
				.string()
				.regex(
					phoneRegex,
					"O telefone deve seguir o padrão (00) 00000-0000."
				),
			state: z.string().min(2, "Estado é um campo obrigatório."),
			zipCode: z
				.string()
				.regex(cepRegex, "O CEP deve seguir o padrão 00000-000."),
			street: z.string().min(1, "Rua é um campo obrigatório."),
			district: z.string().min(1, "Bairro é um campo obrigatório."),
			city: z.string().min(1, "Cidade é um campo obrigatório."),
			schoolNumber: z
				.string()
				.min(1, "Número da escola é um campo obrigatório."),
			complement: z.string().optional()
		}),

		// ExtraInfoSection
		comorbidities: z.string().optional(),
		previousDocuments: fileListType.optional(),
		paymentPlan: z.string().min(1, "Plano de pagamento é obrigatório"),
		checkMedicines: z.boolean(),
		medicines: z
			.array(
				z.object({
					name: z
						.string()
						.min(1, "Nome do medicamento é obrigatório"),
					dosage: z.coerce
						.number()
						.positive("A dosagem deve ser maior que zero"),
					dosageUnity: z
						.string()
						.min(1, "Unidade de dosagem é obrigatória"),
					frequency: z.coerce
						.number()
						.positive("A frequência deve ser maior que zero"),
					firstTimeOfTheDay: z
						.string()
						.min(1, "Horário é obrigatório"),
					startDate: z
						.preprocess((val) => {
							return val === "" ? undefined : val;
						}, z.coerce.date().optional())
						.refine((val) => val !== undefined, {
							message: "Data é um campo obrigatório."
						}),
					observation: z.string().optional()
				})
			)
			.optional()
	})
	.refine(
		(data) =>
			!data.checkMedicines ||
			(data.medicines && data.medicines.length > 0),
		{
			message: "Preencha os campos de medicamento.",
			path: ["medicines"]
		}
	);

export type CreatePatientForm = z.infer<typeof createPatientFormSchema>;

export default function RegisterNewPatientPage() {
	const [progress, setProgress] = useState<number>(1);

	const maxProgress = 5;

	const methods = useForm<CreatePatientForm>({
		resolver: zodResolver(createPatientFormSchema),
		defaultValues: {
			profilePicture: undefined,
			person: {
				name: "",
				rg: "",
				// birthdate: new Date(),
				phone: "",
				cpf: ""
			},
			address: {
				state: "",
				zipCode: "",
				street: "",
				district: "",
				city: "",
				homeNumber: "",
				complement: ""
			},
			parents: [
				{
					name: "",
					rg: "",
					// birthdate: new Date(),
					phone: "",
					cpf: ""
				}
			],
			school: {
				name: "",
				cnpj: "",
				phone: "",
				state: "",
				zipCode: "",
				street: "",
				district: "",
				city: "",
				schoolNumber: "",
				complement: ""
			},
			comorbidities: "",
			previousDocuments: undefined,
			paymentPlan: "",
			checkMedicines: false
			// medicines: [
			// 	{
			// 		name: "",
			// 		dosage: 0,
			// 		dosageUnity: "",
			// 		frequency: 0,
			// 		firstTimeOfTheDay: "",
			// 		// startDate: new Date(),
			// 		observation: ""
			// 	}
			// ]
		}
	});

	const onSubmit = (data: any) => {
		console.log("CADASTROU PACIENTE!!");
		console.log("Erros de validação:", methods.formState.errors);
		console.log("Dados do formulário:", data);
		console.log("Estado atual do formulário:", methods.watch());
	};

	const onInvalidSubmit = (data: any) => {
		console.log("INVALIDOS!!");
		console.log("Erros de validação:", methods.formState.errors);
		console.log("Dados do formulário:", data);
		console.log("Estado atual do formulário:", methods.watch());
	};

	const advanceProgress = async () => {
		var isValid: boolean = true;
		switch (progress) {
			case 1:
				isValid = await methods.trigger(["person"]);
				break;
			case 2:
				isValid = await methods.trigger(["address"]);
				break;
			case 3:
				isValid = await methods.trigger(["parents"]);
				break;
			case 4:
				isValid = await methods.trigger(["school"]);
				break;

			default:
				break;
		}
		// Verifica se há erros após a validação
		if (!isValid) {
			console.log("Erros de validação:", methods.formState.errors);
			return;
		}

		setProgress((prev) => prev + 1);
	};

	const regressProgress = () => {
		setProgress((prev) => prev - 1);
	};

	return (
		<main className="mt-3 flex h-full w-full items-center justify-center bg-white px-5 pb-12 md:px-10">
			<section className="flex w-3/4 flex-col items-center gap-5">
				<h1>Cadastrar Novo Paciente</h1>
				<FormProvider {...methods}>
					<form
						onSubmit={methods.handleSubmit(
							onSubmit,
							onInvalidSubmit
						)}
						className="w-full"
					>
						<PatientPictureSection />
						<ProgressBar
							steps={maxProgress}
							currentStep={progress}
							className="my-3 w-full"
						/>
						<PatientInfoSection
							progress={progress}
							componentIndex={1}
						/>
						<AddressInfoSection
							progress={progress}
							componentIndex={2}
						/>
						<ParentsInfoSection
							progress={progress}
							componentIndex={3}
						/>

						<SchoolInfoSection
							progress={progress}
							componentIndex={4}
						/>
						<ExtraInfoSection
							progress={progress}
							componentIndex={5}
						/>

						<div className="mt-6 flex w-full flex-col-reverse items-center justify-around px-20 md:flex-row">
							{progress > 1 && (
								<Button
									onClick={regressProgress}
									className="mt-4 w-24 bg-primary-600 hover:bg-primary-400 md:mt-0"
									type={"button"}
								>
									Voltar
								</Button>
							)}
							{progress === maxProgress ? (
								<Button
									type="submit"
									className="rounded-lg bg-primary-600 text-white hover:bg-primary-400"
								>
									Cadastrar Paciente
								</Button>
							) : (
								<Button
									onClick={advanceProgress}
									className="w-24 bg-primary-600 hover:bg-primary-400"
									type={"button"}
								>
									Próximo
								</Button>
							)}
						</div>
					</form>
				</FormProvider>
			</section>
		</main>
	);
}
