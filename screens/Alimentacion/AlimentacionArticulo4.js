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

class AlimentacionArticulo4 extends React.Component {

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
            <Title style={styles.textoBotones}>Microbioma</Title>
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
            source={{uri: 'http://www.convivirpress.com/wp-content/uploads/2018/02/microbioma-696x492.jpg'}} />
          

          <Text style={{ fontSize: 20, paddingLeft: 20, paddingTop: 20 }}>Sembrando un intestino saludable: Microbioma</Text>

          <Text style={{ fontSize: 17, textAlign: 'justify', lineHeight: 30, paddingLeft: 20, paddingRight: 20, color: 'grey'}}>
          El microbioma se refiere a los miles de millones de bacterias que viven en el cuerpo humano, particularmente en el intestino. Cualquier cambio en la abundancia, composición o diversidad de estos microorganismos puede tener consecuencias importantes para la salud.

Los factores que afectan la composición del microbioma son: el modo de parto, la lactancia materna, la exposición a antibióticos y los patrones de alimentación.

Las bacterias que están presentes en el tracto digestivo del recién nacido proceden de la madre. En los primeros días de vida, la población de Lactobacillus (bacterias ácidófilas “buenas”) es muy numerosa, sobre todo en los niños alimentados con leche materna.  Los efectos benéficos de la lactancia materna son bien conocidos, varios estudios proporcionan evidencia al demostrar que las bacterias probióticas presentes en la leche materna se transfieren al lactante.

Un área clave donde el microbioma puede ser particularmente importante es en el desarrollo del cerebro del recién nacido, con resultados potenciales que van desde los efectos sobre la cognición, la ansiedad, el estado de ánimo y la sociabilidad.

El microbioma intestinal tiene además múltiples funciones; como la síntesis de las vitaminas K y B12, la digestión de los carbohidratos complejos que se encuentran en plantas y frutas. Contribuyen también en la inmunidad innata y adaptativa, en la señalización y en la comunicación celular y se han involucrado con algunas vías metabólicas. Hay claras evidencias de que participa en la patogenia de varias enfermedades como trastornos funcionales del aparato digestivo, intolerancias alimentarias, alergia a alimentos, enfermedad inflamatoria intestinal, obesidad, diabetes y aterosclerosis.

Para cultivar una variedad de bacterias intestinales, podemos consumir diversos alimentos con fibra, presente en una dieta rica en verduras, frutas, cereales integrales y legumbres. La fibra dietética o prebióticos, escapa la digestión en el intestino delgado, pero se fermenta por las bacterias ácidófilas que tenemos en el colon.

Otro alimento para los microorganismos saludables es el almidón resistente, que se encuentra en los cereales integrales, la pasta, el arroz y las papas cocidas y luego enfriadas. Algunas personas encuentran que es más fácil aumentar la ingesta de almidón resistente que la fibra, debido a su mejor tolerancia.

Los alimentos fermentados contienen una buena cantidad de microbios beneficiosos, que promueven la salud, llamados probióticos. Cuando uno come estos alimentos regularmente, ayuda a mantener o mejorar la población de microbios buenos en el intestino. En la actualidad, el uso de los fermentados resurgió y es más común consumirlos, aunque es un tipo de alimento que tiene una larga historia en todas las culturas y siempre fueron muy apreciados por sus beneficios para la salud. ¿Cuáles son? Kéfir; fermentados de soja, como el tempeh y el miso, o vegetales fermentados como el chucrut, kéfirkraut, pickles y kimchi.

Los granos de kéfir son una mezcla de levadura y bacterias, que viven en una asociación simbiótica. Los efectos antibacterianos, antifúngicos, antialérgicos y antiinflamatorios son algunas de las propiedades beneficiosas para la salud de los granos de kéfir. Además, se sugiere que algunos de los compuestos bioactivos del kéfir, tales como polisacáridos y péptidos, tienen un gran potencial para la inhibición de la proliferación y la inducción de la apoptosis en células tumorales.


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

export default AlimentacionArticulo4;