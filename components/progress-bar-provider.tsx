"use client";

import { ProgressProvider } from "@bprogress/next/app";
import { ReactNode } from "react";

interface NextProgressBarProviderProps {
  children: ReactNode;
}

export default function NextProgressBarProvider({
  children,
}: Readonly<NextProgressBarProviderProps>) {
  return (
    <>
      <ProgressProvider
        height="4px"
        color="#008080"
        options={{ showSpinner: false }}
        shallowRouting
      >
        {children}
      </ProgressProvider>
    </>
  );
}
