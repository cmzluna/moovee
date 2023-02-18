import React from "react";
import { useNavigate, useParams } from "react-router-dom";

type Props = {
  children: JSX.Element;
  type?: string;
  isOpen: boolean;
  setIsOpen: (arg0: boolean) => void;
};

const Drawer = ({
  children,
  type = "FavoriteList",
  isOpen,
  setIsOpen,
}: Props) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const movieId = id && parseInt(id);

  const goBack = () => {
    if (movieId) {
      navigate(-1);
      return;
    }

    setIsOpen(false);
  };

  return (
    <main
      className={
        "border-solid border-8 border-orange-500 translate-y-12 md:translate-y-16 lg:translate-y-0 fixed overflow-hidden z-10 bg-gray-400 bg-opacity-25 inset-0 transform ease-in-out h-full md:mx-4 lg:h-full lg:mt-4" +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 lg:translate-x-34  "
          : " transition-all delay-200 opacity-0 translate-y-0 -translate-x-full lg:translate-0  ")
      }
    >
      <section
        style={{
          background: "rgba(0, 0, 0, 0.75)",
        }}
        className={
          " border-solid border-4 border-green-500 bg-app-dark-blue rounded-lg absolute bg-white h-30 w-full   shadow-xl duration-500 ease-in-out transition-all transform lg:translate-x-20 lg:h-5/6" +
          (type === "MovieDetail"
            ? " sm:translate-y-12 md:mx-12 md:max-w-2xl h-3/4"
            : " lg:w-1/4") +
          (isOpen
            ? ""
            : "-translate-y-full -translate-x-full lg:-translate-x-0 lg:-translate-y-0")
        }
      >
        <article
          className={
            "border-solid border-2 border-red-200 relative p-6 flex flex-col justify-start  m-2 " +
            (type === "MovieDetail" ? " h-full" : " overflow-y-scroll")
          }
        >
          {children}
        </article>
      </section>

      <section
        className=" border-solid border-4 border-yellow-500 w-full h-full cursor-pointer "
        onClick={goBack}
      ></section>
    </main>
  );
};

export default Drawer;
