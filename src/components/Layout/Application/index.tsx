import React from "react";

import { Footer } from "@/components/Layout/Footer";
import { Header } from "@/components/Layout/Header";

type Props = {
  children: React.ReactNode;
};

export const ApplicationLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
