import React from "react";
import Transition from "react-transition-group/Transition";

import "./Modal.css";

const animationTiming = {
    enter: 500,
    exit: 1000
};

const modal = props => {
  return (
    /* Use Transition HOC in order to see closing animations.
      For detailed information, see Transition documentation.
      Will unmount and unmount itself from the DOM using the "in" flag.
    */
    <Transition 
        mountOnEnter 
        unmountOnExit 
        in={props.show /* triggers setup Modal or close Modal */} 
        timeout={animationTiming /*can be a number instead of object */}>
      {state => {
        /* classes to apply to modal at different stages of component.
          state of Transition HOC is used to animate.
        */
        const cssClasses = [
          "Modal",
          state === "entering"
            ? "ModalOpen"
            : state === "exiting" ? "ModalClosed" : null
        ];
        return ( /* Classes applied for CSS animations */
          <div className={cssClasses.join(" ")}>
            <h1>A Modal</h1>
            <button className="Button" onClick={props.closed}>
              Dismiss
            </button>
          </div>
        );
      }}
    </Transition>
  );
};

export default modal;
