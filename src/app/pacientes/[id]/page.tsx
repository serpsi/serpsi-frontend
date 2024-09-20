import Image from "next/image";
import { Square, SquareHeader } from "./Sqaure";
import { Button } from "@/components/ui/button";
import { DocumentMagnifyingGlassIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { ComorbidityTag } from "./comorbidityTag";

export default async function MyPatient() {

  return (

    <main className="p-10 flex  items-center justify-center bg-cover">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Card do Perfil */}
        <Square className="flex flex-col items-center  justify-center text-center">
          <Image
            className="rounded-full w-24 h-24 mb-4"
            src=
            "http://res.cloudinary.com/djlmqetmd/image/upload/v1726842410/nlzeqgi3igz2nk33mmpa.jpg"
            width={100}
            height={100}
            alt="Profile"
          />
          <h2 className="text-xl font-semibold">Roberto Santos</h2>
          <div className="flex items-center gap-2">
            <a href="#" className="text-primary-700  text-sm mt-2 no-underline">
              Visualizar Documentos
            </a>
            <DocumentMagnifyingGlassIcon className="h-6 w-6 text-primary-700 underline text-sm mt-2 hover:cursor-pointer" />

          </div>
        </Square>

        {/* Informações do Paciente */}
        <Square>
          <SquareHeader titulo="Informações do paciente" />
          <h3 className="text-lg text-primary-600 mb-4">
            Informações do paciente:
          </h3>
          <p>Nascimento: 31/12/2000</p>
          <p>CPF: 000.000.000-00</p>
          <p>RG: 000000000</p>
          <p>Tel: (00) 00000 - 0000</p>
          <p>Comorbidades:</p>
          <div className="flex flex-col  flex-wrap mt-2 gap-2 md:flex-row">
            <ComorbidityTag>
              Anemia falciforme
            </ComorbidityTag>
            <ComorbidityTag>
              Asma
            </ComorbidityTag>
            <ComorbidityTag>
              Diabetes
            </ComorbidityTag>
          </div>
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
        <Square className="md:col-span-2">
          <SquareHeader titulo="Escola" />
          <h3 className="text-lg text-primary-600 mb-4">Escola:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
        <Square className="md:col-span-2" >
          <SquareHeader titulo="Endereço" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            <li className="mb-1  border-y-2 border-blue-500 p-1">
              <a href="#" className="flex justify-between text-gray-900">
                Sessão_Roberto.pdf
                <ArrowDownTrayIcon className="h-6 w-6" />
              </a>
            </li>
            <li className="mb-1 border-b-2 border-blue-500 p-1">
              <a href="#" className="flex justify-between text-gray-900">
                Sessão_Roberto.pdf
                <ArrowDownTrayIcon className="h-6 w-6" />
              </a>
            </li>

          </ul>
        </Square>

        {/* Histórico de Sessões */}
        <Square className="flex flex-col items-center justify-center">
          <SquareHeader titulo="Histórico de Sessões" />
          <Button
            className=" bg-primary-600 hover:bg-primary-700"
          >
            Ver Histórico de Sessões
          </Button>
        </Square>
      </div>
    </main>
  );
}