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
  hidden: { opacity: 0, y: '80%' },
  show: {
    opacity: 1,
    y: '0%',
    transition: {
      duration: 1.0,
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
          font-family: var(--font-display);
          font-size: clamp(3.5rem, 7.5vw, 6.25rem);
          font-weight: 800;
          line-height: 1.0;
          letter-spacing: -0.03em;
          margin: 0.5rem 0 0;
          color: var(--color-text);
        }
        .hero-line-wrap {
          display: block;
          overflow: hidden;
          padding-bottom: 0.06em;
        }
        .hero-line {
          display: block;
          will-change: transform, opacity;
        }
        .hero-line-wrap:nth-child(2) .hero-line {
          color: var(--color-accent);
        }
      `}</style>
    </motion.h1>
  );
}
