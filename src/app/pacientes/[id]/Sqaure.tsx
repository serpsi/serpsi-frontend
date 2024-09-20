import { ReactNode } from "react";

interface Props{
  children: ReactNode;
  className?: string;
}

const Square = ({children, className}: Props) => {
  return (
    <div className={`border p-6 rounded-lg border-primary-500 ${className} text-gray-900`}>
      {children}
    </div>
  )
}

export {Square};