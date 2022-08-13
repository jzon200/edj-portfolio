import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function MainLayout(props: Props) {
  return <main className="m-20 font-poppins">{props.children}</main>;
}
