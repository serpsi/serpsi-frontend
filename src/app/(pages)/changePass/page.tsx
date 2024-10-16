import { Input } from "@/components/ui/input";
import { Square } from "../patients/[id]/Square";
import { InputText } from "@/components/form/input";

import { Button } from "@/components/form/button";
import Link from "next/link";
import { ChevronLeftIcon } from "@radix-ui/react-icons";

export default function ChangePass() {
  return (
    <main className="flex flex-col items-center justify-center bg-cover px-10 py-5">
     <div className="mb-2 flex w-full">
          <Link href={"/profile"} className="flex">
            <ChevronLeftIcon
              width={24}
              height={24}
              className="text-gray-500"
            />
            &nbsp;
            <span className="text-gray-900">Meu perfil</span>
          </Link>
        </div>
      <Square>
          <h1 className="font-semibold text-primary-700">
            Mude sua senha
          </h1>
          <label className="block text-gray-700">Senha Atual:</label>
          <InputText
            type="password"
            label="Insira sua Senha"
            id="password"
            placeholder="Senha"

          />
          <label className="block text-gray-700">Senha Nova:</label>
          <InputText
            type="password"
            label="Insira sua nova Senha"
            id="newPassword"
            placeholder="Nova senha"

          />
          <label className="block text-gray-700">Repetir senha nova:</label>
          <InputText
            type="password"
            label="confirme sua nova Senha"
            id="confirmNewPassword"
            placeholder="Confirme nova senha"

          />
          <Button
							text="Salvar"
							variant="default"
							className="pb-1 pt-1 text-xl mt-3"
							type="submit"
						/>
        </Square>
    </main>
  )
}
