import type { ReactNode, ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
};

export default function TwoButtons({ children, ...props }: ButtonProps) {
  return (
    <>
      <button {...props}>{children}</button>
      <button {...props}>{children}</button>
    </>
  );
}
