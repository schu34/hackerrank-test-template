import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import {
  Grocery,
  Fridge,
  ShoppingCart,
} from './App';

describe("Grocery", () => {
  test("should render an empty string if no props are passed", () => {
    const { container } = render(<Grocery />);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div />
      </div>
    `);
  });

  test("should render a grocery component with the name passed via the name prop", () => {
    const expectedName = "butter";
    const { getByText } = render(<Grocery name={expectedName} />);
    const groceryName = getByText(expectedName).textContent;
    expect(groceryName).toBe(expectedName);
  });
});

describe('Fridge', () => {
  test('should render a fridge component that contains 3 groceries: milk, butter, eggs', () => {
    const { getByText, container } = render(<Fridge groceries={['milk','butter','eggs']}/>);
    const milk = getByText(/milk/i).textContent;
    const butter = getByText(/butter/i).textContent;
    const eggs = getByText(/eggs/i).textContent;

    expect(milk).toBe('milk');
    expect(butter).toBe('butter');
    expect(eggs).toBe('eggs');
    expect(container.firstChild).toHaveClass('fridge')
  });

  test('should render a fridge component with a className of `fridge`', () => {
    const { container } = render(<Fridge />);
    expect(container.firstChild).toHaveClass('fridge');
  });
});

describe('ShoppingCart', () => {
  test('should render a ShoppingCart component with a className of `shopping-cart` that contains 3 groceries: milk, butter, eggs', () => {
    const { getByText } = render(<ShoppingCart />);
    const tomato = getByText(/tomato/i).textContent;
    const banana = getByText(/banana/i).textContent;

    expect(tomato).toBe('tomato');
    expect(banana).toBe('banana');
  });

  test('should render a ShoppingCart component with a className of `shopping-cart` that contains 3 groceries: milk, butter, eggs', () => {
    const { container } = render(<ShoppingCart />);
    expect(container.firstChild).toHaveClass('shopping-cart');
  });
});

