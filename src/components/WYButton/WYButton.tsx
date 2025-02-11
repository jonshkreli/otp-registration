import React from "react";
import { Button, ButtonProps } from "@mui/material";

interface WYButtonProps extends ButtonProps {
  children: React.ReactNode;
}

const WYButton: React.FC<WYButtonProps> = ({ children, ...props }) => {
  return (
    <Button variant="contained" sx={{ backgroundColor: "#1E3A34", color: "#FFF" }} {...props}>
      {children}
    </Button>
  );
};

export default WYButton;
