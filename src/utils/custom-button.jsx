import classNames from "./classNames";

const CustomButton = ({
  className,
  textWrap = false,
  textSize = "md",
  size = "md",
  height,
  width,
  icon,
  iconSize,
  text,
  children,
  onClick,
  iconClassName,
  ...props
}) => (
  <button
    className={classNames(
      size === "sm"
        ? "min-h-10 h-10 w-28 text-base"
        : size === "md"
        ? "min-h-10 h-10 w-32 text-base"
        : size === "lg"
        ? "min-h-10 h-10 w-36 text-base"
        : size === "xl"
        ? "min-h-10 h-10 w-40 text-base"
        : size === "long"
        ? "h-full w-full"
        : "",
      textSize === "xs"
        ? "text-xs"
        : textSize === "sm"
        ? "text-sm"
        : textSize === "md"
        ? "text-base"
        : textSize === "lg"
        ? "text-lg"
        : textSize === "xl"
        ? "text-xl"
        : textSize === "long"
        ? "text-xl"
        : "",
      height === "xs"
        ? "min-h-6 h-6"
        : height === "sm"
        ? "min-h-8 h-8"
        : height === "md"
        ? "min-h-10 h-10"
        : height === "lg"
        ? "min-h-12 h-12"
        : height === "xl"
        ? "min-h-14 h-14"
        : height === "long"
        ? "h-full"
        : "",
      width === "xs"
        ? "w-26"
        : width === "sm"
        ? "w-28"
        : width === "md"
        ? "w-32"
        : width === "lg"
        ? "w-40"
        : width === "xl"
        ? "w-52"
        : width === "long"
        ? "w-full"
        : "",
      !textWrap ? "whitespace-nowrap" : "",
      "font-sans overflow-hidden px-2",
      className
    )}
    onClick={onClick}
    {...props}
  >
    {/* {icon && (
			<CustomIcon
				name={icon}
				size="custom"
				className={classNames(
					iconSize === 'xs'
						? 'h-3'
						: iconSize === 'sm'
						? 'h-3.5'
						: iconSize === 'md'
						? 'h-4'
						: iconSize === 'lg'
						? 'h-4.5'
						: iconSize === 'xl'
						? 'h-5'
						: '',
					'inline align-middle mb-0.5',
					iconClassName,
				)}
			/>
		)} */}
    {children ? children : text}
  </button>
);

export default CustomButton;
