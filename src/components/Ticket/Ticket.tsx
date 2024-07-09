interface IProps {
  children: React.ReactNode;
  className?: string;
}
const Ticket = ({ children, className }: IProps) => {
  return (
    <div
      className={`flex items-center justify-center gap-x-4 rounded-full bg-white px-8 py-4 font-bold shadow-primary sm:mx-auto sm:self-start lg:mx-0 ${className}`}
    >
      {children}
    </div>
  );
};

export default Ticket;
