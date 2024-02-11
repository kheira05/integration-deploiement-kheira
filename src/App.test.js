import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

let errorSpy;

beforeEach(() => {
  errorSpy = jest.spyOn(console, "error").mockImplementation(() => {});
});

afterEach(() => {
  errorSpy.mockRestore();
  localStorage.clear();
});
test("champs a l ecran", () => {
  render(<App />);
  const prenomInput = screen.getByTestId("prenom");
  const nomInput = screen.getByTestId("nom");
  const emailInput = screen.getByTestId("email");
  const dateNaissanceInput = screen.getByTestId("dateNaissance");
  const villeInput = screen.getByTestId("ville");
  const codePostalInput = screen.getByTestId("codePostal");

  expect(prenomInput).toBeInTheDocument();
  expect(nomInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(dateNaissanceInput).toBeInTheDocument();
  expect(villeInput).toBeInTheDocument();
  expect(codePostalInput).toBeInTheDocument();
});

test("bouton désactivé si champ vide", () => {
  render(<App />);
  const envoyerButton = screen.getByRole("button", { name: /Envoyer/i });
  expect(envoyerButton).toBeDisabled();
}); 

test("bouton activé si tous les champs sont remplis", () => {
  render(<App />);

  const prenomInput = screen.getByTestId("prenom");
  const nomInput = screen.getByTestId("nom");
  const emailInput = screen.getByTestId("email");
  const dateNaissanceInput = screen.getByTestId("dateNaissance");
  const villeInput = screen.getByTestId("ville");
  const codePostalInput = screen.getByTestId("codePostal");
  const envoyerButton = screen.getByRole("button", { name: /Envoyer/i });

  fireEvent.change(prenomInput, { target: { value: "gueddoura" } });
  fireEvent.change(nomInput, { target: { value: "kheira" } });
  fireEvent.change(emailInput, { target: { value: "kheira@gmail.com" } });
  fireEvent.change(dateNaissanceInput, { target: { value: new Date('08/05/2000') } });
  fireEvent.change(villeInput, { target: { value: "Nice" } });
  fireEvent.change(codePostalInput, { target: { value: "06300" } });

  expect(envoyerButton).not.toBeDisabled();
}); 

test('code postal rempli', () => {
  fireEvent.change(screen.getByTextId('codePostal'), { 
    target: { value: '' } 
  });
  const envoyerButton = screen.getByRole("button", { name: /Envoyer/i });
  fireEvent.click(envoyerButton);
  expect(envoyerButton).toBeDisabled();
});

test('email rempli', () => {
  fireEvent.change(screen.getByTextId('email'), { 
    target: { value: '' } 
  });
  const envoyerButton = screen.getByRole("button", { name: /Envoyer/i });
  fireEvent.click(envoyerButton);
  expect(envoyerButton).toBeDisabled();
});

test('prenom rempli', () => {
  fireEvent.change(screen.getByTextId('prenom'), { 
    target: { value: '' } 
  });
  const envoyerButton = screen.getByRole("button", { name: /Envoyer/i });
  fireEvent.click(envoyerButton);
  expect(envoyerButton).toBeDisabled();
});

test('nom rempli', () => {
  fireEvent.change(screen.getByTextId('nom'), { 
    target: { value: '' } 
  });
  const envoyerButton = screen.getByRole("button", { name: /Envoyer/i });
  fireEvent.click(envoyerButton);
  expect(envoyerButton).toBeDisabled();
});