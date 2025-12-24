import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import store from "./Store/store";

it("Should display all the files",()=>
{
    render(<Provider store={store}><App/></Provider>)
    expect(screen.getByText(/Login Screen/i)).toBeInTheDocument();
})

