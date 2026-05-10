import Button from "./Button";

interface GamemodeProps {
  image: string;
  title: string;
  description: string;
  to: string;
}

export default function GamemodeShowcase({
  image,
  title,
  description,
  to,
}: GamemodeProps) {
  return (
    <div className="flex flex-row rounded-xl w-auto md:w-180 lg:my-5 overflow-hidden bg-neutral-900 shadow-md shadow-red-700 hover:shadow-lg transition">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="h-30 md:h-48 lg:h-56 w-1/2 object-cover"
      />

      {/* Content */}
      <div className="flex flex-col w-1/2 gap-2 md:gap-3 p-3 md:p-4">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-headings text-[var(--text-primary)] text-center">
          {title}
        </h2>
        <p className="font-texts text-sm md:text-sm text-[var(--text-secondary)] text-center">
          {description}
        </p>
        <div className="flex lg:mt-8 justify-center">
          <Button
            variant="primary"
            className="w-full lg:scale-125"
            to={to || "/"}
          >
            More Info
          </Button>
        </div>
      </div>
    </div>
  );
}
