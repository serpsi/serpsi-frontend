import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlusIcon, TrashIcon } from "@heroicons/react/outline";

export function DefineLine(){
  return (<>
    <div className="flex p-2 gap-2 justify-center items-center">
      <span> Seg. </span>
      <Input type="text" className="w-fit border-primary-400" placeholder="08:00"/>
      <span> para </span>
      <Input type="text" className="w-fit border-primary-400" placeholder="12:00"/>
      <Button variant="link" className="text-primary-400 "><PlusIcon width={24} height={24}/></Button>
      <Button variant="link" className="text-red-400"><TrashIcon width={24} height={24}/></Button>
    </div>
  </>);
}