"use client"
import { Input } from "@/components/ui/input";
import { Square } from "../patients/[id]/Square";
import { InputText } from "@/components/form/input";

import { Button } from "@/components/form/button";
import Link from "next/link";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { z, ZodRawShape } from "zod";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
const passwordSchema = z.object({
  password: z.string().min(1, 'senha é requerida'),
  newPassword: z.string()
    .min(8, 'A nova senha tem que ter pelo menos 8 caracteres')
    .regex(new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$'), {
      message:
        'A senha deve ter pelo menos 8 caracteres e conter uma letra maiúscula, uma letra minúscula e um número'
    }),
  confirmNewPassword: z.string()

}).refine((data) => data.newPassword === data.confirmNewPassword, {
  message: 'As senhas não coincidem',
  path: ['confirmNewPassword'],
});


type PasswordData = z.infer<typeof passwordSchema>;



export default function ChangePass() {


  const methods = useForm<PasswordData>({
    resolver: zodResolver(passwordSchema),
    mode: 'onChange'
  });
  const { register, handleSubmit, formState } = methods;
  const { errors } = formState;

  const onSubmit: SubmitHandler<PasswordData> = (data) => {

  };


  return (
    <FormProvider {...methods}>

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
        <div className="w-[50vw]">
          <Square>
            <h1 className="font-semibold text-primary-700">
              Mude sua senha
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label className="block text-gray-700">Senha Atual:</label>
              <input
                {...register('password')}
                type="password"
                className="w-full rounded-xl border border-primary-500 bg-vidro p-2 text-primary-800 focus:outline focus:outline-primary-800"
                id="password"
                placeholder="Senha"

              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password.message}</p>
              )}
              <label className="block text-gray-700">Senha Nova:</label>
              <input
                {...register('newPassword')}
                type="password"
                className="w-full rounded-xl border border-primary-500 bg-vidro p-2 text-primary-800 focus:outline focus:outline-primary-800"
                id="newPassword"
                placeholder="Nova senha"

              />
              {errors.newPassword && (
                <p className="text-red-500">{errors.newPassword.message}</p>
              )}

              <label className="block text-gray-700">Repetir senha nova:</label>
              <input
                {...register('confirmNewPassword')}
                type="password"
                className="w-full rounded-xl border border-primary-500 bg-vidro p-2 text-primary-800 focus:outline focus:outline-primary-800"
                id="confirmNewPassword"
                placeholder="Confirme nova senha"
              />
              {errors.confirmNewPassword && (
                <p className="text-red-500 text-sm text-wrap">{errors.confirmNewPassword.message}</p>
              )}
              <Button
                text="Salvar"
                variant="default"
                className="pb-1 pt-1 text-xl mt-3"
                type="submit"
              />
            </form>
          </Square>
        </div>
      </main>
    </FormProvider>
  )
}
