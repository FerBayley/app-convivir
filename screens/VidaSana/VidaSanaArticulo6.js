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

class VidaSanaArticulo6 extends React.Component {

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
              <Icon name='arrow-back' onPress={() => this.props.navigation.navigate('VidaSana')}
                style={{ color: 'white' }}/>
            </Button>
          </Left>
          <Body>
            <Title style={styles.textoBotones}>Vida Sana</Title>
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
            source={{uri: 'http://www.convivirpress.com/wp-content/uploads/2018/02/clorofila-696x521.jpg'}} />
          

          <Text style={{ fontSize: 20, paddingLeft: 20, paddingTop: 20 }}>El poder de la clorofila</Text>

          <Text style={{ fontSize: 17, textAlign: 'justify', lineHeight: 30, paddingLeft: 20, paddingRight: 20, color: 'grey'}}>
          Las plantas tienen un compuesto extraordinario que las mantienen sanas, brillantes y frescas, claro si se les proporciona los elementos básicos e indispensables. Lo mismo sucede con los seres humanos, si procuramos una vida sana y equilibrada en la que se aporte los nutrimentos necesarios, tendremos energía, alegría y belleza por más tiempo.

Para la gran mayoría de las personas esto puede resultar difícil o inalcanzable. Complementar nuestra alimentación con Clorofila nos traerá grandes beneficios producto de años de investigación:

Anemia: La Clorofila aumenta la cantidad de hierro en la hemoglobina de los glóbulos rojos.

Antitranspirante: Para pieles sensibles que no toleran los antitranspirantes, al tomar todos los días Clorofila deodorizan su cuerpo de adentro hacia fuera; también se puede aplicar directamente en las axilas.

Caries: El tomar Clorofila ayuda a eliminar bacterias que causan caries.

Cicatrización: La Clorofila contiene Vitamina K, la cual es responsable de una buena cicatrización, así que aplicado o tomado, ayuda en las heridas y a evitar infecciones.

Digestión: Al tomar Clorofila como agua de uso o en las comidas, ayuda a una buena digestión por las enzimas que contiene.

Eczema: Para sarampión, varicela, escarlatina o rubéola, después del baño aplicar clorofila con una gasa.

Garganta inflamada: Hacer gárgaras con Clorofila sin diluir.

Gingivitis: Después del aseo dental con cepillo, cuando se presente el sangrado, hacer buches de clorofila sin diluir, dejándola reposar un rato en la boca.

Hemorroides: Aplicar fomentos de Clorofila sin diluir en la zona afectada.

Heridas: Lavar la herida y aplicar la Clorofila directa o con una gasa para estimular la cicatrización.

Herpes Zoster Corporal: Aplicar después del baño.

Hongos: Aplicar con algodón en la zona afectada, si se encuentra en pies o manos, sumergir unos minutos en agua con Clorofila.

Indigestión: Tomar agua con Clorofila para activar la producción de enzimas.

Inflamación de ojos: Aplicar compresas con clorofila fría en los párpados.

Mal aliento: Hacer buches después del aseo dental, así como consumir Clorofila con agua durante el día.

Pie de atleta: En baños con Clorofila, ayuda a reducir los síntomas como resequedad y mal olor.

Picaduras de insecto: En lugares calurosos donde los insectos abundan, la Clorofila ayuda a que se sequen con mayor rapidez sin dejar cicatriz.

Quimioterapia y radiación: Para ayudar al cuerpo a proteger y regenerar las células sanas así como a evitar la caída del cabello, tomar durante todo el día antes y después de los tratamientos, agua con Clorofila en abundancia.

Rozaduras bebés: Para la p el delicada de los bebés, es mejor algo natural sin químicos para proteger, sanar y restaurar su piel.

Sinusitis: Con un gotero aplicar Clorofila diluida en las fosas nasales.

Tos: Tomar sin diluir dos cucharadas en la noche.

Transfusiones de sangre: Tomar antes y después para apoyar la recuperación.

Úlcera péptica: Se recomienda tomar durante todo el día diluída en agua.
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

export default VidaSanaArticulo6;