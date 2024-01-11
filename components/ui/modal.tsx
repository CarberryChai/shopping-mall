'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogHeader,
} from './dialog'

type ModalProps = {
  title: string
  description: string
  children: React.ReactNode
  isOpen: boolean
  onClose?: () => void
}

export default function Modal({
  title,
  description,
  children,
  isOpen,
  onClose,
}: ModalProps) {
  const onChange = (open: boolean) => {
    if (!open) {
      onClose?.()
    }
  }
  return (
    <Dialog open={isOpen} onOpenChange={onChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  )
}
