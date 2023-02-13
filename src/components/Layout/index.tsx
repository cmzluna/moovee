import React from "react";
import Navigator from "../Navigator";

type Props = {
  children: JSX.Element;
};
// bg-app-semi-dark-blue
export default function Layout({ children }: Props) {
  return (
    <div className=" lg:flex text-app-pure-white ">
      {/* Navigator */}
      <Navigator />

      {/* Main section with movies */}
      <main className="border-2 border-dashed border-white flex flex-col mx-0 py-3 px-3 md:px-4 md:py-4 lg:ml-24 lg:grow">
        {children}
      </main>
    </div>
  );
}
// py-6 px-4 md:m-6 md:px-0 md:pt-0 lg:ml-32 lg:min-w-[800px] lg:grow
