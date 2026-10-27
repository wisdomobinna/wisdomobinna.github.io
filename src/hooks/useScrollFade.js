import { useEffect } from 'react';

// Fades elements in as they approach the middle of the viewport and out as they
// leave it, after the paper list on bhadayun.com. `full` is the share of the
// half-viewport around the centre where an element is fully visible.
export default function useScrollFade(ref, selector, { full = 0.55, lift = 18 } = {}) {
  useEffect(() => {
    const root = ref.current;
    if (!root) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const items = Array.from(root.querySelectorAll(selector));
    let frame = 0;

    const update = () => {
      frame = 0;
      const half = window.innerHeight / 2;
      items.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const offset = rect.top + rect.height / 2 - half;
        const d = Math.min(Math.abs(offset) / half, 1);
        const o = Math.max(0, Math.min(1, (1 - d) / (1 - full)));
        el.style.opacity = o.toFixed(3);
        el.style.transform = `translateY(${(Math.sign(offset) * (1 - o) * lift).toFixed(1)}px)`;
      });
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      items.forEach((el) => {
        el.style.opacity = '';
        el.style.transform = '';
      });
    };
  }, [ref, selector, full, lift]);
}
