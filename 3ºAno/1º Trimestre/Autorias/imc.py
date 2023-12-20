def imc():
    peso = float(input("Digite o peso em kg: "))
    altura = float(input("Digite a altura em metros: "))
    res = round(peso / (altura ** 2), 2)

    if res < 18.5:
        resultado = "Abaixo do peso"
    elif 18.5 <= res < 25:
        resultado =  "Peso normal"
    elif 25 <= res < 30:
        resultado =  "Sobrepeso"
    elif 30 <= res < 35:
        resultado =  "Obesidade grau 1"
    elif 35 <= res < 40:
        resultado =  "Obesidade grau 2"
    else:
        resultado =  "Obesidade grau 3"
    
    print(f"Seu IMC é {res}, o que é classificado como: {resultado}")

imc()