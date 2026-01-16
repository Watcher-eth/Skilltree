"use client";

import * as React from "react";
import { Undo2, Redo2, Trash2 } from "lucide-react";
import { motion } from "framer-motion";

type Props = {
  canUndo: boolean;
  canRedo: boolean;
  onUndo: () => void;
  onRedo: () => void;
  onDelete: (() => void) | null;
};

export function BottomBar({ canUndo, canRedo, onUndo, onRedo, onDelete }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed left-1/2 -translate-x-1/2 bottom-6 z-40 rounded-full bg-white/80 backdrop-blur border border-black/10 shadow-[0_10px_30px_rgba(0,0,0,0.06)] px-3 py-2 flex items-center gap-2"
    >
      <button
        className="h-10 w-10 rounded-full bg-black/[0.04] hover:bg-black/[0.06] disabled:opacity-40 flex items-center justify-center"
        onClick={onUndo}
        disabled={!canUndo}
        title="Undo"
      >
        <Undo2 className="h-5 w-5 text-black/60" />
      </button>

      <button
        className="h-10 w-10 rounded-full bg-black/[0.04] hover:bg-black/[0.06] disabled:opacity-40 flex items-center justify-center"
        onClick={onRedo}
        disabled={!canRedo}
        title="Redo"
      >
        <Redo2 className="h-5 w-5 text-black/60" />
      </button>

      {onDelete ? (
        <button
          className="ml-2 h-10 w-10 rounded-full bg-red-500/10 hover:bg-red-500/15 border border-red-500/10 flex items-center justify-center"
          onClick={onDelete}
          title="Delete"
        >
          <Trash2 className="h-5 w-5 text-red-600/80" />
        </button>
      ) : null}
    </motion.div>
  );
}