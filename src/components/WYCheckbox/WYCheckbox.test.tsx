import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import WYCheckbox from "./WYCheckbox";

describe("WYCheckbox", () => {
    it("renders with the correct label", () => {
        render(<WYCheckbox label="Accept Terms" />);
        expect(screen.getByLabelText(/accept terms/i)).toBeInTheDocument();
    });

    it("is initially unchecked", () => {
        render(<WYCheckbox label="Accept Terms" />);
        expect(screen.getByRole("checkbox")).not.toBeChecked();
    });

    it("can be checked", async () => {
        render(<WYCheckbox label="Accept Terms" />);
        const checkbox = screen.getByRole("checkbox");
        await userEvent.click(checkbox);
        expect(checkbox).toBeChecked();
    });

    it("is disabled when the disabled prop is true", () => {
        render(<WYCheckbox label="Disabled Checkbox" disabled />);
        expect(screen.getByRole("checkbox")).toBeDisabled();
    });
});
