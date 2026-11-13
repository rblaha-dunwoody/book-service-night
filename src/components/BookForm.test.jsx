import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BookForm from "./BookForm";

describe("BookForm", () => {
  test("shows validation errors when required fields are empty", async () => {
    const user = userEvent.setup();

    render(<BookForm book={null} onSaved={() => {}} />);

    const submitButton = screen.getByRole("button", {
      name: /add book/i,
    });

    await user.click(submitButton);

    expect(screen.getByPlaceholderText(/Ex: The Hobbit/i)).toHaveClass(
      "input-error",
    );
    expect(screen.getByPlaceholderText(/Ex: J.R.R. Tolkein/i)).toHaveClass(
      "input-error",
    );
    expect(screen.getByPlaceholderText(/Ex: 14.99/i)).toHaveClass(
      "input-error",
    );
  });
});
