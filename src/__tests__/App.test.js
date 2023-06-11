import React from "react";
import "whatwg-fetch";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { server } from "../mocks/server";

import App from "../components/App";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("displays the dog image after fetching", async () => {
    "https://images.dog.ceo/breeds/bulldog-english/mami.jpg"
  
});

test("displays a loading message before fetching", async () => {

    "https://images.dog.ceo/breeds/bulldog-english/mami.jpg"
  

  expect(screen.queryByText(/Loading/)).not.toBeInTheDocument();
});
