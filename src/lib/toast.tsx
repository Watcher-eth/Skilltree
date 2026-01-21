'use client';

import { toast as sonnerToast } from 'sonner';
import { CopyCheck } from 'lucide-react';

export function showCopiedToast(message = 'Command copied') {
  return sonnerToast.custom((id) => (
    <CopiedToast id={id} message={message} />
  ));
}

function CopiedToast({
  id,
  message,
}: {
  id: string | number;
  message: string;
}) {
  return (
    <div
      className="
        flex items-center gap-2
        rounded-full
        bg-white/80 text-black
        px-4 py-2
        border border-gray-200
        text-[13px] font-medium
        shadow-lg
        w-full
      "
    >
      <CopyCheck className="h-4 w-4 text-black/90" />
      <span>{message}</span>

      {/* optional auto-dismiss click */}
      <button
        className="sr-only"
        onClick={() => sonnerToast.dismiss(id)}
      />
    </div>
  );
}