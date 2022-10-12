import { Router } from "./router";
import { GlobalStyle } from "./GlobalStyle";
import { RegisterProvider } from "./contexts/RegisterContext";

const App = () => {
  return (
    <RegisterProvider>
      <GlobalStyle />
      <Router />
    </RegisterProvider>
  );
}

export default App;
