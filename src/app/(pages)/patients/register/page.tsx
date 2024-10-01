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

export default function RegisterNewPatientPage() {
	const [progress, setProgress] = useState<number>(1);

	// {
	// 	"paymentPlan": "TRIMESTRAL",
	// 	"person": {
	// 	  "name": "Meu nome de agora teste FILE",
	// 	  "rg": "98.749.153-5",
	// 	  "birthdate": "1990-08-25",
	// 	  "phone": {
	// 		"ddi": "+55",
	// 		"ddd": "71",
	// 		"number": "998085317"
	// 	  },
	// 	  "cpf": {
	// 		"cpf": "473.873.929-75"
	// 	  },
	// 	  "address": {
	// 		"state": "SP",
	// 		"zipCode": "41796616",
	// 		"street": "teste de street de refatoração no update",
	// 		"district": "district de teste de refatoração no update",
	// 		"city": "São Paulo",
	// 		"homeNumber": 278,
	// 		"complement": "complemento de refatoração no update"
	// 	  }
	// 	},
	// "parents": [
	//   {
	// 	"name": "Meu nome Pai File",
	// 	"rg": "12.884.728-1",
	// 	"birthdate": "1990-08-25",
	// 	"phone": {
	// 	  "ddi": "+55",
	// 	  "ddd": "71",
	// 	  "number": "998085317"
	// 	},
	// 	"cpf": {
	// 	  "cpf": "423.913.129-09"
	// 	}
	//   }
	// ],
	// 	"school": {
	// 	  "name": "ativa idade",
	// 	  "CNPJ": "00.000.000/0001-00",
	// 	  "address": {
	// 		"state": "BA",
	// 		"zipCode": "4499815760",
	// 		"street": "rua dos bobos",
	// 		"district": "bairro bonito",
	// 		"city": "cidade que ficou faltando",
	// 		"homeNumber": 1131,
	// 		"complement": "complemento"
	// 	  },
	// 	  "phone": {
	// 		"ddi": "+55",
	// 		"ddd": "71",
	// 		"number": "998085317"
	// 	  }
	// 	},
	// 	"comorbidities": [
	// 	  {
	// 		"name": "autismo grau 1"
	// 	  }
	// 	],
	// 	"medicines": [
	// 	  {
	// 		"medicine": {
	// 		  "name": "Buscopan"
	// 		},
	// 		"dosage": 250,
	// 		"dosageUnity": "mg",
	// 		"frequency": 2,
	// 		"firstTimeOfTheDay": "2024-01-01T08:00:00.000Z",
	// 		"startDate": "2024-07-20T00:00:00.000Z",
	// 		"observation": "Tomar antes de comer"
	// 	  }
	// 	]
	//   }

	const createPatientFormSchema = z.object({
		// PatientPictureSection
		profilePicture: z.instanceof(FileList),

		//PatientInfoSection
		person: z.object({
			name: z.string(),
			rg: z.string(),
			birthdate: z.date(),
			phone: z.string(),
			cpf: z.string()
		}),

		//AddressInfoSection
		address: z.object({
			state: z.string(),
			zipCode: z.string(),
			street: z.string(),
			district: z.string(),
			city: z.string(),
			homeNumber: z.string(),
			complement: z.string()
		}),

		//ParentsInfoSection
		parents: z.array(
			z.object({
				name: z.string(),
				rg: z.string(),
				birthdate: z.coerce.date(),
				phone: z.string(),
				cpf: z.string()
			})
		),

		//SchoolInfoSection
		school: z.object({
			name: z.string(),
			cnpj: z.string(),
			phone: z.string(),
			state: z.string(),
			zipCode: z.string(),
			street: z.string(),
			district: z.string(),
			city: z.string(),
			schoolNumber: z.string(),
			complement: z.string()
		}),

		//ExtraInfoSection
		comorbidities: z.string(),
		previousDocuments: z.instanceof(FileList),
		paymentPlan: z.string(),
		checkMedicines: z.boolean(),
		medicines: z.array(
			z.object({
				name: z.string(),
				dosage: z.number(),
				dosageUnity: z.string(),
				frequency: z.number(),
				firstTimeOfTheDay: z.string(),
				startDate: z.date(),
				observation: z.string()
			})
		)
	});

	const maxProgress = 5;

	const methods = useForm({
		resolver: zodResolver(createPatientFormSchema),
		defaultValues: {
			parents: [
				{
					name: "",
					rg: "",
					birthdate: "",
					phone: "",
					cpf: ""
				}
			],
			medicines: [
				{
					name: "",
					dosage: "",
					dosageUnity: "",
					frequency: "",
					firstTimeOfTheDay: "",
					startDate: "",
					observation: ""
				}
			]
		}
	});

	const onSubmit = () => {
		// console.log("Imagem enviada:", data.image[0]);
		console.log("deu submit");
	};

	const advanceProgress = () => {
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
						onSubmit={methods.handleSubmit(onSubmit)}
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
