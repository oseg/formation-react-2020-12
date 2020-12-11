import { render, screen } from "@testing-library/react";

const Simple = () => {
  return (
    <p>
      Bonjour, <strong>le monde</strong>.
    </p>
  );
};

test("Jest.expect.toEqual", () => {
  const value = 42;
  expect(value).toEqual(42);
});

test("Simple test has 'le monde'", () => {
  render(<Simple />);
  // https://testing-library.com/docs/dom-testing-library/cheatsheet#queries
  // Kent C. Dodds: "Write tests, not too many, mostly integration"

  // get*    →   un seul élément, erreur si pas trouvé
  // query*  →   un seul élément, pas d'erreur si pas trouvé
  // find*   →   un seul élément, attend si pas trouvé

  // *All*   →   plusieurs éléments

  // *By*    →   type de filtre

  screen.getByText("monde", { exact: false });
  const element = screen.getByText("le monde");
  const p = screen.getByText("Bonjou", { exact: false });
  expect(p).toContainElement(element);
});

test("Simple snapshot", () => {
  const { container } = render(<Simple />);
  expect(container).toMatchSnapshot();
});

const add = (a, b) => a + b;

const foo = (callback) => setTimeout(callback, 5);

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

test("spies", async () => {
  const spy = jest.fn(add);
  const value = spy(1, 2);
  expect(value).toEqual(3);
  expect(spy).toHaveBeenCalledTimes(1);
  expect(spy).toHaveBeenCalledWith(1, 2);
  expect(spy).toHaveReturnedWith(3);

  const cb = jest.fn();
  foo(cb);
  expect(cb).not.toHaveBeenCalled();
  await delay(10);
  expect(cb).toHaveBeenCalled();
});
