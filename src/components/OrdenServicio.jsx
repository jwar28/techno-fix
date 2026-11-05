import { useEffect, useId, useRef, useState } from 'react';
import {
  devices,
  formatCOP,
  whatsappLink,
  PHONE_TEL,
  PHONE_DISPLAY,
} from '../data/services';

const priceText = (d) => `${formatCOP(d.min)} – ${formatCOP(d.max)}`;

/** Re-mecanografía el texto cuando cambia: el gesto firma de la orden. */
function useTyped(text) {
  const [shown, setShown] = useState(text);
  const first = useRef(true);
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setShown(text);
      return;
    }
    let i = 0;
    setShown('');
    const id = setInterval(() => {
      i += 1;
      setShown(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, 22);
    return () => clearInterval(id);
  }, [text]);
  return shown;
}

export default function OrdenServicio({ initialDevice = 'celular', tilt = false }) {
  const uid = useId();
  const [deviceId, setDeviceId] = useState(initialDevice);
  const [problem, setProblem] = useState('');
  const [barrio, setBarrio] = useState('');
  const [orden, setOrden] = useState('');
  useEffect(() => {
    // Número de orden de referencia: día, mes y minuto en que se llenó.
    const d = new Date();
    const p2 = (n) => String(n).padStart(2, '0');
    setOrden(`${p2(d.getDate())}${p2(d.getMonth() + 1)}-${p2(d.getHours())}${p2(d.getMinutes())}`);
  }, []);
  const device = devices.find((d) => d.id === deviceId) ?? devices[0];
  const full = priceText(device);
  const typed = useTyped(full);
  const typing = typed.length < full.length;

  const message = [
    `Hola TecnoFix, quiero una orden de servicio a domicilio${orden ? ` (orden N.º ${orden})` : ''}.`,
    `Equipo: ${device.name}`,
    `Problema: ${problem.trim() || '(te cuento por aquí)'}`,
    barrio.trim() ? `Barrio: ${barrio.trim()}` : null,
    `Precio estimado en la web: ${full} COP`,
  ]
    .filter(Boolean)
    .join('\n');

  return (
    <form
      className={`paper perforated relative z-10 w-full max-w-[620px] ${
        tilt ? 'lg:-rotate-[1.2deg]' : ''
      }`}
      onSubmit={(e) => {
        e.preventDefault();
        window.open(whatsappLink(message), '_blank', 'noopener');
      }}
      aria-labelledby={`${uid}-title`}>
      <header className='flex items-end justify-between gap-4 border-b-2 border-ink px-5 pb-4 pr-[112px] pt-5 sm:px-8 sm:pt-6'>
        <div>
          <h2
            id={`${uid}-title`}
            className='text-[22px] font-black uppercase leading-none sm:text-[26px]'
            style={{ fontStretch: '75%' }}>
            Orden de servicio
          </h2>
          <p className='typed num mt-1.5 text-[16px] font-bold' aria-label={orden ? `Orden número ${orden}` : undefined}>
            N.º {orden || '····-····'}
          </p>
          <p className='mt-1 text-[14px] text-paper-dim'>
            TecnoFix · a domicilio en Barranquilla
          </p>
        </div>
      </header>

      <div
        className='stamp pointer-events-none absolute -top-10 right-2 h-[100px] w-[100px] rotate-[14deg] bg-paper/70 text-[19px] sm:-right-10 sm:h-[128px] sm:w-[128px] sm:text-[22px]'
        aria-hidden='true'>
        Diagnós&shy;tico
        <br />
        gratis
      </div>

      <fieldset className='border-b border-paper-rule px-5 py-4 sm:px-8'>
        <legend className='field-label float-left mb-3 w-full'>1 · Equipo</legend>
        <div className='clear-both grid grid-cols-2 gap-2'>
          {devices.map((d) => {
            const on = d.id === deviceId;
            return (
              <label
                key={d.id}
                className={`flex min-h-[48px] cursor-pointer items-center gap-2.5 border-[1.5px] border-ink px-3 text-[16px] font-bold transition-colors duration-150 has-[:focus-visible]:outline has-[:focus-visible]:outline-[3px] has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-carbon ${
                  on ? 'bg-ink text-paper' : 'hover:bg-[#E9EAE2]'
                }`}>
                <input
                  type='radio'
                  name={`${uid}-equipo`}
                  value={d.id}
                  checked={on}
                  onChange={() => setDeviceId(d.id)}
                  className='sr-only'
                />
                <span
                  aria-hidden='true'
                  className={`grid h-4 w-4 shrink-0 place-items-center border-[1.5px] ${
                    on ? 'border-paper' : 'border-ink'
                  }`}>
                  {on && <span className='h-2 w-2 bg-paper' />}
                </span>
                {d.name}
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className='border-b border-paper-rule px-5 py-4 sm:px-8'>
        <label htmlFor={`${uid}-problema`} className='field-label mb-2'>
          2 · ¿Qué le pasa?
        </label>
        <textarea
          id={`${uid}-problema`}
          rows={2}
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
          placeholder='Ej.: la batería no me dura ni medio día'
          className='typed block w-full resize-none border-0 border-b-[1.5px] border-dotted border-[#8d928d] bg-transparent px-0 py-1 text-[19px] leading-snug placeholder:text-[#6f7570] focus:border-carbon focus:ring-0'
        />
        <label htmlFor={`${uid}-barrio`} className='field-label mb-1 mt-4'>
          Barrio <span className='normal-case tracking-normal'>(opcional)</span>
        </label>
        <input
          id={`${uid}-barrio`}
          value={barrio}
          onChange={(e) => setBarrio(e.target.value)}
          autoComplete='address-level3'
          placeholder='Ej.: El Prado'
          className='typed block w-full border-0 border-b-[1.5px] border-dotted border-[#8d928d] bg-transparent px-0 py-1 text-[19px] placeholder:text-[#6f7570] focus:border-carbon focus:ring-0'
        />
      </div>

      <div className='px-5 py-4 sm:px-8'>
        <p className='field-label mb-1'>3 · Precio estimado (COP)</p>
        <div className='flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2'>
          <p
            className='num min-h-[1em] text-[clamp(40px,9vw,54px)] font-black leading-none text-carbon'
            style={{ fontStretch: '75%' }}
            aria-hidden='true'>
            {typed}
            <span
              className={`ml-0.5 inline-block h-[0.8em] w-[3px] translate-y-[0.08em] bg-carbon ${
                typing ? '' : 'opacity-0'
              }`}
            />
          </p>
          <p className='text-[15px] font-semibold text-paper-dim'>domicilio incluido</p>
        </div>
        <p className='sr-only' aria-live='polite'>
          Precio estimado para {device.name}: {full} pesos, domicilio incluido.
        </p>
        <p className='mt-2 text-[15px] text-paper-dim'>{device.includes}</p>
      </div>

      <div className='flex flex-col gap-2 px-5 sm:flex-row sm:px-8'>
        <button type='submit' className='btn-ink flex-1'>
          Enviar orden por WhatsApp
          <svg width='18' height='14' viewBox='0 0 18 14' aria-hidden='true'>
            <path d='M1 7h15M10 1l6 6-6 6' fill='none' stroke='currentColor' strokeWidth='2' />
          </svg>
        </button>
        <a href={`tel:${PHONE_TEL}`} className='btn-line no-underline'>
          Llamar
        </a>
      </div>
      <p className='px-5 pb-5 pt-3 text-[14px] text-paper-dim sm:px-8 sm:pb-6'>
        El precio final se confirma después del diagnóstico gratis. Teléfono{' '}
        <span className='num whitespace-nowrap'>{PHONE_DISPLAY}</span>.
      </p>
    </form>
  );
}
