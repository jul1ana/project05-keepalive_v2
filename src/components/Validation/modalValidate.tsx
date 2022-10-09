import * as C from "./styles";

interface IValidate {
  password: string,
  mode: boolean
}

export function ModalValidation({password, mode}:IValidate) { 

  const validation = {
    minCharacter: /.{6,}/gm.test(password),
    number: /(?=.*?[0-9])/gm.test(password),
    specialCharacter: /(?=.*?[#?!@$%^&*-])/gm.test(password),
    letterLower: /(?=.*?[a-z])/gm.test(password),
    letterUpper: /(?=.*?[A-Z])/gm.test(password)
  }

  return(
    <C.Container fade={mode}>
      <div>
        <h4>Sua senha deve conter:</h4>
        <C.Span status={validation.minCharacter}> <C.Icon status={validation.minCharacter}></C.Icon>minímo de 6 caracteres</C.Span> 
        <C.Span status={validation.number} > <C.Icon status={validation.number}></C.Icon>mínimo 1 número.</C.Span>
        <C.Span status={validation.specialCharacter} > <C.Icon status={validation.specialCharacter}></C.Icon>mínimo 1 caracter especial.</C.Span>
        <C.Span status={validation.letterLower} > <C.Icon status={validation.letterLower}></C.Icon>mínimo 1 letra minúscula.</C.Span>
        <C.Span status={validation.letterUpper} > <C.Icon status={validation.letterUpper}></C.Icon>mínimo 1 letra maiúscula.</C.Span>
      </div>
    </C.Container>
  );
}