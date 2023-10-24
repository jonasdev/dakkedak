export type CardType = {
  icon?: JSX.Element;
  title?: string;
  text?: string;
};

export default function Card({ icon, title, text }: CardType) {
  return (
    <div className="relative z-10 flex h-full max-h-full w-full flex-col justify-between space-y-8 rounded-3xl bg-white px-8 pb-12 pt-8 shadow-2xl">
      <div className="flex items-center justify-start border-b-2 pb-4 ">
        <i className="text-primary">{icon}</i>

        <h4 className="ml-4 text-lg font-semibold text-black md:text-xl">
          {title}
        </h4>
      </div>
      <p className="flex h-full items-start justify-start text-sm font-medium leading-6 md:text-base">
        {text}
      </p>
    </div>
  );
}
