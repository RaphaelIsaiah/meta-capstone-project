import { render, screen } from "@testing-library/react";
import App from "./App";
import BookingForm from "./Components/BookingForm";
import Specials from "./Components/Specials";
import Hero from "./Components/Hero";
import Testimonials from "./Components/Testimonials";
import BookingPage from "./Pages/BookingPage";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import { Link } from "react-router-dom";
import About from "./Components/About";

// 

test("the text renders correctly", () => {
  render(<Specials/>);

  const element = screen.getByText(/weeks specials/i);

  expect(element).toBeInTheDocument();
})

test("static text renders correctly", () => {
  render(<About/>);

  const element = screen.getByText(/little lemon/i);

  expect(element).toBeInTheDocument();
})

test("static text renders correctly", () => {
  render(<BookingForm/>);

  const element = screen.getByText(/confirmation details/i);

  expect(element).toBeInTheDocument();
})