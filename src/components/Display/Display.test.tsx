import Display from "./Display";
import { render, screen } from "@testing-library/react";

describe("Given a Display component", () => {
  describe("When it receives the phone number '667359961'", () => {
    test("Then it should return the phone number '667359961'", () => {
      const phoneNumber = "667359961";

      render(<Display />);

      const display = screen.getByText(phoneNumber);

      expect(display).toBeInTheDocument();
    });
  });
});
