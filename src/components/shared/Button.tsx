interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  onclick?: () => void;
}

export const Button = ({ children, onclick, className = "" }: ButtonProps) => {
  return (
    <button
      onClick={onclick}
      className={`px-6 py-3 rounded-full outline-none cursor-pointer relative overflow-hidden border border-transparent
                                        bg-gradient-to-r from-violet-600 to-violet-700 active:brightness-90 active:scale-95 ${className}`}
    >
      {children}
    </button>
  );
};
