import { ProgressBar } from "@/components/progressBar/progress-bar";

export default async function CadastroPage() {
	return (
		<main className="flex h-full w-full items-center justify-center bg-white p-5 md:p-10">
			<section className="flex w-3/4 flex-col items-center gap-5">
				<h1>Cadastro de Pacientes</h1>
				<ProgressBar steps={5} currentStep={3} className="w-full" />
			</section>
		</main>
	);
}
