

interface CardProps {
  image: string;
  title: string;
  description: string;
}

export default function Card({
  image,
  title,
  description,
}: CardProps) {
  return (
    <div className="flex flex-col rounded-xl overflow-hidden shadow-md shadow-red-700 hover:shadow-lg transition">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="h-40 md:h-48 lg:h-56 w-full object-cover"
      />

      {/* Content */}
      <div className="flex flex-col gap-2 md:gap-3 p-3 md:p-4">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-headings text-[var(--text-primary)] text-center">{title}</h2>
        <p className="text-xs md:text-sm text-[var(--text-secondary)] text-center">{description}</p>

      </div>
    </div>
  );
}
