declare module "react-scroll-trigger" {
  import * as React from "react";

  interface ScrollTriggerProps {
    onEnter?: () => void;
    onExit?: () => void;
    children: React.ReactNode;
  }

  class ScrollTrigger extends React.Component<ScrollTriggerProps> {}

  export default ScrollTrigger;
}
