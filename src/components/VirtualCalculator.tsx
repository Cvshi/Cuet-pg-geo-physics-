import React, { useState } from 'react';
import { X, Delete, RotateCcw } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const VirtualCalculator: React.FC<Props> = ({ isOpen, onClose }) => {
  const [display, setDisplay] = useState('0');
  const [memory, setMemory] = useState<number>(0);
  const [hasCalculated, setHasCalculated] = useState(false);

  if (!isOpen) return null;

  const handleDigit = (digit: string) => {
    if (display === '0' || hasCalculated) {
      setDisplay(digit);
      setHasCalculated(false);
    } else {
      setDisplay(display + digit);
    }
  };

  const handleOperator = (op: string) => {
    setHasCalculated(false);
    const lastChar = display.trim().slice(-1);
    if (['+', '-', '*', '/'].includes(lastChar)) {
      setDisplay(display.slice(0, -1) + op);
    } else {
      setDisplay(display + ' ' + op + ' ');
    }
  };

  const handleClear = () => {
    setDisplay('0');
  };

  const handleBackspace = () => {
    if (display.length <= 1) {
      setDisplay('0');
    } else {
      setDisplay(display.trim().slice(0, -1).trim());
    }
  };

  const handleEquals = () => {
    try {
      // Safe sanitized arithmetic evaluation
      const sanitized = display.replace(/×/g, '*').replace(/÷/g, '/');
      if (!/^[0-9+\-*/. ()]+$/.test(sanitized)) {
        setDisplay('Error');
        return;
      }
      // eslint-disable-next-line no-eval
      const result = Function(`'use strict'; return (${sanitized})`)();
      const formatted = Number.isFinite(result) 
        ? Math.round(result * 1000000) / 1000000 
        : 'Error';
      setDisplay(String(formatted));
      setHasCalculated(true);
    } catch {
      setDisplay('Error');
    }
  };

  const handleScientific = (type: string) => {
    try {
      const val = parseFloat(display);
      if (isNaN(val)) return;
      let res = 0;
      switch (type) {
        case 'sqrt':
          res = Math.sqrt(val);
          break;
        case 'sq':
          res = Math.pow(val, 2);
          break;
        case 'inv':
          res = 1 / val;
          break;
        case 'sin':
          res = Math.sin((val * Math.PI) / 180);
          break;
        case 'cos':
          res = Math.cos((val * Math.PI) / 180);
          break;
        case 'tan':
          res = Math.tan((val * Math.PI) / 180);
          break;
        case 'ln':
          res = Math.log(val);
          break;
        case 'log10':
          res = Math.log10(val);
          break;
        case 'exp':
          res = Math.exp(val);
          break;
        case 'pi':
          res = Math.PI;
          break;
      }
      setDisplay(String(Math.round(res * 1000000) / 1000000));
      setHasCalculated(true);
    } catch {
      setDisplay('Error');
    }
  };

  return (
    <div id="virtual-calculator-modal" className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
      <div className="w-full max-w-sm rounded-xl bg-slate-900 border border-slate-700 shadow-2xl overflow-hidden text-white animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-800 border-b border-slate-700">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
              NTA CBT Scientific Calc
            </span>
          </div>
          <button
            id="btn-close-calculator"
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-md hover:bg-slate-700 transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Display Screen */}
        <div className="p-4 bg-slate-950/90 border-b border-slate-800 text-right">
          <div className="text-xs text-slate-500 font-mono tracking-wider mb-1">
            DEG | MEM: {memory}
          </div>
          <div className="text-2xl font-mono font-bold text-emerald-300 overflow-x-auto whitespace-nowrap py-1">
            {display}
          </div>
        </div>

        {/* Keypad */}
        <div className="p-3 bg-slate-900 grid grid-cols-5 gap-1.5 text-xs font-medium">
          {/* Row 1 Scientific */}
          <button onClick={() => handleScientific('sin')} className="py-2 bg-slate-800 hover:bg-slate-700 rounded text-slate-200">sin</button>
          <button onClick={() => handleScientific('cos')} className="py-2 bg-slate-800 hover:bg-slate-700 rounded text-slate-200">cos</button>
          <button onClick={() => handleScientific('tan')} className="py-2 bg-slate-800 hover:bg-slate-700 rounded text-slate-200">tan</button>
          <button onClick={() => handleScientific('ln')} className="py-2 bg-slate-800 hover:bg-slate-700 rounded text-slate-200">ln</button>
          <button onClick={() => handleScientific('log10')} className="py-2 bg-slate-800 hover:bg-slate-700 rounded text-slate-200">log</button>

          {/* Row 2 Scientific */}
          <button onClick={() => handleScientific('sqrt')} className="py-2 bg-slate-800 hover:bg-slate-700 rounded text-slate-200">√x</button>
          <button onClick={() => handleScientific('sq')} className="py-2 bg-slate-800 hover:bg-slate-700 rounded text-slate-200">x²</button>
          <button onClick={() => handleScientific('inv')} className="py-2 bg-slate-800 hover:bg-slate-700 rounded text-slate-200">1/x</button>
          <button onClick={() => handleScientific('exp')} className="py-2 bg-slate-800 hover:bg-slate-700 rounded text-slate-200">eˣ</button>
          <button onClick={() => handleScientific('pi')} className="py-2 bg-slate-800 hover:bg-slate-700 rounded text-amber-300">π</button>

          {/* Row 3 Standard Operations */}
          <button onClick={handleClear} className="py-2.5 bg-rose-950/80 text-rose-300 hover:bg-rose-900 rounded font-semibold border border-rose-900/50">C</button>
          <button onClick={handleBackspace} className="py-2.5 bg-slate-800 hover:bg-slate-700 rounded text-slate-300 flex items-center justify-center">
            <Delete className="w-3.5 h-3.5" />
          </button>
          <button onClick={() => handleDigit('(')} className="py-2.5 bg-slate-800 hover:bg-slate-700 rounded text-slate-300">(</button>
          <button onClick={() => handleDigit(')')} className="py-2.5 bg-slate-800 hover:bg-slate-700 rounded text-slate-300">)</button>
          <button onClick={() => handleOperator('/')} className="py-2.5 bg-indigo-950 text-indigo-300 hover:bg-indigo-900 rounded font-bold border border-indigo-800/40">÷</button>

          {/* Row 4 Numbers 7 8 9 */}
          <button onClick={() => handleDigit('7')} className="py-2.5 bg-slate-800/80 hover:bg-slate-700 text-white rounded font-bold text-sm">7</button>
          <button onClick={() => handleDigit('8')} className="py-2.5 bg-slate-800/80 hover:bg-slate-700 text-white rounded font-bold text-sm">8</button>
          <button onClick={() => handleDigit('9')} className="py-2.5 bg-slate-800/80 hover:bg-slate-700 text-white rounded font-bold text-sm">9</button>
          <button onClick={() => handleOperator('*')} className="py-2.5 bg-indigo-950 text-indigo-300 hover:bg-indigo-900 rounded font-bold border border-indigo-800/40">×</button>
          <button onClick={() => setMemory(parseFloat(display) || 0)} className="py-2.5 bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 rounded">M+</button>

          {/* Row 5 Numbers 4 5 6 */}
          <button onClick={() => handleDigit('4')} className="py-2.5 bg-slate-800/80 hover:bg-slate-700 text-white rounded font-bold text-sm">4</button>
          <button onClick={() => handleDigit('5')} className="py-2.5 bg-slate-800/80 hover:bg-slate-700 text-white rounded font-bold text-sm">5</button>
          <button onClick={() => handleDigit('6')} className="py-2.5 bg-slate-800/80 hover:bg-slate-700 text-white rounded font-bold text-sm">6</button>
          <button onClick={() => handleOperator('-')} className="py-2.5 bg-indigo-950 text-indigo-300 hover:bg-indigo-900 rounded font-bold border border-indigo-800/40">-</button>
          <button onClick={() => setDisplay(String(memory))} className="py-2.5 bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 rounded">MR</button>

          {/* Row 6 Numbers 1 2 3 */}
          <button onClick={() => handleDigit('1')} className="py-2.5 bg-slate-800/80 hover:bg-slate-700 text-white rounded font-bold text-sm">1</button>
          <button onClick={() => handleDigit('2')} className="py-2.5 bg-slate-800/80 hover:bg-slate-700 text-white rounded font-bold text-sm">2</button>
          <button onClick={() => handleDigit('3')} className="py-2.5 bg-slate-800/80 hover:bg-slate-700 text-white rounded font-bold text-sm">3</button>
          <button onClick={() => handleOperator('+')} className="py-2.5 bg-indigo-950 text-indigo-300 hover:bg-indigo-900 rounded font-bold border border-indigo-800/40">+</button>
          <button onClick={() => setMemory(0)} className="py-2.5 bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 rounded">MC</button>

          {/* Row 7 0 . = */}
          <button onClick={() => handleDigit('0')} className="col-span-2 py-2.5 bg-slate-800/80 hover:bg-slate-700 text-white rounded font-bold text-sm">0</button>
          <button onClick={() => handleDigit('.')} className="py-2.5 bg-slate-800/80 hover:bg-slate-700 text-white rounded font-bold text-sm">.</button>
          <button onClick={handleEquals} className="col-span-2 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded font-bold text-base shadow-md">=</button>
        </div>
      </div>
    </div>
  );
};
