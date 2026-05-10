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
    <div className="flex w-full max-w-5xl flex-row overflow-hidden rounded-xl bg-neutral-900 shadow-md shadow-red-700 transition hover:shadow-lg lg:my-5">
      {/* Image */}
      <div className="flex w-1/2 items-center justify-center p-3 md:p-4">
        <img
          src={image}
          alt={title}
          className="h-40 w-full object-contain md:h-52 lg:h-60"
        />
      </div>

      {/* Content */}
      <div className="flex w-1/2 flex-col justify-center gap-2 p-3 md:gap-3 md:p-4">
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
