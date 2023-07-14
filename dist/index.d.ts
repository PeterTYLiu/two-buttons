import React from "react";
import type { ReactNode, ButtonHTMLAttributes } from "react";
export default function TwoButtons({ children, ...props }: {
    children: ReactNode;
    props: ButtonHTMLAttributes<HTMLButtonElement>;
}): React.JSX.Element;
