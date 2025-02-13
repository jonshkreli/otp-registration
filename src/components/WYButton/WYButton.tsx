import React from "react";
import {Button, ButtonProps} from "@mui/material";
import clsx from "clsx";
import styles from "./WYButton.module.scss";

interface WYButtonProps extends ButtonProps {
  children: React.ReactNode;
  kind?: 'primary' | 'secondary' | 'cancel';
}

const WYButton: React.FC<WYButtonProps> = ({ kind, children, ...props }) => {
  const variant = kind === 'primary' || kind === "cancel" ? 'contained' : 'outlined';
  return (
    <Button variant={variant} className={clsx([styles.standardButton, kind])} {...props}>
      {children}
    </Button>
  );
};

export default WYButton;
