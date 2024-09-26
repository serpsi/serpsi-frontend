import classNames from "classnames";
import { Input } from "../ui/input";

interface InputTextProps {
	id: string;
	label: string;
	placeholder: string;
	type: string;
	variant?: "primary" | "secondary";
}

export function InputText({ variant = "primary", ...props }: InputTextProps) {
	const inputClassNames = classNames("w-full rounded-md  p-2 text-left", {
		"": variant === "primary",
		"border border-primary-500 bg-vidro text-primary-800":
			variant === "secondary"
	});

	return (
		<>
			<label
				htmlFor={props.id}
				className="mb-1 w-full text-sm font-medium text-primary-950"
			>
				{props.label}
			</label>
			<Input
				id={props.id}
				type={props.type}
				placeholder={props.placeholder}
				className={inputClassNames}
			/>
		</>
	);
}
