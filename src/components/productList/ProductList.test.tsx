import { render, screen, fireEvent } from "@testing-library/react";
import AppContext from "../../context/store";
import ProductList from "./ProductList";

describe("<ProductList />", () => {
  const state = {
    state: {
      productList: [
        {
          id: 1, // Unique product ID
          title: "Yellow Pail",
          description: "On-demand sand castle construction expertise.",
          url: "#", // The URL is where the ‘title’ element points to.
          votes: 2, // This function is provided for you in seed.js.
          submitterAvatarUrl: "images/avatars/daniel.jpg", // Appears on the right of
          // ‘Submitted by:’
          productImageUrl: "images/products/image-aqua.png", // Appears on the left side
        },
      ],
    },
    dispatch: jest.fn(),
  };

  const renderProductList = () => (
    <AppContext.Provider value={state}>
      <ProductList />
    </AppContext.Provider>
  );
  test("check title display", () => {
    render(renderProductList());
    const titleElement = screen.getByText(/^Popular Products$/);
    expect(titleElement).toBeInTheDocument();
  });
  test('vote icon must have src = "/images/ui/arrow.png" and alt = "Votes Icon"', () => {
    render(renderProductList());
    const vote = screen.getByAltText("Votes Icon");
    expect(vote).toHaveAttribute("src", "/images/ui/arrow.png");
  });
  test("vote icon click", async () => {
    render(renderProductList());
    const vote = screen.getByAltText("Votes Icon");
    fireEvent.click(vote);
    expect(state.dispatch).toHaveBeenCalled();
  });
});
