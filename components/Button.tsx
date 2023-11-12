import classNames from "classnames";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";
// import useSound from "use-sound";

type Props = {
  text: string;
  type?: "primary" | "secondary";
  className?: string;
  href: Url;
};

export default function Button({
  text,
  type = "primary",
  className,
  href,
}: Props) {
  // const [play] = useSound("/blob.mp3");

  return (
    <Link
      href={href}
      className={classNames(
        type === "primary"
          ? "bg-primary text-white focus:ring-primary active:bg-primary-dark lg:hover:bg-primary-dark"
          : "bg-white text-primary border-primary border-2 active:border-primary-dark lg:hover:border-primary-dark active:text-primary-dark lg:hover:text-primary-dark",
        className,
        "shadow-xl rounded px-8 py-3 text-sm font-medium transition active:translate-y-[2px] flex justify-center items-center text-center"
      )}
      // onClick={play}
    >
      <span>{text}</span>
    </Link>
  );
}
