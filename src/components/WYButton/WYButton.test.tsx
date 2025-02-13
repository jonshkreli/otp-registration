import React from "react";
import { render, screen } from "@testing-library/react";
import WYButton from "./WYButton";

describe("WYButton", () => {
    it("renders with correct text", () => {
        render(<WYButton kind="primary">Click Me</WYButton>);
        expect(screen.getByRole("button", { name: /click me/i })).toBeInTheDocument();
    });

    it("applies correct classes for primary button", () => {
        render(<WYButton kind="primary">Primary</WYButton>);
        const button = screen.getByRole("button", { name: /primary/i });
        expect(button).toHaveClass("primary"); // Ensure "primary" class is applied
    });

    it("applies correct classes for secondary button", () => {
        render(<WYButton kind="secondary">Secondary</WYButton>);
        const button = screen.getByRole("button", { name: /secondary/i });
        expect(button).toHaveClass("secondary"); // Ensure "secondary" class is applied
    });

    it("applies correct classes for cancel button", () => {
        render(<WYButton kind="cancel">Cancel</WYButton>);
        const button = screen.getByRole("button", { name: /cancel/i });
        expect(button).toHaveClass("cancel"); // Ensure "cancel" class is applied
    });
});
