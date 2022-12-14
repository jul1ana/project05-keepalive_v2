import * as C from "./styles";

interface IValidate {
  password: string
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
        <C.Span status={validation.minCharacter}> 
          <C.Icon status={validation.minCharacter} />
          minímo de 6 caracteres.
        </C.Span> 
        <C.Span status={validation.number}> 
          <C.Icon status={validation.number} />
          mínimo 1 número.
        </C.Span>
        <C.Span status={validation.specialCharacter}> 
          <C.Icon status={validation.specialCharacter} />
          mínimo 1 caracter especial.
        </C.Span>
        <C.Span status={validation.letterLower}> 
          <C.Icon status={validation.letterLower} />
          mínimo 1 letra minúscula.
        </C.Span>
        <C.Span status={validation.letterUpper}> 
          <C.Icon status={validation.letterUpper} />
          mínimo 1 letra maiúscula.
        </C.Span>
      </div>
    </C.Container>
  );
}