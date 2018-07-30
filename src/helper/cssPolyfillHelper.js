import { injectGlobal } from "styled-components";

export function cssPolyfiller() {
  injectGlobal`
      .messenger-body:before, .messenger-body:after {
        content: "";
        width: 4px;
        height: 100%;
        background: #114B5F;
        position: absolute;
        top: 0;
        -webkit-transform-origin: top;
                transform-origin: top;
        -webkit-transform: scaleY(0);
                transform: scaleY(0);
        -webkit-animation: growY 0.3s cubic-bezier(0, 0, 0.21, 1.13) 0.4s forwards;
                animation: growY 0.3s cubic-bezier(0, 0, 0.21, 1.13) 0.4s forwards;
      }
      .messenger-body:before {
        left: 0;
      }
      .messenger-body:after {
        right: 0;
        -webkit-animation-delay: 0.7s;
                animation-delay: 0.7s;
      }
      .messenger-submit {
        width: 3rem;
        height: 3rem;
        border: 0;
        border-radius: 4px;
        background: #F45B69;
        position: absolute;
        right: 1rem;
        top: calc(50% - 1.5rem);
        box-shadow: 4px 4px #6B2737;
        opacity: 0;
        -webkit-animation: pop 0.2s cubic-bezier(0.07, 1.08, 1, 2.8) 1s forwards;
                animation: pop 0.2s cubic-bezier(0.07, 1.08, 1, 2.8) 1s forwards;
      }
      .messenger-submit:before {
        content: "";
        width: 0.5rem;
        height: 0.5rem;
        border: 4px solid #F1FCEF;
        border-left: 0;
        border-bottom: 0;
        -webkit-transform: rotate(45deg);
                transform: rotate(45deg);
        position: absolute;
        top: calc(50% - 0.25rem);
        left: calc(50% - 0.25rem);
        opacity: 0;
        -webkit-animation: fade 0.2s cubic-bezier(0, 0, 0.21, 1.13) 1.1s forwards;
                animation: fade 0.2s cubic-bezier(0, 0, 0.21, 1.13) 1.1s forwards;
      }
        .messenger-footer:before {
        content: "";
        width: 100%;
        height: 4px;
        background: #114B5F;
        position: absolute;
        top: 0;
        left: 0;
        -webkit-transform-origin: left;
                transform-origin: left;
        -webkit-transform: scaleX(0);
                transform: scaleX(0);
        -webkit-animation: growX 0.3s ease 0.6s forwards;
                animation: growX 0.3s ease 0.6s forwards;
      }
      .messenger-input {
        width: 100%;
        height: 100%;
        resize: none;
        background: rgba(241, 252, 239, 0.3);
        margin-top: 4px;
        border: 0;
        border-radius: 0 0 12px 12px;
        padding: 1rem 5rem 1rem 1rem;
        color: #114B5F;
        opacity: 0;
        -webkit-animation: fade 0.3s ease 0.8s forwards;
                animation: fade 0.3s ease 0.8s forwards;
      }
      .messenger-input:focus, .messenger-input:active {
        outline: none;
      }
      .messenger-input::after {
        content: "";
        position: absolute;
        top: 0;
        right: -15px;
        display: inline-block;
        background-color: #606060;
        vertical-align: top;
        width: 10px;
        height: 24px; 
        -webkit-animation: blink 1s step-end infinite;
        animation: blink 1s step-end infinite;
      }
    `;
}
