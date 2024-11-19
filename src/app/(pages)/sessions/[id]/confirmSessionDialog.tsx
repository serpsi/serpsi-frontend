import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

type ConfirmSessionDialogProps = {
  onConfirm: () => void;
  triggerButton: ReactNode;
};

export function ConfirmSessionDialog({
  onConfirm,
  triggerButton,
}: ConfirmSessionDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{triggerButton}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirmar Sessão</DialogTitle>
          <DialogDescription>
            Informe a forma de pagamento
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 flex justify-end space-x-2">
          <Button
            onClick={() => {
              onConfirm();
            }}
            className="bg-primary-600 text-white py-2 px-4 rounded hover:bg-primary-600/70"
          >
            Confirmar
          </Button>
          <DialogClose asChild>
            <Button variant="ghost">Cancelar</Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
