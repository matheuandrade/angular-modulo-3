import { FormGroup } from '@angular/forms';

export const usuarioSenhaIguais = (formGroup: FormGroup) => {
  const userName = formGroup.get('userName')?.value as string ?? ''
  const password = formGroup.get('password')?.value as string ?? ''

  if(!(userName.trim() + password.trim())){
    return null
  }else {
    return userName !== password ? null : {senhaIgual: true}
  }
}
