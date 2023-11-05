import classNames from "classnames";
import React from "react";

type Props = {
  toggled: boolean;
  setToggled: (arg: boolean) => void;
};

export default function SideMenuButton({ toggled, setToggled }: Props) {
  return (
    <button
      className="group relative z-50 block lg:hidden"
      onClick={() => setToggled(!toggled)}
    >
      <div
        className={classNames(
          toggled ? "ring-1" : "ring-0",
          "relative flex h-10 w-10 transform items-center justify-center overflow-hidden rounded-full outline-none ring-transparent ring-opacity-30 transition-all duration-200 hover:ring-8 hover:ring-gray-300"
        )}
      >
        <div className="flex h-[20px] w-[20px] origin-center transform flex-col justify-between overflow-hidden transition-all duration-300">
          <div
            className={classNames(
              toggled ? "translate-x-10" : "translate-x-0",
              "h-[3px] w-7 origin-left transform rounded-3xl bg-slate-700 transition-all duration-300"
            )}
          />
          <div
            className={classNames(
              toggled ? "translate-x-10" : "translate-x-0",
              "h-[3px] w-7 transform rounded-3xl bg-slate-700 transition-all delay-75 duration-300"
            )}
          />
          <div
            className={classNames(
              toggled ? "translate-x-10" : "translate-x-0",
              "h-[3px] w-7 origin-left transform rounded-3xl bg-slate-700 transition-all delay-150 duration-300"
            )}
          />

          <div
            className={classNames(
              toggled ? "w-12 translate-x-0" : "w-0 -translate-x-10 ",
              "absolute top-2.5 flex transform items-center justify-between transition-all duration-500"
            )}
          >
            <div
              className={classNames(
                toggled ? "rotate-45" : "rotate-0",
                "absolute h-[3px] w-5 transform bg-slate-700 transition-all delay-300 duration-500"
              )}
            />
            <div
              className={classNames(
                toggled ? "-rotate-45" : "rotate-0",
                "absolute h-[3px] w-5 -rotate-0 transform bg-slate-700 transition-all delay-300 duration-500"
              )}
            />
          </div>
        </div>
      </div>
    </button>
  );
}
