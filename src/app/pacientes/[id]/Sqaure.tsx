import { ReactNode } from "react";
import classNames from 'classnames'
interface SquareProps {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "DoubleColumn" | "WithImage" | "WithButton"
}

interface SquareHeaderProps { 
  titulo: ReactNode;
}

const SquareHeader = ({titulo}: SquareHeaderProps) => (
   
    <div className="mb-4">
    { 
      typeof titulo === 'string' ? (
        <h3 className="text-lg text-primary-600">{titulo}</h3>
      ): (
        titulo
      )
    }
  </div>
)

const Square = ({ children, className, variant = "primary" }: SquareProps) => {
  const squareClasses = classNames(
    "border p-6 rounded-lg border-primary-500 text-gray-900", {
      '': variant === "primary",
      'flex flex-col items-center  justify-center text-center': variant === "WithImage",
      'md:col-span-2': variant === "DoubleColumn",
      'flex flex-col items-center justify-center': variant === "WithButton"
    }
  )
  return (
    
    <div className={squareClasses}>
      {children}
    </div>
  )
}

export { Square, SquareHeader };