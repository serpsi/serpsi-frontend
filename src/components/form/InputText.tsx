"use client";
import classNames from "classnames";
import { Input } from "../ui/input";
import { UseFormRegister } from "react-hook-form";
import InputMask from "react-input-mask-next";

interface InputTextProps {
	id: string;
	label: string;
	placeholder: string;
	type: string;
	name?: string;
	register?: UseFormRegister<any>;
	variant?: "primary" | "secondary";
	mask?: string;
	error?: string;
	accept?: string;
}

export function InputText({
	id,
	label,
	placeholder,
	type,
	name,
	register,
	variant = "primary",
	mask,
	error,
	...rest
}: InputTextProps) {
	const inputClassNames = classNames("w-full rounded-md  p-2 text-left", {
		"border placeholder:text-gray-500 ": variant === "primary",
		"border border-primary-500 bg-vidro text-primary-800":
			variant === "secondary",
		"border-red-500 focus-visible:ring-red-600 outline-red-600": error,
		"border-primary-400 focus-visible:ring-primary-500 outline-primary-500":
			!error
	});

	return (
		<>
			<label
				htmlFor={id}
				className="mb-1 w-full text-sm font-normal text-primary-950"
			>
				{label}
			</label>
			{mask ? (
				<InputMask
					id={id}
					type={type}
					mask={mask}
					placeholder={placeholder}
					className={inputClassNames}
					{...(register ? register(name ? name : id) : {})}
				/>
			) : (
				<Input
					id={id}
					type={type}
					placeholder={placeholder}
					className={inputClassNames}
					{...(register ? register(name ? name : id) : {})}
					{...(type === "file" && { multiple: true })}
					{...(type === "file" &&
						rest.accept && { accept: rest.accept })}
				/>
			)}
			{error !== undefined && (
				<span className="text-sm text-red-400">{error}</span>
			)}
		</>
	);
}
