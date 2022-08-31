import Image from "next/image";
import React from "react";
import Navigation from "./navigation";
function Layout(props) {
  return (
    <div className="h-screen overflow-y-scroll scrollbar">
      <Navigation />
      <div className="fixed top-0 -z-10 h-screen w-full overflow-hidden">
      <Image
        alt="travel"
        src="/background.jpg"
        layout="fill"
        objectFit="cover"
        quality={50}
      />
      </div>
      <main className="h-screen mt-5">{props.children}</main>
      <footer className="w-full bg-blue-700">
        <div className="w-full h-16 flex items-center justify-center">
          <h1 className="text-white">
            Copyright &#169; 2020 AG Solutions. All Rights Reserved
          </h1>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
