import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';


describe('TEST',()=> {
  test('renders learn react link', () => {
    render(<App/>);
    const Happy_hacking = screen.getByText(/Happy hacking!!!/i);
    const button = screen.getByRole('button')
    const input = screen.getByPlaceholderText(/input value/i)
    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(Happy_hacking).toBeInTheDocument();
    expect(input).toMatchSnapshot();
  });


  test('renders learn reactdfdv', async () => {
    render(<App/>);
    // const Happy_hacking = screen.queryByText(/Happy/i)
    // expect(Happy_hacking).toBeInTheDocument()
    const Happy_hacking = await screen.findByText(/data/i)
    expect(Happy_hacking).toBeInTheDocument()
  });

  test('renders learn reactdfddfv', async () => {
    render(<App/>);
    const button = screen.getByTestId('togle-test')
    expect(screen.queryByTestId('togle-elem')).toBeNull();
    fireEvent.click(button)
    expect(screen.queryByTestId('togle-elem')).toBeInTheDocument();
    fireEvent.click(button)
    expect(screen.queryByTestId('togle-elem')).toBeNull();
  })

})
