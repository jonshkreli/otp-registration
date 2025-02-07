// import type { Meta, StoryObj } from "@storybook/react";
// import MultiStepper from "./MultiStepper";
// import { Box } from "@mui/material";
// import {registrationSteps} from "../../constants/registration";
// import UserDetails from "../../views/Registration/UserDetails/UserDetails";
// import SendConfirmation from "../../views/Registration/SendConfirmation/SendConfirmation";
// import SubmitConfirmation from "../../views/Registration/SubmitConfirmation/SubmitConfirmation";
// import React from "react";
//
// const ExampleStep = ({ text }: { text: string }) => (
//     <Box sx={{ p: 3, textAlign: "center", border: "1px solid #ddd" }}>{text}</Box>
// );
//
// const meta: Meta<typeof MultiStepper> = {
//     title: "Components/MultiStepper",
//     component: MultiStepper,
// };
//
// export default meta;
// type Story = StoryObj<typeof MultiStepper>;
//
// export const Default: Story = {
//     render: () => (
//         <MultiStepper
//             pageTitle={"Registration"}
//             stepsDetails={registrationSteps}
//             components={[
//                 <ExampleStep text={"a"}/>,
//                 <ExampleStep text={"b"}/>,
//                 <ExampleStep text={"c"}/>
//             ]}
//
//         />
//     ),
// };
