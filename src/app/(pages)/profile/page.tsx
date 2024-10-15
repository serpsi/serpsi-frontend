import Link from "next/link";
import { Square, SquareHeader } from "../patients/[id]/Square";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import psiImage from "/public/img/avatar.svg";
import { PencilAltIcon } from "@heroicons/react/outline";

export default function Profile() {
  return (
    <main className="flex flex-col items-center justify-center bg-cover px-10 py-5">
      <div className="mb-2 flex w-full">
        <Link href={"/patients"} className="flex">
          <ChevronLeftIcon
            width={24}
            height={24}
            className="text-gray-500"
          />
          &nbsp;
          <span className="text-gray-900">Iara de Lima Oliveira</span>
        </Link>
      </div>
    

      <div className="w-[60vw]">
      <div className="flex justify-end space-x-3 items-center cursor-pointer">
        <span className="text-primary-600"> editar perfil</span>
        <PencilAltIcon className="text-primary-400" width={24} height={24} />
      </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Card do Perfil */}
          <Square variant="WithImage">
            <Image
              className="mb-4 h-24 w-24 rounded-full"
              src={psiImage}
              width={100}
              height={100}
              alt="Profile"
            />
            <h2 className="text-xl text-gray-900">Iara de Lima Oliveira</h2>
          </Square>

          {/* Informações do Paciente */}
          <Square>
            <SquareHeader titulo="Informações do paciente" />
            <p>Nascimento: 31/12/2000</p>
            <p>CPF: 000.000.000-00</p>
            <p>RG: 000000000</p>
            <p>Tel: (00) 00000 - 0000</p>
            <p>CRP: 00/00000</p>
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

        </div>
      </div>
    </main>
  );
}
