import { motion } from 'framer-motion';

interface Props {
  lines: string[];
}

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.05,
    },
  },
};

const line = {
  hidden: { opacity: 0, y: '70%' },
  show: {
    opacity: 1,
    y: '0%',
    transition: {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function HeroWords({ lines }: Props) {
  return (
    <motion.h1
      className="hero-words"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {lines.map((text, i) => (
        <span key={i} className="hero-line-wrap">
          <motion.span className="hero-line" variants={line}>
            {text}
          </motion.span>
        </span>
      ))}
      <style>{`
        .hero-words {
          display: flex;
          flex-direction: column;
          font-family: var(--font-serif);
          font-size: clamp(3.75rem, 8vw, 6.5rem);
          font-weight: 400;
          line-height: 1.0;
          letter-spacing: -0.02em;
          margin: 0.5rem 0 0;
          color: var(--color-text);
        }
        .hero-line-wrap {
          display: block;
          overflow: hidden;
          padding-bottom: 0.04em;
        }
        .hero-line {
          display: block;
          will-change: transform, opacity;
        }
        .hero-line-wrap:nth-child(2) .hero-line {
          font-style: italic;
          color: var(--color-accent);
        }
      `}</style>
    </motion.h1>
  );
}
