import { render, screen } from "@testing-library/react";
import BookCard from "./BookCard";

describe("BookCard", () => {
  test("display book information", () => {
    const book = {
      id: 1,
      title: "The Test Book",
      author: "Test Author",
      price: 19.99,
    };

    render(<BookCard book={book} />);

    expect(screen.getByText("The Test Book")).toBeInTheDocument();
    expect(screen.getByText("by Test Author")).toBeInTheDocument();
    expect(screen.getByText(/19.99/)).toBeInTheDocument();
  });
});
