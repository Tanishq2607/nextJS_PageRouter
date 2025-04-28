import { NAVBAR } from "../../constants/message";

export const Navbar = () => {
  return (
    <>
      <div className="w-full flex justify-between items-center mb-12">
        <h1 className="text-3xl font-bold">{NAVBAR.title}</h1>
      </div>
    </>
  );
};
