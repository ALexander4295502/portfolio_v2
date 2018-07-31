import { injectGlobal } from "styled-components";

export function injectAnimationFrames() {
  injectGlobal`
    * {
      box-sizing: border-box;
    }
    *:before, *:after {
      box-sizing: inherit;
    }
    
    @-webkit-keyframes left {
      from {
        opacity: 0;
        -webkit-transform: translateX(1rem);
                transform: translateX(1rem);
      }
      to {
        opacity: 1;
        -webkit-transform: none;
                transform: none;
      }
    }
    
    @keyframes left {
      from {
        opacity: 0;
        -webkit-transform: translateX(1rem);
                transform: translateX(1rem);
      }
      to {
        opacity: 1;
        -webkit-transform: none;
                transform: none;
      }
    }
    @-webkit-keyframes down {
      from {
        opacity: 0;
        -webkit-transform: translateY(-1rem);
                transform: translateY(-1rem);
      }
      to {
        opacity: 1;
        -webkit-transform: none;
                transform: none;
      }
    }
    @keyframes down {
      from {
        opacity: 0;
        -webkit-transform: translateY(-1rem);
                transform: translateY(-1rem);
      }
      to {
        opacity: 1;
        -webkit-transform: none;
                transform: none;
      }
    }
    @-webkit-keyframes up {
      from {
        opacity: 0;
        -webkit-transform: translateY(1rem);
                transform: translateY(1rem);
      }
      to {
        opacity: 1;
        -webkit-transform: none;
                transform: none;
      }
    }
    @keyframes up {
      from {
        opacity: 0;
        -webkit-transform: translateY(1rem);
                transform: translateY(1rem);
      }
      to {
        opacity: 1;
        -webkit-transform: none;
                transform: none;
      }
    }
    @-webkit-keyframes grow {
      from {
        -webkit-transform: scale(0);
                transform: scale(0);
      }
      to {
        -webkit-transform: none;
                transform: none;
      }
    }
    @keyframes grow {
      from {
        -webkit-transform: scale(0);
                transform: scale(0);
      }
      to {
        -webkit-transform: none;
                transform: none;
      }
    }
    @-webkit-keyframes growY {
      from {
        -webkit-transform: scaleY(0);
                transform: scaleY(0);
      }
      to {
        -webkit-transform: none;
                transform: none;
      }
    }
    @keyframes growY {
      from {
        -webkit-transform: scaleY(0);
                transform: scaleY(0);
      }
      to {
        -webkit-transform: none;
                transform: none;
      }
    }
    @-webkit-keyframes growX {
      from {
        -webkit-transform: scaleX(0);
                transform: scaleX(0);
      }
      to {
        -webkit-transform: none;
                transform: none;
      }
    }
    @keyframes growX {
      from {
        -webkit-transform: scaleX(0);
                transform: scaleX(0);
      }
      to {
        -webkit-transform: none;
                transform: none;
      }
    }
    @-webkit-keyframes pop {
      from {
        opacity: 0;
        -webkit-transform: scale(0.96);
                transform: scale(0.96);
      }
      to {
        opacity: 1;
        -webkit-transform: none;
                transform: none;
      }
    }
    @keyframes pop {
      from {
        opacity: 0;
        -webkit-transform: scale(0.96);
                transform: scale(0.96);
      }
      to {
        opacity: 1;
        -webkit-transform: none;
                transform: none;
      }
    }
    @-webkit-keyframes fade {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    @keyframes fade {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    @-webkit-keyframes scroll {
      0%, 10%, 90%, 100% {
        -webkit-transform: translateY(0);
                transform: translateY(0);
      }
      48%, 52% {
        -webkit-transform: translateY(1rem);
                transform: translateY(1rem);
      }
    }
    @keyframes scroll {
      0%, 10%, 90%, 100% {
        -webkit-transform: translateY(0);
                transform: translateY(0);
      }
      48%, 52% {
        -webkit-transform: translateY(1rem);
                transform: translateY(1rem);
      }
    }
    @-webkit-keyframes hover {
      50% {
        -webkit-transform: translateY(0.5rem);
                transform: translateY(0.5rem);
      }
    }
    @keyframes hover {
      50% {
        -webkit-transform: translateY(0.5rem);
                transform: translateY(0.5rem);
      }
    }
    
    @-webkit-keyframes blink {
      0% { opacity: 1.0; }
      50% { opacity: 0.0; }
      100% { opacity: 1.0; }
    }
    
    @keyframes blink {
      0% { opacity: 1.0; }
      50% { opacity: 0.0; }
      100% { opacity: 1.0; }
    }
    
    @-webkit-keyframes opacity {
      0%, 100% {
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
    }
    @-webkit-keyframes change {
      0%, 12.66%, 100% {
        -webkit-transform: translate3d(0, 0, 0);
                transform: translate3d(0, 0, 0);
      }
      16.66%, 29.32% {
        -webkit-transform: translate3d(0, -25%, 0);
                transform: translate3d(0, -25%, 0);
      }
      33.32%,45.98% {
        -webkit-transform: translate3d(0, -50%, 0);
                transform: translate3d(0, -50%, 0);
      }
      49.98%,62.64% {
        -webkit-transform: translate3d(0, -75%, 0);
                transform: translate3d(0, -75%, 0);
      }
      66.64%,79.3% {
        -webkit-transform: translate3d(0, -50%, 0);
                transform: translate3d(0, -50%, 0);
      }
      83.3%,95.96% {
        -webkit-transform: translate3d(0, -25%, 0);
                transform: translate3d(0, -25%, 0);
      }
    }
    @keyframes opacity {
      0%, 100% {
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
    }
    @keyframes change {
      0%, 20%, 100% {
        -webkit-transform: translate3d(0, 0, 0);
                transform: translate3d(0, 0, 0);
      }
      25%, 45% {
        -webkit-transform: translate3d(0, -33.333%, 0);
                transform: translate3d(0, -33.333%, 0);
      }
      50%, 70% {
        -webkit-transform: translate3d(0, -66.666%, 0);
                transform: translate3d(0, -66.666%, 0);
      }
      75%, 95% {
        -webkit-transform: translate3d(0, -33.333%, 0);
                transform: translate3d(0, -33.333%, 0);
      }
    }
  `;
}
