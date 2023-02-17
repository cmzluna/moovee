import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import App from "../../App";

const ModalSwitch = () => {
  const location = useLocation();

  // This piece of state is set when one of the
  // gallery links is clicked. The `background` state
  // is the location that we were at when one of
  // the gallery links was clicked. If it's there,
  // use it as the location for the <Switch> so
  // we show the gallery in the background, behind
  // the modal.
  let background = location.state && location.state.background;

  return (
    // <div>
    //   <Routes location={background || location}>
    //     <Route path="/">
    //       <App />
    //     </Route>
    //     <Route path="/gallery" children={<Gallery />} />
    //     <Route path="/img/:id" children={<ImageView />} />
    //   </Routes>

    //   {/* Show the modal when a background page is set */}
    //   {background && <Route path="/img/:id" children={<Modal />} />}
    // </div>
    <div>hellous</div>
  );
};

export default ModalSwitch;
