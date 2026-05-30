import { motion } from 'framer-motion';

interface Props {
  lines: string[];
}

export default function HeroWords({ lines }: Props) {
  return (
    <h1 className="hero-words">
      {lines.map((line, i) => (
        <motion.span
          key={line}
          className="hero-line"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: i * 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {line}
        </motion.span>
      ))}
      <style>{`
        .hero-words {
          display: flex;
          flex-direction: column;
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 6vw, 4.25rem);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.03em;
          margin: 0;
        }
        .hero-line {
          display: block;
        }
        .hero-line:nth-child(2) {
          color: var(--color-accent);
        }
      `}</style>
    </h1>
  );
}
