"use client";

import PinInput from "react-pin-input";

export default function PinContainer({
  showPinContainer,
  pinError,
  setShowPinContainer,
  handlePinSubmit,
  setPinError,
  pin,
  setPin,
}) {
  return (
    showPinContainer && (
      <div className="z-[100] bg-[#141414] flex-col min-h-screen absolute left-0 top-0 justify-center flex items-center right-0">
        <div>
          <span
            onClick={() => {
              setShowPinContainer({
                ...showPinContainer,
                show: false,
              });
              setPin("");
              setPinError(false);
            }}
            className="cursor-pointer absolute top-[50px] right-[40px]"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="svg-icon svg-icon-close ltr-0 e1mhci4z1"
              data-name="X"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.5858 12L2.29291 3.70706L3.70712 2.29285L12 10.5857L20.2929 2.29285L21.7071 3.70706L13.4142 12L21.7071 20.2928L20.2929 21.7071L12 13.4142L3.70712 21.7071L2.29291 20.2928L10.5858 12Z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
        </div>
        <h1 className="text-gray-400 font-bold text-[16px] mb-4">
          Profile Lock is currently ON
        </h1>
        {pinError ? (
          <h2 className="text-[#e6b209] font-bold text-[30px]">
            Whoops, wrong PIN. Please try again
          </h2>
        ) : (
          <h2 className="text-white font-bold text-[30px]">
            Enter your PIN to access this profile
          </h2>
        )}
        <PinInput
          length={4}
          initialValue={pin}
          secret
          secretDelay={100}
          onChange={(value, index) => setPin(value)}
          type="numeric"
          inputMode="number"
          style={{ padding: "20px", display: "flex", gap: "10px" }}
          inputStyle={{
            borderColor: "white",
            height: "70px",
            width: "70px",
            fontSize: "40px",
          }}
          inputFocusStyle={{ borderColor: "white" }}
          onComplete={(value, index) => handlePinSubmit(value, index)}
          autoSelect={true}
        />
      </div>
    )
  );
}
