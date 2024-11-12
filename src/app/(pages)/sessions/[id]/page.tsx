import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { Square, SquareHeader } from "../../patients/[id]/Square";
import Link from "next/link";
import psiImage from '/public/img/avatar.svg';
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default async function SpecificSessions() {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-[max-content_1fr] gap-x-4 gap-4">

        {/* Sessão do paciente com a foto e botões */}
        <Square variant="WithImage" className="md:col-span-1">
          <div className="flex flex-col items-center">

            <SquareHeader titulo="Roberto Santos" />
            <Image
                    className="mb-4 h-24 w-24 rounded-full"
                    src={ psiImage}
                    alt="Profile"
                    width={100}
                    height={100}
                  />
            <div className="flex space-x-2">
              <Button className="bg-primary-600 text-white py-2 px-4 rounded">
                Confirmar Sessão
              </Button>
              <Button className="bg-primary-600 text-white py-2 px-4 rounded">
                Cancelar Sessão
              </Button>
            </div>
          </div>
        </Square>

        {/* Informações do paciente */}
        <Square className="md:col-span-2">
          <SquareHeader titulo="Informações do paciente:" />
          <div className="grid grid-cols-2 gap-2">
            <p>Nascimento: 31/12/2000</p>
            <p>Responsável: Roberta Mãe</p>
            <p>CPF: 000.000.000-00</p>
            <p>CPF Responsável: 000.000.000-00</p>
            <p>Tel: (00) 00000 - 0000</p>
            <p>Tel Responsável: (00) 00000 - 0000</p>
          </div>
        </Square>

        {/* Forma de pagamento e valor */}
        <Square className="md:col-span-1">
          <SquareHeader titulo="Forma de pagamento:" />
          <select className="border border-gray-300 rounded p-2 w-full">
            <option>Pendente</option>
            <option>Pago</option>
          </select>
          <input
            type="text"
            value="R$ 100,00"
            className="border border-gray-300 rounded p-2 w-full mt-4"
            disabled
          />
        </Square>



        {/* Relato da sessão */}
        <Square variant="ThreeRows" className="md:col-span-3">
          <SquareHeader titulo="Relato da sessão:" />
          <textarea
            className="border border-gray-300 rounded p-2 w-full h-[30vh] md:h-[40vh]"
            placeholder="Text"
          ></textarea>
          <div className="flex justify-end">
            <Button className="bg-primary-600 text-white py-2 px-4 rounded">
              Salvar
            </Button>
          </div>
        </Square>
        {/* Arquivos da sessão */}
        <Square className="md:col-span-1">
          <SquareHeader titulo="Arquivos desta sessão:" />
          <ul className="space-y-2">
            <li className="flex items-center justify-between">
              Sessão_Roberto.pdf <button className="text-primary-600">⬇️</button>
            </li>
            <li className="flex items-center justify-between">
              whatsapp.img-2202-07-0 <button className="text-primary-600">⬇️</button>
            </li>
          </ul>
          <button className="mt-4 bg-primary-600 text-white py-2 px-4 rounded w-full">
            Adicionar Arquivos
          </button>
        </Square>

        {/* Botão para ver histórico de sessões */}
        <Square className="md:col-span-1 flex items-center justify-center">
          <button className="bg-primary-600 text-white py-2 px-4 rounded w-full">
            Ver Histórico de Sessões
          </button>
        </Square>

      </div>
    </div>
  );
}