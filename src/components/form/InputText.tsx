import classNames from "classnames";
import { Input } from "../ui/input";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface InputTextProps {
	id: string;
	label: string;
	placeholder: string;
	type: string;
	name?: string;
	register?: UseFormRegister<FieldValues>;
	variant?: "primary" | "secondary";
}

export function InputText({
	id,
	label,
	placeholder,
	type,
	name,
	register,
	variant = "primary"
}: InputTextProps) {
	const inputClassNames = classNames("w-full rounded-md  p-2 text-left", {
		"border border-primary-400 focus-visible:ring-primary-500":
			variant === "primary",
		"border border-primary-500 bg-vidro text-primary-800":
			variant === "secondary"
	});

	return (
		<>
			<label
				htmlFor={id}
				className="mb-1 w-full text-sm font-normal text-primary-950"
			>
				{label}
			</label>
			<Input
				id={id}
				type={type}
				placeholder={placeholder}
				className={inputClassNames}
				{...(register ? register(name ? name : id) : {})}
			/>
		</>
	);
}
