programa
{

inclua biblioteca Matematica --> mat
funcao inicio(){
	
	numeros()
	bhaskara()
}
funcao numeros(){

	inteiro num1, num2, num3, media

escreva("Digite o primeiro número: ")
leia(num1)
escreva("Digite o segundo número: ")
leia(num2)
escreva("Digite o terceiro número: ")
leia(num3)

media = (num1 + num2 + num3) / 3
escreva("A média dos números é: ", media, "\n")

}

funcao bhaskara(){

	inteiro a, b, c
     inteiro delta, x1, x2
        escreva("Digite o valor de a\n")
        leia(a)
        escreva("Digite o valor de b\n")
        leia(b)
        escreva("Digite o valor de c\n")
        leia(c)
        delta = b*b - 4 *a*c
        x1 = (-b + mat.raiz(delta, 2))/2*a
        x2 = (-b - mat.raiz(delta, 2))/2*a
        escreva("x1 = "+x1+"\nx2 = "+x2+"\n")
    }
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 120; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */