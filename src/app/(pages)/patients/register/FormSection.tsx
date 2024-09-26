import classNames from "classnames";
import { ReactNode } from "react";

interface FormSectionProp {
	children: ReactNode;
	title: string;
	currentStep: number;
	componentStep: number;
}

export const FormSection = ({
	children,
	title,
	currentStep,
	componentStep
}: FormSectionProp) => {
	const FormSectionClassName = classNames("w-full px-20", {
		hidden: currentStep != componentStep
	});

	return (
		<>
			<section className={FormSectionClassName}>
				<h2 className="mb-5 text-center text-primary-700">{title}</h2>
				<div className="grid grid-cols-1 gap-x-40 gap-y-4 md:grid-cols-2">
					{children}
				</div>
			</section>
		</>
	);
};
