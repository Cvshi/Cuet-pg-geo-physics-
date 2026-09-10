import React, { useRef, useState, useEffect } from 'react';
import { X, Eraser, Trash2, PenLine, FileText } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const RoughSheetModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [mode, setMode] = useState<'draw' | 'text'>('draw');
  const [textNotes, setTextNotes] = useState('');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [penColor, setPenColor] = useState('#1e293b');
  const [penSize, setPenSize] = useState(2);

  useEffect(() => {
    if (isOpen && mode === 'draw' && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
      }
    }
  }, [isOpen, mode]);

  if (!isOpen) return null;

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
    const y = 'touches' in e ? e.touches[0].clientY - rect.top : e.clientY - rect.top;

    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
    const y = 'touches' in e ? e.touches[0].clientY - rect.top : e.clientY - rect.top;

    ctx.strokeStyle = penColor;
    ctx.lineWidth = penSize;
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  return (
    <div id="rough-sheet-modal" className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
      <div className="w-full max-w-2xl h-[520px] flex flex-col rounded-xl bg-white border border-slate-300 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-100 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-slate-800 text-sm flex items-center gap-1.5">
              <PenLine className="w-4 h-4 text-indigo-600" />
              Rough Scratch Sheet
            </span>
            <div className="flex rounded-md bg-slate-200 p-0.5 text-xs font-medium">
              <button
                onClick={() => setMode('draw')}
                className={`px-2.5 py-1 rounded flex items-center gap-1 transition ${
                  mode === 'draw' ? 'bg-white text-slate-800 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <PenLine className="w-3.5 h-3.5" /> Draw / Scratch
              </button>
              <button
                onClick={() => setMode('text')}
                className={`px-2.5 py-1 rounded flex items-center gap-1 transition ${
                  mode === 'text' ? 'bg-white text-slate-800 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <FileText className="w-3.5 h-3.5" /> Text Notes
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {mode === 'draw' && (
              <>
                <div className="flex items-center gap-1 bg-slate-200/80 px-2 py-0.5 rounded text-xs">
                  <button
                    onClick={() => setPenColor('#1e293b')}
                    className={`w-4 h-4 rounded-full bg-slate-900 border ${penColor === '#1e293b' ? 'ring-2 ring-indigo-500' : ''}`}
                    title="Black pen"
                  />
                  <button
                    onClick={() => setPenColor('#2563eb')}
                    className={`w-4 h-4 rounded-full bg-blue-600 border ${penColor === '#2563eb' ? 'ring-2 ring-indigo-500' : ''}`}
                    title="Blue pen"
                  />
                  <button
                    onClick={() => setPenColor('#dc2626')}
                    className={`w-4 h-4 rounded-full bg-red-600 border ${penColor === '#dc2626' ? 'ring-2 ring-indigo-500' : ''}`}
                    title="Red pen"
                  />
                </div>
                <button
                  onClick={clearCanvas}
                  className="px-2.5 py-1 text-xs font-medium text-rose-600 bg-rose-50 hover:bg-rose-100 rounded border border-rose-200 flex items-center gap-1"
                >
                  <Trash2 className="w-3.5 h-3.5" /> Clear
                </button>
              </>
            )}
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-slate-700 p-1 rounded hover:bg-slate-200 transition"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 relative bg-amber-50/20 overflow-hidden">
          {mode === 'draw' ? (
            <canvas
              ref={canvasRef}
              width={700}
              height={450}
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={stopDrawing}
              onMouseLeave={stopDrawing}
              onTouchStart={startDrawing}
              onTouchMove={draw}
              onTouchEnd={stopDrawing}
              className="w-full h-full cursor-crosshair touch-none bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px]"
            />
          ) : (
            <textarea
              value={textNotes}
              onChange={(e) => setTextNotes(e.target.value)}
              placeholder="Write formulas, step calculations, or quick rough work here..."
              className="w-full h-full p-4 font-mono text-sm resize-none focus:outline-hidden text-slate-800 bg-transparent leading-relaxed"
            />
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2 bg-slate-100 border-t border-slate-200 text-xs text-slate-500 flex justify-between">
          <span>This rough work is local to your mock test session.</span>
          <button
            onClick={onClose}
            className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-white rounded text-xs font-medium"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
