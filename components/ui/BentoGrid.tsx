import { cn } from "@/utils/cn";
import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./MagicButton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none dark:bg-black dark:border-white/[0.2] bg-white border flex flex-col",
        className
      )}
      style={{
        // background: 'rgb(10, 10, 30)' , // Very dark navy base color
        background: 'linear-gradient(90deg, rgba(10, 10, 30, 1) 0%, rgba(0, 0, 60, 1) 50%, rgba(0, 40, 80, 1) 100%)' ,
      }}
    >
      <div className="relative flex-grow">
        {img && (
          <img
            src={img}
            alt={img}
            className={cn(imgClassName, 'object-cover w-full h-full p-15')}
          />
        )}
        {spareImg && (
          <img
            src={spareImg}
            alt={spareImg}
            className={cn(imgClassName, 'absolute inset-0 w-full h-full object-cover')}
          />
        )}
      </div>

      <div className={`relative z-20 p-4 ${titleClassName}`}>
        {header}
        {icon}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2">
          {title}
        </div>
        {description && (
          <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
            {description}
          </div>
        )}
      </div>

      {id === 6 && (
        <div className="z-50 flex items-center justify-center text-white font-bold p-10">
          <a href="mailto:rajani.jass@gmail.com">
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      )}
    </div>
  );
};
