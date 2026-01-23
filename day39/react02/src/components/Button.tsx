import React, { type Ref } from "react";
type Props = {
  ref: Ref<HTMLButtonElement>;
  text: string;
  children: React.ReactNode;
};
export default function Button({ ref, text, children }: Props) {
  return (
    <div>
      {children}
      <button ref={ref}>{text}</button>
    </div>
  );
}
