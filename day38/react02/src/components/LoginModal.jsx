import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
export default function LoginModal({ openModal, onClose }) {
  return (
    <Dialog open={openModal} onOpenChange={onClose}>
      <DialogContent className="bg-amber-300 rounded-none">
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription className="text-black" asChild>
            <div>
              <p>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </p>
              <Button onClick={onClose}>Close</Button>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
