import { StatusBar } from 'expo-status-bar';
import {
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  Image,
  Pressable,
  Linking
} from 'react-native';

const colorGitHub = '#010409';
const imageProfileGitHub = 'https://avatars.githubusercontent.com/u/89210954?v=4';
const details = '#C9D1D9';
const colorFontGitHub = '#8B949E';
const colorFontGitHub2 = '#6E7681';
const urlToGithub = 'https://github.com/ablemosjr';

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

export default function App() {
  const handlePressGoToGithub = async () => {
    //console.log('Verificando link.');
    const res = await Linking.canOpenURL(urlToGithub);
    if(res) {
      //console.log('Link aprovado.');
      //console.log('Abrindo link...');
      await Linking.openURL(urlToGithub);
    }
  }

  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={colorGitHub} barStyle='light-content' />
      <View style={style.content}>
        <Image 
          accessibilityLabel='Foto de perfil GitHub'
          style={style.avatar} 
          source={{uri: imageProfileGitHub}} />
          <Text 
            accessibilityLabel='Nome de perfil'
            style={[style.defaultText, style.name]}>
              Alessandro B Lemos Jr
          </Text>
          <Text 
            accessibilityLabel='Nickname do usu??rio'
            style={[style.defaultText, style.nickname]}>
              ablemosjr
          </Text>
          <Text 
            accessibilityLabel='BIO do usu??rio'
            style={[style.defaultText, style.description]}>
              console.log(`Ol?? mundo!! Alessandro ?? um aluno na FACENS, cursando ADS`);
          </Text>
          <Text 
            accessibilityLabel='BIO 2 do usu??rio'
            style={[style.defaultText, style.description]}>
              Dev Front-end / Node.js / React Native
          </Text>
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
          <Pressable onPress={handlePressGoToGithub}>
            <View style={style.button}>
              <Text style={[style.defaultText, style.TextButton]}>
                Open in Github
              </Text>
            </View>
          </Pressable>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1, //Expande para tela inteira
    backgroundColor: colorGitHub,
    justifyContent: 'center',
  },
  
  content: {
    alignItems: 'center',
    padding: 20,
  },
  
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: details,
    borderWidth: 1,
  },

  defaultText: { color: details, },

  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
  },

  nickname: {
    fontSize: 15,
    color: colorFontGitHub2,
  },

  description: {
    fontSize: 13,
    fontWeight: 'bold',
    color: colorFontGitHub,
  },

  button: {
    marginTop: 30,
    backgroundColor: colorFontGitHub,
    borderRadius: 10,
    padding: 14,
  },

  TextButton: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'white',
  },

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
})
