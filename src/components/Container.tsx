import { ReactNode } from "react";

interface Children {
  children: ReactNode;
}

export default function Container({ children }: Children) {
  return <div className="mx-auto container px-10">{children}</div>;
}
