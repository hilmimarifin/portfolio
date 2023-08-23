'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDialogStore } from '@ariakit/react';

export function useProjectModalDialog(defaultOpen = true) {
  const router = useRouter();
  const onDismiss = () => router.back();

  const dialog = useDialogStore({
    defaultOpen,
    setOpen(open) {
      if (!open) onDismiss();
    },
  });

  useEffect(() => {
    return () => {
      dialog.setOpen(false); // Unmount the dialog when the hook is unmounted
    };
  }, [dialog]);

  return dialog;
}