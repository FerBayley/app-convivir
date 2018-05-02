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

class MedioAmbienteArticulo4 extends React.Component {

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
            <Title style={styles.textoBotones}>Medio Ambiente</Title>
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
            source={{uri: 'http://www.convivirpress.com/wp-content/uploads/2018/01/41227687_303-696x392.jpg'}} />
          

          <Text style={{ fontSize: 20, paddingLeft: 20, paddingTop: 20 }}>La acidificación de los océanos: consecuencia directa del cambio climático</Text>

          <Text style={{ fontSize: 17, textAlign: 'justify', lineHeight: 30, paddingLeft: 20, paddingRight: 20, color: 'grey'}}>
          La sobrepesca, la contaminación por los plásticos y el calentamiento de las aguas comprometen la sobrevivencia de una vida acuática. Pero ahora, nuestra amenaza más grande es una de las consecuencias más insidiosas de nuestra habilidad para botar carbono en la atmosfera: la acidificación de los océanos. La química oceánica se está alterando Ulf Riebesell, investigador del centro de estudio sobre el océano de Kiel (GEOMAR), explica que los océanos absorben más de un cuarto de las emisiones de dióxido de carbono. “El dióxido de carbono reacciona con el agua de mar para formar lo que llamamos ácido carbónico. Cuanto más dióxido de carbono absorban los océanos, más se acidifican”. En los últimos ocho años, Riebesell dirigió el programa de búsqueda alemán Biological Impact of Ocean Acidification (BIOACID). Sus hallazgos fueron presentados en la COP 23 de Bonn (Alemania). Con las islas Fiyi en la presidencia de esta conferencia climática se impulsó un acuerdo de cooperación, Ocean Pathway, para enfatizar el asunto de los océanos en los debates sobre el clima. Si reaccionaran cantidades normales de dióxido de carbono con el agua de mar no habría ningún problema. Pero los niveles de dióxido de carbono en las atmosfera no son normales desde hace tiempo, incluso alcanzaron cifras récords en 2016, según la Organización Meteorológica Mundial. Esto repercute en los océanos, cuya acidez alcanza niveles peligrosos. Una situación de pérdida mutua “La acidificación continúa, pero los océa- nos pierden también lo que llamamos su capacidad tampón”, dice Riebesell. Cuan- to más se acidifica, menos dióxido de carbono puede absorber.” Si los océanos absorben menos dióxido de carbono, esto significa que se queda más dióxido de carbono se queda en la atmosfera, acelerando el calentamiento global en una situación en la que pierden ambos, el mar y la atmosfera. El agua de mar no contaminado tiene un pH de 8,2. Desde la revolución industrial este pH cayó a 8,1. No parece mucho, pero representa una disminución de 26% en comparación con los niveles preindustriales. Un riesgo para todos los ecosistemas Allanah Paul, una de los investigadores del GEOMAR, observó los efectos de la acidificación de los océanos en la vida marina, usando un bote laboratorio en la costa noruega llamado “mesocosm”. “Contenemos el agua, a la manera de una bolsa de plástico que baja para poder simular las modificaciones de la química oceánica”, explica. “El ecosistema entero reacciona a estos cambios. Los organismos que se calcifican por ejemplo. Cuando uno baja el pH del agua de mar, tienen que usar más energía para generar el calcio de la cual está formada su concha, porque se disuelven en agua de mar que tiene un pH más bajo.” Los organismos que se calcifican son los corales, los crustáceos, los moluscos y variedades de plancton que luchan para que crezcan sus esqueletos en aguas acidas. Estas amenazas sobre ciertas especies tienen consecuencias directas sobre las criaturas que dependen de ellas para alimentarse o protegerse. No a los mariscos Y esto afecta a los individuos. La industria de ostras de la costa del estado norteamericano de Oregón ya se vio afectada por la acidificación de los océanos. Y los peces pueden ser un peligro también, por culpa de los efectos de la acidificación de los océanos sobre su desarrollo pero también porque se alimentan con especies alteradas. Riebesell y su equipo investigaron el impacto de la acidificación de los océanos sobre el bacalao polar. “Observamos que su capacidad de sobrevivir disminuye en un 50% si están expuestos a concentraciones moderadamente aumentadas de dióxido de carbono”, dice. “Las futuras poblaciones de bacalao podrían disminuir a una cuarta parte o hasta una doceava parte de su tamaño actual, lo que tendrá un impacto masivo en las pesquerías”. La acidificación de los océanos: consecuencia directa del cambio climático Efecto destructivo en la vida polar Debido a que el agua fría disuelve más CO2 que los mares más cálidos, la acidificación afecta especialmente a la vida en las regiones polares. “Estas aguas se volverán más corrosivas, lo que significa que tendrán condiciones en las que las capas de carbonato de calcio y los esqueletos comenzarán a disolverse”, explica Riebesell. “Muchos organismos no sobreviviran bajo esas condiciones en el Ártico y la Antártida. La biodiversidad se verá afectada”. Algunas zonas del Ártico ya son corrosivas, con lo cual Riebesell y sus colegas calcularon que la mayoría de las aguas superficiales en la Antártida se volverán igualmente corrosivas en unas pocas décadas, dadas las tasas actuales de emisiones de CO2. Sin tiempo para adaptarse Al igual que con los efectos del calentamiento global provocados por el hombre, los cambios en la química del océano están ocurriendo más rápido de lo que las especies marinas pueden tolerar. La última investigación muestra que la tasa actual de acidificación es más de 10 veces más rápida que en cualquier periodo de los últimos 55 millones de años. Eso significa que muchas especies no tendrán ninguna posibilidad de adaptarse a su nuevo entorno a través de la evolución. Los científicos que participaron del informe BIOACID advierten que la única manera de detener la acidificación de los océanos es un recorte drástico en las emisiones mundiales de CO2. Sin embargo, incluso si el planeta lograra reducir sus emisiones tal y como lo indica el Acuerdo de París de mantener el calentamiento global por debajo de 2 grados Celsius (3.6 grados Fahrenheit), podría no ser suficiente para detener la acidificación.

 

Kiel Lars Bevanger 
DW
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

export default MedioAmbienteArticulo4;