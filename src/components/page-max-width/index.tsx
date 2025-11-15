import React from "react";

type Props = {
  children: React.ReactNode;
};

const PageMaxWidth = ({ children }: Props) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 lg:px-10">{children}</div>
  );
};

export default PageMaxWidth;
