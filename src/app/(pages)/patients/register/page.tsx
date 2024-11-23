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

import { zodResolver } from "@hookform/resolvers/zod";
import { createPatient } from "@/services/patientsService";
import {
	CreatePatientForm,
	createPatientFormSchema,
	formatPatientData
} from "./schema";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function RegisterNewPatientPage() {
	const [progress, setProgress] = useState<number>(1);
	const router = useRouter();

	const maxProgress = 5;

	// const methods = useForm<CreatePatientForm>({
	// 	resolver: zodResolver(createPatientFormSchema),
	// 	defaultValues: {
	// 		parents: [
	// 			{
	// 				name: "",
	// 				rg: "",
	// 				phone: "",
	// 				cpf: ""
	// 			}
	// 		]
	// 	}
	// });

	const methods = useForm<CreatePatientForm>({
		resolver: zodResolver(createPatientFormSchema),
		defaultValues: {
			// PatientPictureSection
			profilePicture: undefined, // obrigatorio

			// PatientInfoSection
			person: {
				name: "Fulano de Tal",
				rg: "666666", // obrigatorio
				// birthdate: new Date(),
				phone: "(11) 91111-1123", // Edite para o número desejado
				cpf: "111.111.111-04" // Edite para um CPF válido
			},

			// AddressInfoSection
			address: {
				state: "SP",
				zipCode: "12345-678",
				street: "Rua Exemplo",
				district: "Bairro Exemplo",
				city: "Cidade Exemplo",
				homeNumber: "123",
				complement: "Apto 101"
			},

			// ParentsInfoSection
			parents: [
				{
					name: "Pai Genérico",
					rg: "22222234", // RG genérico
					// birthdate: new Date(),
					phone: "(22) 92222-2234", // Telefone genérico
					cpf: "222.222.222-34" // CPF genérico
				}
			],

			// SchoolInfoSection
			checkSchool: false
			// school: {
			// 	name: "Escola Exemplo",
			// 	cnpj: "12.345.678/0001-00",
			// 	phone: "(33) 97777-7777",
			// 	state: "SP",
			// 	zipCode: "12345-679",
			// 	street: "Rua Escola",
			// 	district: "Bairro Escola",
			// 	city: "Cidade Escola",
			// 	schoolNumber: "456",
			// 	complement: "Bloco A"
			// }
		}
	});

	const { clearErrors, watch } = methods;

	// Monitor changes in form fields and clear errors on changes
	watch((_, { name }) => {
		if (name) {
			clearErrors(name);
		}
	});

	const onSubmit = async (data: CreatePatientForm) => {
		try {
			const formattedData = formatPatientData(data);
			console.log(formattedData);

			toast.promise(createPatient(formattedData), {
				loading: "Carregando...",
				success: () => {
					router.push("/patients");
					return "Paciente cadastrado com sucesso! 😍";
				},
				error: (err) => {
					console.log(err);
					return "Houve um erro ao cadastrar o paciente.";
				}
			});

			// console.log("Paciente cadastrado com sucesso:", response);
			// toast.success("Paciente cadastrado com sucesso!");
		} catch (error) {
			toast.error("Houve um erro ao tentar cadastrar paciente.");
			console.error("Erro ao cadastrar paciente:", error);
		}
	};

	const onInvalidSubmit = (data: any) => {
		toast.error(
			"Cadastro inválido! Por favor, verifique os campos preenchidos e tente novamente."
		);
		console.log("Erros de validação:", methods.formState.errors);
		if (methods.formState.errors.profilePicture) {
			toast.error("Por favor, adicione a foto do paciente!");
		}
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
				if (methods.watch("checkSchool"))
					isValid = await methods.trigger(["school"]);
				break;

			default:
				break;
		}
		// Verifica se há erros após a validação
		if (!isValid) {
			console.log("Erros de validação:", methods.formState.errors);
			toast.warning("Preencha os dados obrigatórios corretamente!");
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
							{progress === maxProgress && (
								<Button
									type="submit"
									className="rounded-lg bg-primary-600 text-white hover:bg-primary-400"
								>
									Cadastrar Paciente
								</Button>
							)}

							{progress < maxProgress && (
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
