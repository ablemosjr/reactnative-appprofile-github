# Introdução ao React Native :iphone:

Conteúdo na plataforma da DIO para introdução ao uso __*React Native*__.

## Criação App para divulgação do Git Hub
<img src="https://user-images.githubusercontent.com/89210954/174637808-57b2e098-3b43-4dc1-9a03-9fdc20c8f47d.png" width="400" height="400" />

Os tópicos foram:
- Conhecendo o _React Native_
- Documentação:
	- Componentes
	- _API_
	- Comunidade
- Setup:
	- Instalações:
		- Chocolatey
		- Node.js
		- Java (JDK)
		- Yarn
		- Android Studio
> Utilizado `Expo CLI` ao invés do uso do `React Native CLI`
- Criação do Projeto
- Projeto do _App_ de profile:
	- Passando pelas estruturas:
		- *View*
		- *Text*
		-  *Stylesheet*
		- *SafeAreaView*
		- *Image*
		- *Pressable*
		- _Linking API_
- Aprender a utilização de código nativo no _AndroidManifest.xml_ na abertura de link

~~~javascript
<queries>
	<intent>
		<action android:name="andoid.intent.action.VIEW" />
		<category  android:name="android.intent.category.BROWSABLE" />
		<data  android:scheme="https" />
	</intent>
</queries>
~~~

## Desafio
Incluir histórico de atividade _Github_ com mensagem ou um desenho.

<img src="https://user-images.githubusercontent.com/89210954/175354931-8401b74c-86ff-4cc9-b4c9-6400f8e97673.png" width="400" height="" />

#### Códigos
##### Declarando:
~~~javascript 
const dayoff = '#30363d'; // Day off 0
const colorHistory = '#006d32'; // Verde claro 1
const colorActivy = '#39d353'; // Verde escuro 2
const historic = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 2, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0],
  [0, 0, 0, 0, 0, 2, 0, 0, 2, 2, 0, 0, 0, 0, 2, 0, 0],
  [0, 0, 0, 0, 2, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 2, 0],
  [0, 0, 0, 0, 2, 0, 0, 0, 2, 2, 2, 0, 0, 0, 2, 2, 0],
  [0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0],
  [0, 0, 0, 0, 0, 2, 2, 0, 0, 2, 2, 2, 0, 2, 0, 0, 0],
  [0, 0, 0, 0, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];
~~~

##### View e JS:
~~~javascript
<View style={style.historicContainer}>{
	historic.map(linha =>
              linha.map(coluna => {
                if(coluna === 2) {
                  return <View style={[style.square ,style.activy]}/>;
                } else if (coluna === 1) {
                  return <View style={[style.square, style.history]}/>;
                } else {
                  return <View style={style.square}/>;
                }
              }),
            )}
</View>
~~~

##### StyleSheet:
~~~javascript
  historicContainer: {
    width: '60%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },

  square: {
    backgroundColor: dayoff,
    width: 10,
    height: 10,
    borderRadius: 2,
    margin: 1,
  },

  history: { backgroundColor: colorHistory, },
  activy: { backgroundColor: colorActivy, },
~~~

> _Digital Innovation One_ : [dio.me](https://www.dio.me/)
> 
> _React Native_ : [reactnative.dev](https://reactnative.dev/)
