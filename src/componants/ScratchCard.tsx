import { useEffect, useRef, useState } from 'react';

import type { ScratchCardProps } from '../types';
import { useLanguage } from '../stateManagementHooks/LanguageContext';
import { Link } from 'react-router-dom';

export default function ScratchCard({
  width,
  height,
  revealPercent = 35,
  user = '',
  index = 0,
  max = 0,
  selectedTopic = { en: '', ar: '' },
  bikis,
}: ScratchCardProps) {
  const { language } = useLanguage();

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isDrawing = useRef(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;

    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = '#9ca3af';
    ctx.fillRect(0, 0, width, height);
  }, [width, height]);
  const scratch = (x: number, y: number) => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 22, 0, Math.PI * 2);
    ctx.fill();
  };

  const calculateProgress = () => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    const { data } = ctx.getImageData(0, 0, width, height);

    let transparent = 0;
    for (let i = 3; i < data.length; i += 4) {
      if (data[i] === 0) transparent++;
    }

    const percent = (transparent / (width * height)) * 100;
    if (percent >= revealPercent) setRevealed(true);
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (revealed) return;
    isDrawing.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    isDrawing.current = false;
    e.currentTarget.releasePointerCapture(e.pointerId);
    calculateProgress();
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawing.current || revealed) return;

    const rect = canvasRef.current!.getBoundingClientRect();
    scratch(e.clientX - rect.left, e.clientY - rect.top);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {user != 'Elbikis' && (
        <>
          <h2 className="font-bold mb-3">{language === 'ar' ? `${user} ادي الموبايل ل` : `Hand over the phone to ${user}`}</h2>
          <div style={{ width, height, position: 'relative', userSelect: 'none' }}>
            <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-center">
              {user === bikis
                ? `${language === 'ar' ? `انت البكس` : 'You are the biks'} `
                : `${language === 'ar' ? `${selectedTopic.ar}` : `${selectedTopic.en}`} `}
            </div>

            {!revealed && (
              <canvas
                ref={canvasRef}
                width={width}
                height={height}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerLeave={() => (isDrawing.current = false)}
                className="absolute inset-0 rounded-3xl cursor-pointer touch-none"
              />
            )}
            {revealed && index + 1 < max && (
              <div className="absolute bottom-0 flex -translate-y-1/2  transform justify-center items-center right-0 left-0">
                <a href={'#slide' + (index + 2)} className="btn">
                  {language === 'ar' ? 'التالي' : 'Next'}
                </a>
              </div>
            )}
            {revealed && index + 1 == max && (
              <div className="absolute bottom-0 flex -translate-y-1/2  transform justify-center items-center right-0 left-0">
                <Link to={'/FinalPage'} className="btn">
                  {language === 'ar' ? 'ورينا البكس مين' : `Let's see who is the bikis`}
                </Link>
              </div>
            )}
          </div>
        </>
      )}
      {user === 'Elbikis' && (
        <>
          <div style={{ width, height, position: 'relative', userSelect: 'none' }}>
            <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-center">
              {`${language === 'ar' ? `انت البكس يا ${bikis}` : `${bikis}, You are the bikis`} `}
            </div>
            {!revealed && (
              <canvas
                ref={canvasRef}
                width={width}
                height={height}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerLeave={() => (isDrawing.current = false)}
                className="absolute inset-0 rounded-3xl cursor-pointer touch-none"
              />
            )}
            {revealed && (
              <div className="absolute bottom-0 flex -translate-y-1/2  transform justify-center items-center right-0 left-0">
                <Link className="btn" to={'/'}>
                  {language === 'ar' ? 'دور جديد' : 'New Game'}
                </Link>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
