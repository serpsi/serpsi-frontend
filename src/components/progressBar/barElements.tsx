import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";

const ballVariants = cva("h-5 min-w-5 rounded-full", {
	variants: {
		variant: {
			inactive: "bg-gray-500 shadow",
			active: "bg-primary-500 shadow"
		}
	},
	defaultVariants: {
		variant: "inactive"
	}
});

const Ball = React.forwardRef<null, VariantProps<typeof ballVariants>>(
	({ variant }) => <div className={cn(ballVariants({ variant }))} />
);
Ball.displayName = "Ball";

const barVariants = cva("h-0.5 min-w-20 w-full mx-5", {
	variants: {
		variant: {
			inactive: "bg-gray-500 shadow",
			active: "bg-primary-500 shadow"
		}
	},
	defaultVariants: {
		variant: "inactive"
	}
});

const Bar = React.forwardRef<null, VariantProps<typeof barVariants>>(
	({ variant }) => <section className={cn(barVariants({ variant }))} />
);
Bar.displayName = "Bar";

interface stepProps {
	variant: "inactive" | "active";
	last?: boolean;
}

const Step = React.forwardRef<null, stepProps>(({ variant, last }) => (
	<>
		{last ? (
				<Ball variant={variant} />
		) : (
			<>
				<Ball variant={variant} />
				<Bar variant={variant} />
			</>
		)}
	</>
));
Step.displayName = "Step";

export { Ball, Bar, Step };
