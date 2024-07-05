interface IProp {
  children: React.ReactNode;
  className?: string;
  variant?: "PRIMARY" | "OUTLINED" | "NONE";
  onClick?: () => void;
}

const variantClass = {
  PRIMARY: "bg-main text-gray-light",
  OUTLINED: "bg-white border text-black border-gray-light",
  NONE: "text-black",
};

const Button = ({
  children,
  className = "",
  variant = "PRIMARY",
  onClick = () => {},
}: IProp) => {
  return (
    <button
      className={`rounded-full px-8 py-4 font-bold ${variantClass[variant]} ${className} transition-all hover:opacity-95 hover:shadow-primary`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
