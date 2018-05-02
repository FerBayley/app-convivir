import React from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Left, Body, Title, Right, Icon, List, ListItem, Thumbnail  } from 'native-base';
import {
    StyleSheet, 
    Text, 
    View, 
    StatusBar,
    TouchableOpacity,
    Share, 
    Image
} from 'react-native';

class ProductoDestacado extends React.Component {

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
          <Left></Left>
          <Body>
            <Title style={styles.textoBotones}>Tratenfu</Title>
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
            source={{uri: 'http://www.convivirpress.com/wp-content/uploads/2018/04/leche-de-almendras-tratenfu-larga-vida-D_NQ_NP_706011-MLA27085540255_032018-F-1068x808.jpg'}} />

          <Text style={{ fontSize: 20, paddingLeft: 20, paddingTop: 20, fontWeight: '800' }}>Lecha de almendras Tratenfu</Text>
          <Text style={{ fontSize: 17, textAlign: 'justify', lineHeight: 30, paddingLeft: 20, paddingRight: 20, color: 'grey'}}>
            Pensada para aquellos que buscan una vida alimenticia más saludable, llega al mercado la primera 
            leche de almendras de industria nacional que se presenta en este formato. Disponible en los 
            sabores: Original, Vainilla y Chocolate. “-Con su envase TetraPak, se logra alargar la vida útil 
            de la leche –sin la necesidad de ningún tipo de conservante ni aditivos– y además el producto ya 
            no depende de la cadena de frío. El mercado argentino de Leche de Almendras es pequeño, pero en 
            expansión. Hoy en día la oferta que existe requiere cadena de frío y tiene un vencimiento 
            corto, lo que dificulta el almacenamiento y la distribución, por eso decidimos crear este producto 
            innovador”, explican desde TRATENFU.  La leche de almendras TRATENFU se presenta en envase de un 
            litro y para el 2018 planean producir 200 mil litros.
          </Text>

          <Text style={{ fontSize: 17, textAlign: 'justify', lineHeight: 30, paddingLeft: 20, paddingRight: 20, color: 'grey'}}>
            Sobre el producto: Es apto para personas con celiaquía, intolerancia a la lactosa, pero también 
            apunta a brindar una solución a todos aquellos que buscan una alimentación más saludable. De esa 
            manera, se convierte en una opción ideal también para quienes eligen suprimir los lácteos en su 
            dieta diaria, ya sea para beber un vaso, comer cereales o cortar el café.
          </Text>

          <Text style={{ fontSize: 16, paddingLeft: 20, paddingTop: 20, fontWeight: '800' }}>Descripción y beneficios:</Text>

          <Text style={{ fontSize: 16, paddingLeft: 20, paddingTop: 20, lineHeight: 30, paddingRight: 20 }}>
            Es una bebida vegetal y natural.
          </Text>

          <Text style={{ fontSize: 16, paddingLeft: 20, paddingTop: 20, lineHeight: 30, paddingRight: 20 }}>
            Libre de gluten y lactosa.
          </Text>

          <Text style={{ fontSize: 16, paddingLeft: 20, paddingTop: 20, lineHeight: 30, paddingRight: 20 }}>
            Libre de gluten y lactosa.
          </Text>

          <Text style={{ fontSize: 16, paddingLeft: 20, paddingTop: 20, lineHeight: 30, paddingRight: 20 }}>
            No contiene aditivos ni conservantes.
          </Text>

          <Text style={{ fontSize: 16, paddingLeft: 20, paddingTop: 20, lineHeight: 30, paddingRight: 20 }}>
            Fortificada en calcio y fuente de vitaminas A, D y B12.
          </Text>

          <Text style={{ fontSize: 16, paddingLeft: 20, paddingTop: 20, lineHeight: 30, paddingRight: 20 }}>
            Mejora la condición cardiovascular.
          </Text>

          <Text style={{ fontSize: 16, paddingLeft: 20, paddingTop: 20, lineHeight: 30, paddingRight: 20 }}>
            Mejora la condición cardiovascular.
          </Text>

          <Text style={{ fontSize: 16, paddingLeft: 20, paddingTop: 20, lineHeight: 30, paddingRight: 20 }}>
            Ayuda a mejorar problemas gastrointestinales.
          </Text>

          <Text style={{ fontSize: 16, paddingLeft: 20, paddingTop: 20, lineHeight: 30, paddingRight: 20 }}>
            Ayuda a bajar el colesterol malo.
          </Text>

          <Text style={{ fontSize: 16, paddingLeft: 20, paddingTop: 20, lineHeight: 30, paddingRight: 20 }}>
            Es un excelente antioxidante.
          </Text>

          <Text style={{ fontSize: 16, paddingLeft: 20, paddingTop: 20, paddingBottom: 30, lineHeight: 30, paddingRight: 20 }}>
            Vencimiento: 10 meses.
          </Text>

          <Text style={{ fontSize: 17, textAlign: 'justify', lineHeight: 30, paddingLeft: 20, paddingRight: 20, color: 'grey'}}>
            TRATENFU SA es empresa argentina con más de diez años de experiencia en el mercado de alimentos 
            saludables. Importan y comercializan la línea de productos Blue Patna, marca líder uruguaya, que 
            incluye desde fideos y arroces, hasta galletitas dulces y saladas. La empresa cuenta con 
            presencia nacional a través de distribuidores, mayoristas y principales cadenas de supermercados 
            que avalan su experiencia a través de todos estos años.
          </Text>

          <Text style={{ fontSize: 17, textAlign: 'justify', lineHeight: 30, paddingLeft: 20, paddingRight: 20, color: 'grey', paddingBottom: 20, paddingTop: 20 }}>MÁS INFORMACIÓN: www.tratenfu.com</Text>

          

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
    height: 550,
    width: '100%'
  }
});

export default ProductoDestacado;