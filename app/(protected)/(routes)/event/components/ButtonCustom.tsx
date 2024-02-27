import { Button } from "@/components/ui/button";
import React from "react";

import styles from "./styles.module.css";

interface ButtonCustomProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  activeState?: boolean;
}

const ButtonCustom: React.FC<ButtonCustomProps> = ({
  children,
  activeState,
  ...props
}) => {
  return (
    <Button
      className={`${styles.customButton} ${styles.transitionButton} ${
        activeState ? "bg-red-300" : "bg-transparent"
      }`}
      {...props}
    >
      {children}
    </Button>
  );
};

export default ButtonCustom;
