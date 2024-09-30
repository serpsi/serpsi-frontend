"use client";
import { ProgressBar } from "@/components/progressBar/progress-bar";
import { Button } from "@/components/ui/button";
import { PlusIcon, TrashIcon, UploadIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { ReactNode, useEffect, useState } from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { FormSection } from "./FormSection";
import { InputText } from "@/components/form/InputText";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from "@/components/ui/select";
import PatientInfoSection from "./PatientInfoSection";
import AddressInfoSection from "./AddressInfoSection";
import ParentsInfoSection from "./ParentsInfoSection";
import SchoolInfoSection from "./SchoolInfoSection";
import ExtraInfoSection from "./ExtraInfoSection";
import PatientPictureSection from "./PatientPictureSection";

type FormValues = {
	image: FileList;
	checkMedicamentos: boolean;
};

export default function CadastroPage() {
	const [progress, setProgress] = useState<number>(1);

	const maxProgress = 5;

	const methods = useForm<FormValues>();

	const onSubmit: SubmitHandler<FormValues> = (data) => {
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
