import React from "react";
import {Box} from "@mui/material";
import styles from "./WYSection.module.scss";

interface WYSectionProps {
    sectionTitle: string;
    children: React.ReactNode;
}

const WYSection: React.FC<WYSectionProps> = ({ sectionTitle, children }) => {
    return (
        <Box className={styles.sectionContainer}>
            <p className={styles.sectionTitle}>{sectionTitle}</p>
            <Box className={styles.content}>{children}</Box>
        </Box>
    );
};

export default WYSection;
