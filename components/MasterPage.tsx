"use client";

import React from "react";
import { useAppSelector } from "@/redux/hooks";

type Props = {
  children: React.ReactNode;
};

function MasterPage({ children }: Props) {
  const isSidebarOpen = useAppSelector(
    (state) => state.globalReducer.isSidebarOpen
  );

  return (
    <div className={`${isSidebarOpen === true ? "ml-64" : "ml-14"}`}>
      {children}
    </div>
  );
}

export default MasterPage;
