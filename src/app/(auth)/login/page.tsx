"use client";
import { Button } from "@/components/form/button";
import { InputText } from "@/components/form/input";
import { login } from "@/services/authService";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

interface IFormProps {
	email: string;
	password: string;
}

export default function LoginPage() {
	const { register, handleSubmit } = useForm<IFormProps>();
	const [errors, setErrors] = useState<Record<string, string>>({});
	const [loading, setLoading] = useState(false);
	const onSubmit: SubmitHandler<IFormProps> = async (data: any) => {
		const formData = new FormData();
		formData.set("email", data.email);
		formData.set("password", data.password);
		setLoading(true);
		toast.promise(login(formData), {
			loading: "Carregando...",
			success: (result) => {
				setLoading(false);
				return "Login efetuado com sucesso! 🙂";
			},
			error: (result) => {
				setErrors(result);
				setLoading(false);
				return "Erro ao efetuar Login: Email ou senha incorretos.";
			}
		});
	};

	return (
		<main
			className="flex h-screen w-screen items-center justify-center bg-cover p-5 md:p-10"
			style={{ backgroundImage: "url('/img/login-bg.jpg')" }}
		>
			<section className="flex h-full w-full flex-row items-center justify-around rounded-[30px] border border-primary-500 bg-gradiente-vidro p-9 md:w-4/5">
				<section className="hidden w-2/5 text-primary-950 lg:block">
					<h2 className="text-5xl">
						Gerencie o seu consultório de psicologia
					</h2>
					<p className="mb-4 mt-8 text-2xl">
						Horários, pacientes, documentos,
						<br /> tudo num só lugar.
					</p>
					<Button className="mt-2 p-3 text-sm" text="Saiba mais" />
				</section>
				<section className="w-full text-primary-950 lg:w-2/5">
					<h1 className="mb-8 text-center text-5xl font-medium text-primary-900">
						Login
					</h1>
					<form
						className="flex h-2/5 flex-col justify-around"
						onSubmit={handleSubmit(onSubmit)}
					>
						<InputText
							// name="email"
							label="Insira seu E-mail"
							type="text"
							id="email"
							placeholder="Email"
							{...register("email")}
							error={errors.email}
						/>
						<br />
						<InputText
							// name="password"
							type="password"
							label="Insira sua Senha"
							id="password"
							placeholder="Senha"
							{...register("password")}
							error={errors.password}
						/>
						<br />
						<Button
							text={loading ? "Carregando..." : "Entrar"}
							variant="second"
							disabled={loading}
							className="pb-1 pt-1 text-xl"
							type="submit"
						/>
					</form>
				</section>
			</section>
		</main>
	);
}
