import { Bar, Ball, Step } from "./barElements";

interface ProgressBarProps {
	steps: number;
	currentStep: number;
	className?: string;
}

export function ProgressBar({
	steps,
	currentStep,
	className
}: ProgressBarProps) {
	return (
		<section className={`flex ${className} justify-between items-center p-5 `}>
			{Array.from({
				length: steps
			}).map((it, index) =>
				index < currentStep ? (
					<Step variant="active" last={index === steps - 1} key={index} />
				) : (
					<Step variant="inactive" last={index === steps - 1} key={index} />
				)
			)}
		</section>
	);
}
