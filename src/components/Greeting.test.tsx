import { render, screen } from "@testing-library/react";
import { Greeting } from "./Greeting";
import { describe, it, expect } from "vitest";

describe("Greeting", () => {
  it("Renders a default greeting", () => {
    render(<Greeting />);
    expect(screen.getByText("Hello World!")).toBeInTheDocument();
  });

  it("Renders greeting with a name", () => {
    render(<Greeting name="Seunghwan" />);
    expect(screen.getByText("Hello Seunghwan!")).toBeInTheDocument();
  });
});
