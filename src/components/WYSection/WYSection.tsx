import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "./WYSection.module.scss";

interface WYSectionProps {
    sectionTitle: string;
    children: React.ReactNode;
}

const WYSection: React.FC<WYSectionProps> = ({ sectionTitle, children }) => {
    return (
        <Box className={styles.sectionContainer}>
            <Typography className={styles.sectionTitle}>{sectionTitle}</Typography>
            <Box className={styles.content}>{children}</Box>
        </Box>
    );
};

export default WYSection;
