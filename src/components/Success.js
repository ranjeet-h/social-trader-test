import { Button, RadioGroup } from "@radix-ui/themes";
import React from "react";
import { Fragment, useState } from "react";
import { Listbox, Tab, Transition } from "@headlessui/react";
import {
  ArrowLeftIcon,
  CheckIcon,
  ChevronDownIcon,
} from "@heroicons/react/20/solid";
import { useRouter } from "next/router";

const people = [
  { name: "Simple" },
  { name: "Limit order" },
  { name: "Stop order" },
  { name: "Stop limit order" },
  { name: "Trailing stop order" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Success(props) {
  const { currentMode, setCurrentMode, orderType } = props;
  const [selected, setSelected] = useState(people[0]);

  const [currentBuyType, setCurrentBuyType] = useState("inDollars");
  const router = useRouter();
  return (
    <div className="h-full w-full flex justify-center pt-10">
      <div
        className="w-[490px] h-fit bg-[#FFF] rounded-[16px] p-10"
        style={{
          boxShadow: "0px 3px 15px 0px rgba(11, 50, 67, 0.08)",
        }}
      >
        {/* Top bar start */}
        <div className=" w-full flex flex-col justify-center items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
          >
            <path
              d="M65.0262 16.0206L31.2864 49.7604C31.0491 49.9977 30.6637 49.9952 30.4295 49.755L13.6875 32.5823C11.1881 30.0186 7.0752 29.9925 4.5434 32.5243C2.03415 35.0335 2.03415 39.1018 4.5434 41.6111L24.5939 61.6616C28.6688 65.7364 35.2754 65.7364 39.3503 61.6616L75.0087 26.0031C77.7653 23.2465 77.7653 18.7772 75.0087 16.0206C72.2521 13.264 67.7828 13.264 65.0262 16.0206Z"
              fill="#069D6E"
              stroke="#111111"
              stroke-width="0.5"
            />
          </svg>
          <div className="text-[#2A3033] font-semibold text-lg">
            AAPL Order Queued{" "}
          </div>
          <p className="text-[#6A7381] font-normal text-sm text-center">
            Your order to sell 10 share(s) of CCIV will be when markets open
          </p>
        </div>

        {/* Top bar end */}

        {/* Checkout details start */}
        <div className="flex items-center justify-between mt-4">
          <div className="text-[#2A3033] text-base font-semibold">
            Number of Shares
          </div>
          <div className="text-[#2A3033] text-base font-semibold">0 of 10</div>
        </div>
        {/* Divider 1px */}
        <div className="h-[1px] w-full bg-[#E5E5E5] my-2"></div>
        <div className="flex items-center justify-between mt-4">
          <div className="text-[#2A3033] text-base font-semibold">
            Estimated Credit
          </div>
          <div className="text-[#2A3033] text-base font-semibold">$300.00</div>
        </div>
        {/* Checkout details end */}

        <Button
          className="w-full mt-5"
          size="3"
          color="green"
          onClick={() => {
            if (currentMode === "submitBuy") {
              setCurrentMode("sellSuccess");
            } else if (currentMode === "submitSell") {
              setCurrentMode("buySuccess");
            }
          }}
        >
          Done
        </Button>
        <Button
          className="w-full mt-3 !bg-[#DAFBEC] !text-[#069D6E]"
          size="3"
          color="green"
          
          onClick={() => {
            if (currentMode === "submitBuy") {
              setCurrentMode("sellSuccess");
            } else if (currentMode === "submitSell") {
              setCurrentMode("buySuccess");
            }
          }}
        >
          View Order
        </Button>
      </div>
    </div>
  );
}
