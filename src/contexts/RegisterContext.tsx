import { createContext, ReactNode, useContext, useReducer, useState } from 'react';

type State = {
  fullName: string;
  setFullName: (newState: string) => void;

  email: string;
  setEmail: (newState: string) => void;

  password: string;
  setPassword: (newState: string) => void;

  confirmationPassword: string;
  setConfirmationPassword: (newState: string) => void;
}
type RegisterProviderProps = {
  children: ReactNode
};

const initialData: State = {
  fullName: "",
  setFullName: () => { },

  email: "",
  setEmail: () => { },

  password: "",
  setPassword: () => { },

  confirmationPassword: "",
  setConfirmationPassword: () => { },
}

export const RegisterContext = createContext(initialData);

export const RegisterProvider = ({ children }: RegisterProviderProps) => {
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmationPassword, setConfirmationPassword] = useState<string>("");

  return (
    <RegisterContext.Provider
      value={
        {
          fullName, setFullName,
          email, setEmail,
          password, setPassword,
          confirmationPassword, setConfirmationPassword
        }
      }>
      {children}
    </RegisterContext.Provider>
  );
}

export const useRegister = () => {
  const context = useContext(RegisterContext);
  if (context === undefined) {
    throw new Error("É necessário que o useRegister seja utilizado dentro do RegisterProvider");
  }
  return context;
}