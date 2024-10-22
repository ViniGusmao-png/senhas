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

  const gerador = () => { //função criada para gerar uma senha atraves do array de cima e armazenar ela em setSenha.
    let novaSenha = '' // aqui eu fiz um let aonde será armazenado a senha.
    for(let x = 0; x <=11;x++){ // aqui eu fiz um loop for que itera de 0 a 11 e contando de um em um.
      const contador = Math.floor(Math.random()*caracteres.length) // aqui eu fiz uma constante contador que tem o Math.floor que retornara sempre arredonda o valor e depois eu peguei o math.random para pegar aleatoriamente os caracteres até o limite de length. 
      novaSenha += caracteres[contador] //aqui to atribuindo o array caracteres que tem como contador seu novo array para novaSenha que antes estava vazia.
    }

    setSenha(novaSenha) //e salvo a nova senha em setSenha.
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
