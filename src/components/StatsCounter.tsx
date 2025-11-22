import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';
import { incrementMetric, getMetrics } from '@/lib/supabase';
import { motion } from 'framer-motion';

interface StatsCounterProps {
  pageId: string;
  type: 'visit' | 'like';
  label?: string;
}

const StatsCounter = ({ pageId, type, label }: StatsCounterProps) => {
  const [count, setCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const init = async () => {
      if (type === 'visit') {
        await incrementMetric(pageId, 'visit');
      }
      const metrics = await getMetrics(pageId);
      setCount(type === 'visit' ? metrics.visits : metrics.likes);
    };
    init();
  }, [pageId, type]);

  const handleLike = async () => {
    if (type === 'like' && !isLiked) {
      setIsLiked(true);
      setIsAnimating(true);
      await incrementMetric(pageId, 'like');
      setCount((prev) => (prev < 9999 ? prev + 1 : 9999));
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  if (type === 'like') {
    return (
      <button
        onClick={handleLike}
        disabled={isLiked}
        className="flex items-center gap-2 group"
      >
        <motion.div
          animate={isAnimating ? { scale: [1, 1.3, 1] } : {}}
          transition={{ duration: 0.6 }}
        >
          <Heart
            className={`transition-all ${
              isLiked
                ? 'fill-primary text-primary'
                : 'text-muted-foreground group-hover:text-primary'
            }`}
            size={20}
          />
        </motion.div>
        <span className="text-sm font-medium">{count >= 9999 ? '9999+' : count}</span>
      </button>
    );
  }

  return (
    <div className="flex items-center justify-center gap-2">
      <span className="text-2xl font-heading text-gradient">{count >= 9999 ? '9999+' : `${count}+`}</span>
      {label && <span className="text-sm text-muted-foreground">{label}</span>}
    </div>
  );
};

export default StatsCounter;