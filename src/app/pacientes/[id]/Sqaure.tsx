import { ReactNode } from "react";

interface SquareProps {
  children: ReactNode;
  className?: string;
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

const Square = ({ children, className }: SquareProps) => {
  
  return (
    
    <div className={`border p-6 rounded-lg border-primary-500 ${className} text-gray-900`}>
      {children}
    </div>
  )
}

export { Square, SquareHeader };