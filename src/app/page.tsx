'use client'
import { useState } from "react";
import style from './page.module.css'
import { Button, CopyButton } from "@mantine/core";

export default function Home() {
  const [senha, setSenha] = useState('') //estado aonde eu vou armazenar o gerador de senha, utilizando o state, o torno mais dinamico e facil a rendirização


  const caracteres =[
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
    "1","2","3","4","5","6","7","8","9","0","!","@","#","$",
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
  ] // array aonde eu armazeno os caracteres que irei usar para fazer a senha 

  const gerador = () => { //função criada para gerar uma senha atraves do array de cima e armazenar ela em setSenha
    let novaSenha = '' // aqui eu fiz um let
    for(let x = 0; x <=11;x++){
      const contador = Math.floor(Math.random()*caracteres.length)
      novaSenha += caracteres[contador]
    }

    setSenha(novaSenha)
  }

  return (
    <div className={style.container}>
      <div className={style.main}>
        <button className={style.button}
          onClick={(e) =>{e.preventDefault(); gerador()}}
        >Gerar senha</button>
        <p className={style.text}>{senha}</p>
        <CopyButton value={senha}>
          {({ copied, copy }) => (
            <Button className={style.buttonM} onClick={copy}>
              {copied ? 'Copiado!' : 'Copiar senha'}
            </Button>
          )}
        </CopyButton>
      </div>
    </div>
  );
}
