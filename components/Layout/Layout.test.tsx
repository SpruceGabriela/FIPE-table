import { render, screen } from "@testing-library/react";
import Layout from "./Layout";

describe('Layout', () => {
  it('should be defined', () => {
    expect(Layout).toBeDefined();
  });

  it('should render children', () => {
    render(<Layout><p>hello world</p></Layout>)

    expect(screen.getByText(/hello world/i)).toBeInTheDocument()
  });
});
