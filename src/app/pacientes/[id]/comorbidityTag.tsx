import { ReactNode } from "react";

interface Props{
  name: string
}

const ComorbidityTag = ({name}: Props) => {
  return (
    <div className="flex items-center max-w-fit rounded-full text-center bg-primary-500 py-2 px-5">
      <p className="font-semibold text-slate-50">{name}</p>
    </div>
  )
}

export { ComorbidityTag };