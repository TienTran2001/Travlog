interface IProps {
  children: React.ReactNode;
  className?: string;
}
const Ticket = ({ children, className }: IProps) => {
  return (
    <div
      className={`flex items-center justify-center gap-x-[20px] rounded-full bg-white px-8 py-4 text-[23px] font-bold shadow-primary ${className}`}
    >
      {children}
    </div>
  );
};

export default Ticket;
