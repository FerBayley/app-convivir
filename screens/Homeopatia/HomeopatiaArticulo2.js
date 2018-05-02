import React from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Left, Body, Title, Right, Icon, List, ListItem, Thumbnail, Fab  } from 'native-base';
import {
    StyleSheet, 
    Text, 
    View, 
    StatusBar,
    TouchableOpacity,
    Share, 
    Image
} from 'react-native';

class HomeopatiaArticulo2 extends React.Component {

  static navigationOptions = {
    header: null,
    headerLeft: null,
    gesturesEnabled: true,
  };  

  onShare(){
    Share.share({
        title: 'ConvivirPress App',
        uri:'http://convivirpress.com/',
        message: 'Descargate la app del periodico Convivir y esta siempre informado sobre todo lo que pasa en el mundo del buen vivir. Descargala en https://www.convivirpress.com'
    });
}

  render() {
    return (

      <Container style={styles.container}>
        <Header style={styles.head}>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' onPress={() => this.props.navigation.navigate('Alimentacion')}
                style={{ color: 'white' }}/>
            </Button>
          </Left>
          <Body>
            <Title style={styles.textoBotones}>Homeopatia</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='share' onPress={this.onShare}
                style={styles.textoBotones}
              />
            </Button>
          </Right>
        </Header>

        <StatusBar
            barStyle="light-content"
        />
        <Content showsVerticalScrollIndicator={false}>
          <Image style={{ width: '100%', height: 150 }}
            source={{uri: 'http://www.convivirpress.com/wp-content/uploads/2017/10/perros-gripe2-696x464.jpg'}} />
          

          <Text style={{ fontSize: 20, paddingLeft: 20, paddingTop: 20 }}>El NOSODE homeopático</Text>

          <Text style={{ fontSize: 17, textAlign: 'justify', lineHeight: 30, paddingLeft: 20, paddingRight: 20, color: 'grey'}}>
          ¿Qué tienen en común dos enfermedades que se dan en dos especies diferentes: El complejo viral respiratorio felino y la Traqueobronquitis infecciosa canina, llamada popularmente “Tos de las perreras”? Las dos enfermedades son transmitidas por un conjunto de microorganismos que actúan en forma conjunta y que no siempre son los mismos. Existe una simbiosis en su accionar. En ambos casos el terreno fértil para el desarrollo de estas verdaderas asociaciones de gérmenes patógenos es fundamental. Recordemos la famosa frase “uno no se enferma de lo que quiere sino de lo que puede”. Vamos a hablar de la prevención y el tratamiento. En ambos casos, como los agentes causales son tan variados y combinados: virus, bacterias y demás yerbas. Las vacunas tienen un efecto relativo. Lo mismo pasa con los antibióticos que no sirven para las virosis. Y como dijimos que el factor “terreno” es fundamental hay que tratar al paciente ayudándolo a convivir con su enfermedad. Los gatitos que padecen el complejo respiratorio, tienen el mayor problema cuando dejan de comer. Sea por la gran congestión nasal o las lesiones en la boca, los mininos no pueden comer. El primer paso en el tratamiento es lograr que coman. Por eso uno de los tratamientos a implementar es el corticoide, que va en contra del sentido común en cuanto a la lucha contra las virosis. No se deberían usar corticoides cuando hay un virus dando vuelta, porque e bajan las defensas. Sin embargo en estos casos una dosis pequeña de dexametasona ayuda a que el gatito vuelva a comer y no se deteriore tanto. Lo mismo pasa con el uso de antibióticos, si bien no sirven para matar virus, sí lo hace con las bacterias que acompañan y con dosis altas de pocos días ayudan mucho a mejorar la calidad de vida. (corticoides en bajas dosis y antibióticos por pocos días es un tema para desarrollar más extenso). Lo importante es reforzar las defensas, modificar el terreno para que mejoren los síntomas, lograr un equilibrio entre enfermo y enfermedad. Para ello los homeópatas tenemos una gran herramienta, que es el NOSODE. 

Un Nosode es el nombre que se usa para hacer mención a un remedio preparado, ya sea del tejido de una enfermedad real, o de organismos asociados con enfermedades, bacterias o virus en forma de cultivo. Para estas enfermedades multietiológicas, la toma de muestras de secreciones patológicas de animales enfermos y la elaboración con esas muestras de los autonosodes para cada animal enfermo es una forma de ayudar y mucho a su tratamiento. Al disponer de una gran cantidad de autonosodes, se puede hacer un pool de ellos para crear un NOSODE de la enfermedad, que se utiliza en cualquier otro caso de la misma patología. Puedo tomar una muestra de secreción patológica: moco, secreción ocular, hisopado de garganta etc. y con eso elaborar un autonosode para ese caso específico o puedo ya tener elaborado un nosode para tos de las perreras o nosode respiratorio para el complejo felino y usarlo en cualquier caso, incluso como preventivo, para cuando hay varios animales en la casa y se enferma uno.  Y funciona muy bien. Incluso en los gatos cuando la enfermedad se hace crónica. Son esos gatos que viven con mocos o conjuntivitis toda la vida. El nosode homeopático se ha transformado en una gran herramienta para tratar este tipo de enfermedades y merece ser conocido y difundido.

Salud y alegría. Hasta la próxima.


          </Text>

        </Content>
        
        <Footer style={styles.footer}>
          <FooterTab style={styles.footer}>

           <Button onPress={() => this.props.navigation.navigate('HomeScreen')}>
              <Icon name="home" style={{ color: '#fff', fontWeight: 'bold' }} />
              <Text style={styles.textoBotonesActive}>Inicio</Text>
            </Button>

            <Button onPress={() => this.props.navigation.navigate('Noticias')}>
              <Icon name="paper" style={{ color: '#fff' }} />
              <Text style={styles.textoBotones}>Noticias</Text>
            </Button>

            <Button onPress={() => this.props.navigation.navigate('Lanzamientos')}>
              <Icon name="send" style={{ color: '#fff', fontWeight: 'bold' }} />
              <Text style={styles.textoBotones}>Lanzamientos</Text>
            </Button>

          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor: '#fff'
  },
  footer: {
    backgroundColor: '#000',
    height: 80
  },
  textoBotones: {
    color: 'white',
    fontWeight: 'bold'
  },
  textoBotonesActive: {
    color: 'white',
    fontWeight: 'bold'
  },
  advisor: {
    flex: 1,
    fontSize: 17, 
    textAlign: 'center', 
    marginTop: 17
  },
  textNovedades: {
    color: '#333', 
    fontSize: 15, 
    textAlign: 'center',
    padding: 15,
  },
  novedadesContainer: {
    backgroundColor: '#00cec9',
    height: 50
  },
  vistas: {
    height: 250,
    width: '100%',
    borderRadius: 10,
    marginTop: 20
  },
  separata: {
    marginTop: 130,
    marginBottom: 130
  },
  head: {
    backgroundColor: '#000000'
  },
  accesos: {
    fontSize: 18,
    textAlign: 'center',
    letterSpacing: 0.5,
    paddingTop: 10
  },
  vidriera: {
    height: 250,
    width: '100%'
  },
  destaque: {
    height: 350,
    width: '100%'
  }
});

export default HomeopatiaArticulo2;