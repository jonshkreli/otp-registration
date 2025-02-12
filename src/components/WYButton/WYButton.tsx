import React from "react";
import { Button, ButtonProps } from "@mui/material";
import clsx from "clsx";
import styles from "./WYButton.module.scss";

interface WYButtonProps extends ButtonProps {
  children: React.ReactNode;
}

const WYButton: React.FC<WYButtonProps> = ({ children, ...props }) => {
  return (
    <Button variant={props.variant} className={clsx([styles.standardButton, props.variant])} {...props}>
      {children}
    </Button>
  );
};

export default WYButton;
