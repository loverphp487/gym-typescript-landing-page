type Props = {
  image: string;
  name: string;
  description?: string;
};

export default function ClassComponent({ image, name, description }: Props) {
  return (
    <li className="relative float-left mr-5 inline-block w-[400px] overflow-hidden rounded-tl rounded-tr shadow-md">
      <img src={image} alt="" className="w-full object-cover" />
      <div className="absolute top-0 flex h-full w-full flex-col items-center justify-center bg-hover-red opacity-0 transition-all duration-300 hover:opacity-100">
        <h2 className="text-white">{name}</h2>
        {description && (
          <p className="px-5 text-center text-sm text-white">{description}</p>
        )}
      </div>
    </li>
  );
}
