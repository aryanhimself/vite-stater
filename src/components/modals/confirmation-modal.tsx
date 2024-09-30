"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "../ui/button";
import { useModal } from "@/store/modal-store";

const ConfirmationModal = () => {
  const { isOpen, onClose, type, data } = useModal();

  const isModalOpen = isOpen && type === "confirmationDialog";

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="">
            {data?.confirmationDialog?.title}
          </DialogTitle>
          <DialogDescription className=" ">
            {data?.confirmationDialog?.content}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className=" px-6 py-4 flex justify-end gap-2">
          <Button onClick={onClose} variant={"ghost"}>
            Cancel
          </Button>
          <Button
            onClick={data?.confirmationDialog?.onConfirm}
            variant={"default"}
          >
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmationModal;
