/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CreateProductForm from "../components/CreateProductForm";
import { Category } from "../types/Category";
import { TextEncoder } from 'util'
import { JSDOM } from 'jsdom';

global.TextEncoder = TextEncoder

const dom = new JSDOM('<!doctype html><html><body></body></html>');

global.document = dom.window.document;

describe("CreateProductForm", () => {
  const categories: Category[] = [{ name: "Electronics", id: 1 }]
  it("renders form with correct fields", () => {
    render(<CreateProductForm onCreate={() => { }} categories={categories} />);

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/image/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/price/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/category/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /create/i })).toBeInTheDocument();
  });

  it("displays error message when form is submitted with invalid values", () => {
    render(<CreateProductForm onCreate={() => { }} categories={categories} />);

    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: "" } });
    fireEvent.change(screen.getByLabelText(/image/i), { target: { value: "" } });
    fireEvent.change(screen.getByLabelText(/price/i), { target: { value: 0 } });
    fireEvent.change(screen.getByLabelText(/category/i), { target: { textContent: "" } });
    fireEvent.click(screen.getByRole("button", { name: /create/i }));

    const input = screen.getByLabelText(/name/i);
    expect(screen.getByLabelText(/name/i)).toBeRequired();
  });
});
