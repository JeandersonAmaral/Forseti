import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

df = pd.DataFrame({'Candidatos': 'teste'}, index=range(0, 1))

concorrentes = []
votantes = 0
votos = []
dicionario = {}

turma = str(input('Qual a sua turma: '))
candidatos = int(input('Quantos candidatos terão: '))

for i in range(0, candidatos):
    candidato = str(input(f'Digite o nome do candidato {i}: '))
    print(f'O candidato {candidato} terá o número {i}')

    dicionario.update({i: candidato})
    concorrentes.append([candidato, i])

eleitores = int(input('Quantos eleitores terão: '))

for j in range(0, eleitores):
    voto = int(input(f'Qual o seu voto: {concorrentes}: '))
    valor = dicionario[voto]
    votantes += 1

    for k in range(j, j+1):
        df.loc[k] = valor

final = df.value_counts()
df = final.reset_index()

if final[0] < ((eleitores / 2) + 1):
    df = pd.DataFrame({'Candidatos': 'teste'}, index=range(0, 1))
    print(f'\n\nSegundo turno entre os candidados {final.index[0]} e {final.index[1]}')
    dicionario = {}
    dicionario.update({0: final.index[0]})
    dicionario.update({1: final.index[1]})
    for j in range(0, eleitores):
        voto = int(input(f'Qual o seu voto: [{final.index[0]}, 0] ou [{final.index[1]}, 1]: '))
        valor = dicionario[voto]
        votantes = 0
        votantes += 1

        for k in range(j, j+1):
            df.loc[k] = valor

    final = df.value_counts()
    df = final.reset_index()

    plt.figure(figsize=(14, 7))
    sns.barplot(x='Candidatos', y=0, data=df)
    plt.title(f'Votação da turma {turma} para representante de turma', fontsize=22)
    plt.xlabel('Candidatos', fontsize=16)
    plt.ylabel('Quantidade de votos', fontsize=16)
    plt.show()
    print(f'O vencedor do segundo turno foi {final.index[0]}, parabéns representante')
    print(f'O segundo lugar foi {final.index[1]}, parabéns vice-representante')
else:
    plt.figure(figsize=(14, 7))
    sns.barplot(x='Candidatos', y=0, data=df)
    plt.title(f'Votação da turma {turma} para representante de turma', fontsize=22)
    plt.xlabel('Candidatos', fontsize=16)
    plt.ylabel('Quantidade de votos', fontsize=16)
    plt.show()
    print(f'O vencedor da votação foi {final.index[0]}, parabéns representante')
    print(f'O segundo lugar foi {final.index[1]}, parabéns vice-representante')
