import { ProgressBar } from "@/components/progressBar/progress-bar";

export default async function CadastroPage() {
	return (
		<main className="flex h-screen w-screen items-center justify-center bg-primary-50 p-5 md:p-10 ">
            <section className="w-3/4 flex flex-col items-center gap-5">
                <h1>Cadastro de Pacientes</h1>
                <ProgressBar steps={5} currentStep={1} className="w-full"/>
            </section>
		</main>
	);
}