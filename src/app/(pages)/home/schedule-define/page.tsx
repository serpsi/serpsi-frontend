"use client";
import React from "react";
import { ScheduleDefiner } from "./scheduleDefiner";
import { FormProvider, useForm } from "react-hook-form";
import { dayTypes, ScheduleAgendas } from "./dayTypes";
import { Button } from "@/components/ui/button";

export default function ScheduleDefinePage() {
	const methods = useForm<ScheduleAgendas>({
		defaultValues: {
			meetValue: 120,
			duration: 50,
			agendas: [
				{
					key: 1,
					dayType: dayTypes.Monday,
				},
				{
					key: 2,
					dayType: dayTypes.Tuesday,
				},
				{
					key: 3,
					dayType: dayTypes.Wednesday,
				},
				{
					key: 4,
					dayType: dayTypes.Thursday,
				},
				{
					key: 5,
					dayType: dayTypes.Friday,
				}
			]
		}
	});
	return (
		<section className="w-fit text-black">
			<FormProvider {...methods}>
				<form
					onSubmit={methods.handleSubmit(
						() => console.log(methods.getValues()),
						(erro) => console.log(erro)
					)}
					onReset={() => console.log("reset")}
				>
					<ScheduleDefiner />
					<div className="mt-3 flex justify-around">
				<Button
					type="reset"
					variant="ghost"
					className="text-primary-600 hover:bg-primary-100/70 hover:text-primary-600"
				>
					Descartar
				</Button>
				<Button
					type="submit"
					className="bg-primary-600 hover:bg-primary-800"
				>
					Salvar horários
				</Button>
			</div>
				</form>
			</FormProvider>
		</section>
	);
}
