import type { ReactNode, ButtonHTMLAttributes } from "react";
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children?: ReactNode;
};
export default function TwoButtons({ children, ...props }: ButtonProps): import("react").JSX.Element;
export {};
