import Image from "next/image";

interface EmptyStateProps {
  title: string;
  description: string;
  image?: string;
  children?: React.ReactNode;
}

export const EmptyState = ({ title, description, image = "/empty.svg", children }: EmptyStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image src={image} alt="Empty" width={240} height={240} />
      <div className="flex flex-col text-center gap-y-4 max-w-lg mx-auto">
        <h6 className="text-lg font-medium">{title}</h6>
        <p className="text-base text-muted-foreground">{description}</p>
      </div>
      <div className="flex flex-1 items-center justify-center pt-4">
        {children}
      </div>
    </div>
  );
};
