import React from "react";
type Props = {
  children: JSX.Element;
  isOpen: boolean;
  setIsOpen: (arg0: boolean) => void;
};

const Drawer = ({ children, isOpen, setIsOpen }: Props) => {
  return (
    <main
      className={
        "border-solid border-8 border-orange-500 translate-y-12 md:translate-y-16  lg:translate-y-0 fixed overflow-hidden z-10 bg-gray-400 bg-opacity-25 inset-0 transform ease-in-out h-full md:mx-4 lg:h-full lg:mt-4" +
        (isOpen
          ? " transition-opacity opacity-100 duration-500   lg:translate-x-34  "
          : "  transition-all delay-200 opacity-0 translate-y-0 lg:translate-0  ")
      }
    >
      <section
        className={
          "border-solid border-4  border-green-500 bg-app-dark-blue rounded-lg   left-0 absolute bg-white h-30 lg:h-5/6 w-full lg:w-1/4 lg:translate-x-20 shadow-xl duration-500 ease-in-out transition-all transform " +
          (isOpen
            ? ""
            : "-translate-y-full lg:-translate-x-0 lg:-translate-y-0")
        }
      >
        <article className="border-solid  border-2  relative  p-6 flex flex-col   justify-start  overflow-y-scroll m-2  ">
          <header className="font-bold text-lg">Your favorites</header>
          {children}
        </article>
      </section>

      <section
        className=" border-solid border-2 border-yellow-500 w-full h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
};

export default Drawer;
