import Image from "next/image";
import { Square, SquareHeader } from "./Square";
import { Button } from "@/components/ui/button";
import { DocumentSearchIcon } from "@heroicons/react/outline";
import { ComorbidityTag } from "./comorbidityTag";
import { ListComponent } from "./listComponent";

export default async function MyPatient() {
	const followUpsData = [
		{
			titulo: "Sessão_Roberto1.pdf",
			id: "c23576d0-f33b-4437-980b-e2e7baa63702"
		},
		{
			titulo: "Sessão_Roberto2.pdf",
			id: "cc8d6c68-b152-4a30-86be-aec6342156d8"
		},
		{
			titulo: "Sessão_Roberto3.pdf",
			id: "f642735d-6944-4568-b167-6e809fd3d420"
		}
	];

	const comorbidityData = [
		{
			name: "Anemia Falciforme",
			id: "0b81e3f2-cefb-4916-9a73-4423068f2d5b"
		},
		{
			name: "Asma",
			id: "aa3c4acb-ca74-4f9c-90b8-e833a7eed82d"
		},
		{
			name: "Diabetes",
			id: "7011df37-f8fd-437e-ad4f-99218072ab2e"
		}
	];

	return (
		<main className="flex items-center justify-center bg-cover p-10">
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
				{/* Card do Perfil */}
				<Square variant="WithImage">
					<Image
						className="mb-4 h-24 w-24 rounded-full"
						src="http://res.cloudinary.com/djlmqetmd/image/upload/v1726842410/nlzeqgi3igz2nk33mmpa.jpg"
						width={100}
						height={100}
						alt="Profile"
					/>
					<h2 className="text-xl font-semibold">Roberto Santos</h2>
					<div className="flex items-center gap-2">
						<a
							href="#"
							className="mt-2 text-sm text-primary-700 no-underline"
						>
							Visualizar Documentos
						</a>
						<DocumentSearchIcon className="mt-2 h-6 w-6 text-sm text-primary-700 underline hover:cursor-pointer" />
					</div>
				</Square>

				{/* Informações do Paciente */}
				<Square>
					<SquareHeader titulo="Informações do paciente" />
					<p>Nascimento: 31/12/2000</p>
					<p>CPF: 000.000.000-00</p>
					<p>RG: 000000000</p>
					<p>Tel: (00) 00000 - 0000</p>
					{comorbidityData.length > 0 && (
						<>
							<p>Comorbidades:</p>
							<ul className="mt-2 flex flex-col flex-wrap gap-2 md:flex-row">
								{comorbidityData.map((comorbidity) => (
									<ComorbidityTag
										name={comorbidity.name}
										key={comorbidity.id}
									/>
								))}
							</ul>
						</>
					)}
				</Square>

				{/* Informações dos Responsáveis */}
				<Square>
					<SquareHeader titulo="Informações do responsável 1" />
					<p>Nome: Roberta Mãe</p>
					<p>CPF: 000.000.000-00</p>
					<p>RG: 000000000</p>
					<p>Tel: (00) 00000 - 0000</p>
				</Square>

				<Square>
					<SquareHeader titulo="Informações do responsável 2" />
					<p>Nome: Roberto Pai</p>
					<p>CPF: 000.000.000-00</p>
					<p>RG: 000000000</p>
					<p>Tel: (00) 00000 - 0000</p>
				</Square>

				{/* Escola */}
				<Square variant="DoubleColumn">
					<SquareHeader titulo="Escola" />
					<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
						<div className="flex-col space-y-3">
							<p>Nome: Escola Escola</p>
							<p>Tel: (00) 00000-0000</p>
							<p>CEP: 99999-999</p>
							<p>Complemento: Depois do ovo</p>
						</div>
						<div className="flex-col space-y-3">
							<p>Bairro: Bairro dos Bobos</p>
							<p>Cidade: Cidade dos Bobos, Estado</p>
							<p>Rua: rua dos bobos, número</p>
							<p>CNPJ:000.000.000/0000-00</p>
						</div>
					</div>
				</Square>

				{/* Medicamento */}
				<Square>
					<SquareHeader titulo="Medicamento Nome" />
					<p>Dosagem: 5mg</p>
					<p>Frequência: 8:00 / 20:00</p>
					<p>Data de início: dd/mm/aaaa</p>
					<p>Observação: Apenas nos dias de verão</p>
				</Square>

				<Square>
					<SquareHeader titulo="Medicamento Nome 2" />
					<p>Dosagem: 5mg</p>
					<p>Frequência: 8:00 / 20:00</p>
					<p>Data de início: dd/mm/aaaa</p>
					<p>Observação: Apenas nos dias de verão</p>
				</Square>

				{/* Endereço */}
				<Square variant="DoubleColumn">
					<SquareHeader titulo="Endereço" />
					<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
						<div className="flex-col space-y-3">
							<p>CEP: 00000-000</p>
							<p>Rua: Rua dos Bobos, número 0</p>
							<p>número: 0</p>
							<p>Complemento: Depois do ovo</p>
						</div>
						<div className="flex-col space-y-3">
							<p>Bairro: Bairro dos babos</p>
							<p>Cidade: Cidade dos Bobos</p>
							<p>Estado: Bahia</p>
						</div>
					</div>
				</Square>

				{/* Arquivos */}
				<Square>
					<SquareHeader titulo="Arquivos de acompanhamentos anteriores" />
					<ul>
						{followUpsData.length > 0 ? (
							followUpsData.map((followUp, index) => (
								<ListComponent
									content={followUp.titulo}
									id={followUp.id}
									key={followUp.id}
									variant={
										index === 0 ? "IsFirst" : "NotFirst"
									}
								/>
							))
						) : (
							<p className="text-center">
								Nenhum Acompanhamento anterior
							</p>
						)}
					</ul>
				</Square>

				{/* Histórico de Sessões */}
				<Square variant="WithButton">
					<SquareHeader titulo="Histórico de Sessões" />
					<Button className="bg-primary-600 hover:bg-primary-700">
						Ver Histórico de Sessões
					</Button>
				</Square>
			</div>
		</main>
	);
}
