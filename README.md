<h1 align="center">DOOM Fire</h1> 

<div align="center">
	<img src="https://user-images.githubusercontent.com/37752370/150434504-9fe39046-be27-471f-b23a-13256d8b55cb.gif" width="500" height="300">
</div>


![a](https://img.shields.io/static/v1?label=JavaScript&message=%20&color=yellow&style=for-the-badge&logo=)
![a](https://img.shields.io/static/v1?label=HTML5&message=%20&color=orange&style=for-the-badge&logo=)
![a](https://img.shields.io/static/v1?label=CSS3&message=%20&color=purple&style=for-the-badge&logo=)

> Status do Projeto: ✔️ Concluído

### Sumário 

- [Descrição do projeto](#descrição-do-projeto)
- [Pré-requisitos](#pré-requisitos)
- [Deploy](#deploy)
- [Como usar](#como-usar)
- [Cores](#cores)
- [Inspiração](#inspiração)
- [Licença](#licença)

 

## Descrição do projeto 

<p align="justify">
	Fogo do DOOM feito com js
</p>


## Pré-requisitos

1. um navegador compatível com canvas como:
	- [Chrome](https://www.google.pt/intl/pt-PT/chrome/?brand=ISCS&gclsrc=ds&gclsrc=ds)
	- [Brave](https://brave.com/download/)

## Deploy 

> Link do deploy: https://guilhermerinaldi.github.io/DOOM_fire/

## Como usar

No terminal, clone o projeto: 

```
git clone https://github.com/GuilhermeRinaldi/DOOM_fire
```
## Cores

Para facilitar o uso e melhorar o desempenho as cores do projeto original foram alteradas pelo seguinte código em python para HEX:

```py
fireColorsPalette = [{"r":7,"g":7,"b":7},{"r":31,"g":7,"b":7},{"r":47,"g":15,"b":7},{"r":71,"g":15,"b":7},{"r":87,"g":23,"b":7},{"r":103,"g":31,"b":7},{"r":119,"g":31,"b":7},{"r":143,"g":39,"b":7},{"r":159,"g":47,"b":7},{"r":175,"g":63,"b":7},{"r":191,"g":71,"b":7},{"r":199,"g":71,"b":7},{"r":223,"g":79,"b":7},{"r":223,"g":87,"b":7},{"r":223,"g":87,"b":7},{"r":215,"g":95,"b":7},{"r":215,"g":95,"b":7},{"r":215,"g":103,"b":15},{"r":207,"g":111,"b":15},{"r":207,"g":119,"b":15},{"r":207,"g":127,"b":15},{"r":207,"g":135,"b":23},{"r":199,"g":135,"b":23},{"r":199,"g":143,"b":23},{"r":199,"g":151,"b":31},{"r":191,"g":159,"b":31},{"r":191,"g":159,"b":31},{"r":191,"g":167,"b":39},{"r":191,"g":167,"b":39},{"r":191,"g":175,"b":47},{"r":183,"g":175,"b":47},{"r":183,"g":183,"b":47},{"r":183,"g":183,"b":55},{"r":207,"g":207,"b":111},{"r":223,"g":223,"b":159},{"r":239,"g":239,"b":199},{"r":255,"g":255,"b":255}]
chex = ''
for i in range(len(fireColorsPalette)):
	color = fireColorsPalette[i]
	chex += ("'" + '#%02x%02x%02x' % (color['r'], color['g'], color['b']) + "', ")

print('[' + chex + ']')

```


## Inspiração

Inspirado pelo vídeo [Tutorial completo de como programar o Fogo do DOOM (JavaScript puro)](https://www.youtube.com/watch?v=fxm8cadCqbs").
Repósitorio do projeto [filipedeschamps/doom-fire-algorithm](https://github.com/filipedeschamps/doom-fire-algorithm)

## Licença 

The [MIT License]() (MIT)

Copyright © 2022 - DOOM Fire
                                                      
