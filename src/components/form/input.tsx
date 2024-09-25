interface InputTextProps {
	id: string;
	label: string;
	placeholder: string;
	name: string;
	type: "text" | "password";
}

export function InputText(props: InputTextProps) {
	return (
		<>
			<label
				htmlFor={props.id}
				className="mb-1 w-full text-sm font-medium text-primary-950"
			>
				{props.label}
			</label>
			<input
				id={props.id}
				type={props.type}
				placeholder={props.placeholder}
				name={props.name}
				className="w-full rounded-xl border border-primary-500 bg-vidro p-2 text-primary-800 focus:outline focus:outline-primary-800"
			/>
		</>
	);
}
