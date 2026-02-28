import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  className?: string;
}

export const StarRating = ({ rating, className = "" }: StarRatingProps) => {
  return (
    <div className={`flex gap-1 ${className}`}>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < rating ? "text-gold fill-gold" : "text-charcoal/10"}
        />
      ))}
    </div>
  );
};
