import { ArrowDownTrayIcon } from "@heroicons/react/24/outline"
import classNames from "classnames";

interface ListComponentProps {
  content: string;
  id: string;
  variant?: "IsFirst" | "NotFirst"
}

const ListComponent = ({ content, id, variant }: ListComponentProps) => {
  const listComponentClass = classNames(
    ' mb-1 border-blue-500 p-1', {
    'border-y-2 ': variant === "IsFirst",
    'border-b-2': variant === 'NotFirst',
  }
  )
  return (
    <li className={listComponentClass}>
      <a href="#" className="flex justify-between text-gray-900">
        {content}
        <ArrowDownTrayIcon className="h-6 w-6" />
      </a>
    </li>
  )
}

export { ListComponent };
