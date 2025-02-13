import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import WYTextField from "./WYTextField";

describe("WYTextField", () => {
    it("renders correctly with label", () => {
        render(<WYTextField labelText="Username" placeholder="Enter your username" />);
        expect(screen.getByText("Username")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Enter your username")).toBeInTheDocument();
    });

    it("shows required indicator", () => {
        render(<WYTextField labelText="Email" required />);
        expect(screen.getByText("*")).toBeInTheDocument();
    });

    it("displays tooltip on hover", async () => {
        render(<WYTextField labelText="Password" tooltipText="Your password should be at least 8 characters long." />);
        const tooltipIcon = screen.getByTestId("InfoOutlinedIcon");
        userEvent.hover(tooltipIcon);
        expect(await screen.findByText("Your password should be at least 8 characters long.")).toBeInTheDocument();
    });

    it("renders OTP input with special style", () => {
        render(<WYTextField otpStyle placeholder="-" />);
        const parent = screen.getByPlaceholderText("-").parentElement;

        expect(parent).toHaveClass("otpInput"); // Check for expected class
    });
});
