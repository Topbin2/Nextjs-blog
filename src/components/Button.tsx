"use client";

import { useRouter } from "next/navigation";
import { PropsWithChildren } from "react";

type Props = {
  path: string;
};

export default function Button({ path, children }: PropsWithChildren<Props>) {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push(path);
  };

  return (
    <button
      onClick={handleButtonClick}
      className="px-2 py-1 bg-orange-300 rounded-xl"
    >
      {children}
    </button>
  );
}
