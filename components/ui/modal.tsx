import { ReactNode } from "react";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
};

export default function Modal({ open, onClose, children }: ModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-md rounded-lg bg-white p-6">
        {children}
        <button
          onClick={onClose}
          className="mt-4 text-sm text-muted hover:text-primary"
        >
          Close
        </button>
      </div>
    </div>
  );
}