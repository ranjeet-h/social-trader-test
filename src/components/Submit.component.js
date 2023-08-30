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

export default function Submit(props) {
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
        <div className="h-6 w-full flex justify-between items-center">
          <div
            className="flex cursor-pointer"
            onClick={() => {
              router.push("/");
            }}
          >
            <ArrowLeftIcon className="h-5 w-5 text-[#069D6E]" />
            <span className="ml-2 text-[#069D6E] text-sm font-semibold">
              Back
            </span>
          </div>
          <div className="flex gap-2">
            <div className="flex items-center cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="18"
                viewBox="0 0 18 20"
                fill="none"
              >
                <path
                  d="M14.8575 2.81386C15.2759 2.39538 15.9553 2.39538 16.3737 2.81386C16.7921 3.23234 16.7921 3.91195 16.3737 4.33043L10.7037 9.99833L16.3704 15.6696C16.7887 16.088 16.7887 16.7677 16.3704 17.1861C15.952 17.6046 15.2725 17.6046 14.8541 17.1861L9.1875 11.5149L3.51752 17.1828C3.09914 17.6013 2.41968 17.6013 2.00129 17.1828C1.5829 16.7643 1.5829 16.0847 2.00129 15.6662L7.67127 9.99833L2.00464 4.32708C1.58625 3.9086 1.58625 3.23234 2.00464 2.81386C2.42302 2.39538 3.10248 2.39538 3.52087 2.81386L9.1875 8.48175L14.8575 2.81386Z"
                  fill="#9CA5AF"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Top bar end */}

        {/* Header content start */}
        <div className="flex flex-col mt-10">
          <div className="text-2xl text-[#2A3033] font-semibold">
            {orderType === "buy" ? "Buy" : "Sell"} AAPL
          </div>
          <div className="text-[#6A7381]  text-sm">
            {orderType === "buy"
              ? "$1,000.00 cash available"
              : "10 shares for $902.11 available"}
          </div>
        </div>
        {/* Header content end */}
        {/* Divider 1px */}
        <div className="h-[1px] w-full bg-[#E5E5E5] mt-4"></div>

        {/* Checkout details start */}
        <div className="flex items-center justify-between mt-4">
          <div className="text-[#2A3033] text-base font-normal">
            Number of Shares
          </div>
          <div className="text-[#2A3033] text-base font-semibold">10</div>
        </div>
        {/* Divider 1px */}
        <div className="h-[1px] w-full bg-[#E5E5E5] my-2"></div>
        <div className="flex items-center justify-between mt-4">
          <div className="text-[#2A3033] text-base font-normal">Stop Price</div>
          <div className="text-[#2A3033] text-base font-semibold">$90.00</div>
        </div>
        {/* Divider 1px */}
        <div className="h-[1px] w-full bg-[#E5E5E5] my-2"></div>
        <div className="flex items-center justify-between mt-4">
          <div className="text-[#2A3033] text-base font-normal">
            Estimated Credit
          </div>
          <div className="text-[#2A3033] text-base font-semibold">$902.11</div>
        </div>
        <p className="w-full text-[#6A7381] text-xs mt-3 ">
          You are placing a good till canceled stop limit order to sell 10 share
          (s) of CCIV. When the price of CCIV reaches $29.00, your order will be
          converted to a limit order at $30.00 per share.
        </p>
        {/* Check box's end */}

        <Button
          className="w-full mt-2"
          size="3"
          color="green"
          onClick={() => {
            if (orderType === "sell") {
              setCurrentMode("sellSuccess");
            } else {
              setCurrentMode("buySuccess");
            }
          }}
        >
          Submit & {orderType === "buy" ? "Buy" : "Sell"}
        </Button>
      </div>
    </div>
  );
}
