import { render, screen } from "@testing-library/react";
import Info from "./Info";

describe("Given the component Info", () => {
  describe("When inovoked by App", () => {
    test("Then it should show 'Calling...'", () => {
      const infoMessage = "Calling...";

      render(<Info />);

      const info = screen.getByText(infoMessage);
      expect(info).toBeInTheDocument();
    });
  });
});
