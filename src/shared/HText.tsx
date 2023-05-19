import React from "react";

type Props = {
  children: JSX.Element;
};

const HText = ({ children }: Props) => {
  return <h1 className="mb-2 text-3xl font-bold">{children}</h1>;
};

export default HText;
