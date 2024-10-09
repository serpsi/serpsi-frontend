import * as React from "react";

import { cn } from "@/lib/utils";
import InputMask, { BeforeMaskedStateChangeStates, InputState } from "react-input-mask";

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	mask?: any;
	beforeMaskedStateChange?(states: BeforeMaskedStateChangeStates): InputState;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, mask, beforeMaskedStateChange, ...props }, ref) => {
		return mask ? (
			<InputMask
				type={type}
				className={cn(
					"flex h-9 w-full rounded-md border border-input bg-transparent px-2 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-300 disabled:cursor-not-allowed disabled:opacity-50",
					className
				)}
				mask={mask}
				beforeMaskedStateChange={beforeMaskedStateChange}
        maskPlaceholder=""
				{...props}
			/>
		) : (
			<input
				type={type}
				className={cn(
					"flex h-9 w-full rounded-md border border-input bg-transparent px-2 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-300 disabled:cursor-not-allowed disabled:opacity-50",
					className
				)}
				ref={ref}
				{...props}
			/>
		);
	}
);
Input.displayName = "Input";

export { Input };
