import { Button} from "@radix-ui/themes";
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

export default function Sell() {
  const router = useRouter();
  const [selected, setSelected] = useState(people[0]);

  const [currentSellType, setCurrentSellType] = useState("inDollars");

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
          <div className="flex cursor-pointer" onClick={() =>{
            router.push("/");
          }}>
            <ArrowLeftIcon className="h-5 w-5 text-[#069D6E]" />
            <span className="ml-2 text-[#069D6E] text-sm font-semibold">
              Back
            </span>
          </div>
          <div className="flex gap-2">
            <span className="text-sm mt-1 text-[rgba(156,165,175,1)] font-semibold">
              Order Type
            </span>
            <div className="w-36 max-h-6 h-6 ">
              <Listbox value={selected} onChange={setSelected}>
                {({ open }) => (
                  <div className="relative ">
                    <Listbox.Button
                      className={`relative w-full cursor-default rounded-lg bg-white py-1 pl-3 pr-10 -mt-2 text-left text-[14px] shadow-md ${
                        open
                          ? "!border !border-[#1F75FF] ring-2 ring-[#1f75ff4f]"
                          : "border-none"
                      } focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm`}
                    >
                      <span className="block truncate">{selected.name}</span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <ChevronDownIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </span>
                    </Listbox.Button>
                    <Transition
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options
                        onChange={(value) => {
                          console.log(value);
                        }}
                        className="absolute mt-1 right-0 max-h-60 w-64 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                      >
                        {people.map((person, personIdx) => (
                          <Listbox.Option
                            key={personIdx}
                            className={({ active }) =>
                              `relative select-none py-2 pl-3 pr-4 text-gray-900 cursor-pointer`
                            }
                            value={person}
                          >
                            {({ selected }) => (
                              <>
                                {selected ? (
                                  <span className="absolute inset-y-0 right-5 flex items-center pl-3 text-[#069D6E]">
                                    <CheckIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : null}
                                <span
                                  className={`block truncate ${
                                    selected ? "font-medium" : "font-normal"
                                  }`}
                                >
                                  {person.name}
                                </span>
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                )}
              </Listbox>
            </div>
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
          <div className="text-2xl text-[#2A3033] font-semibold">Sell AAPL</div>
          <div className="text-[#6A7381]  text-sm">
            10 shares for $902.11 available
          </div>
        </div>
        {/* Header content end */}
        {/* Divider 1px */}
        <div className="h-[1px] w-full bg-[#E5E5E5] mt-4"></div>

        {/* Tabs start */}
        <div className="w-full mt-4">
          <Tab.Group>
            <Tab.List className="flex space-x-1 rounded-xl bg-[#F4F5FA] p-1">
              <Tab
                key={1}
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-[#2A3033]",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                    selected
                      ? "bg-white shadow text-[#2A3033]"
                      : "text-[#6A7381] hover:bg-white/[0.12] "
                  )
                }
                onClick={() => {
                  setCurrentSellType("inDollars");
                }}
              >
                Sell in Dollars
              </Tab>
              <Tab
                key={2}
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-[#2A3033]",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                    selected
                      ? "bg-white shadow text-[#2A3033]"
                      : "text-[#6A7381] hover:bg-white/[0.12] "
                  )
                }
                onClick={() => {
                  setCurrentSellType("inShares");
                }}
              >
                Sell in Shares
              </Tab>
            </Tab.List>
            <Tab.Panels className="mt-2">
              {/* {Object.values(categories).map((posts, idx) => (
                <Tab.Panel
                  key={idx}
                  className={classNames(
                    "rounded-xl bg-white p-3",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                  )}
                >
                  <ul>
                    {posts.map((post) => (
                      <li
                        key={post.id}
                        className="relative rounded-md p-3 hover:bg-gray-100"
                      >
                        <h3 className="text-sm font-medium leading-5">
                          {post.title}
                        </h3>

                        <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                          <li>{post.date}</li>
                          <li>&middot;</li>
                          <li>{post.commentCount} comments</li>
                          <li>&middot;</li>
                          <li>{post.shareCount} shares</li>
                        </ul>

                        <a
                          href="#"
                          className={classNames(
                            "absolute inset-0 rounded-md",
                            "ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
                          )}
                        />
                      </li>
                    ))}
                  </ul>
                </Tab.Panel>
              ))} */}
            </Tab.Panels>
          </Tab.Group>
        </div>
        {/* Tabs end */}

        {/* Input box's */}
        <div className="flex flex-col items-end gap-4 mt-4">
          <div className=" relative h-[40px] w-full border border-[#D7DBE0] rounded-[10px] pt-3 pb-1">
            {/* Add input box without any default styling */}
            <label className="absolute top-1 right-1 text-xs font-semibold text-[#9CA5AF]">
              {currentSellType === "inShares"
                ? "Number of Shares"
                : "Enter Amount"}
            </label>
            <input
              type="text"
              className="h-full w-full text-right text-sm pr-2 -pt-1 rounded-[10px]"
              placeholder="$0.00"
              style={{
                outline: "none",
                boxShadow: "none",
                WebkitAppearance: "none",
                MozAppearance: "none",
                appearance: "none",
              }}
            />
          </div>
          <div className=" relative h-[40px] w-full border border-[#D7DBE0] rounded-[10px] pt-3 pb-1">
            {/* Add input box without any default styling */}
            <label className="absolute top-1 right-1 text-xs font-semibold text-[#9CA5AF]">
              Simple
            </label>
            <input
              type="text"
              className="h-full w-full text-right text-sm pr-2 -pt-1 rounded-[10px]"
              placeholder="$0.00"
              style={{
                outline: "none",
                boxShadow: "none",
                WebkitAppearance: "none",
                MozAppearance: "none",
                appearance: "none",
              }}
            />
          </div>

          <div className="text-xs text-[#2A3033] -mt-2">
            Market price $98.13 per 1 share
          </div>

          {currentSellType === "inShares" ? (
            <>
              {/* Divider 1px */}
              <div className="h-[1px] w-full bg-[#E5E5E5] mt-1"></div>
              <div className="w-full flex justify-between -mt-2">
                <div className="text-xs text-[#2A3033] font-semibold">
                  Estimated Credit:
                </div>
                <div className="text-xs text-[#2A3033] font-semibold">
                  $981.3
                </div>
              </div>
            </>
          ) : null}
        </div>
        {/* Input box's end */}

        <Button className="w-full mt-4" size="3" color="green" onClick={() =>{
          router.push("/submitSell");
        }}>
          Review
        </Button>
      </div>
    </div>
  );
}
