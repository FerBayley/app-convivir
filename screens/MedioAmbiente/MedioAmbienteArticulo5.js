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

class MedioAmbienteArticulo5 extends React.Component {

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
            source={{uri: 'http://www.convivirpress.com/wp-content/uploads/2017/11/vacas-pedos-696x392.jpg'}} />
          

          <Text style={{ fontSize: 20, paddingLeft: 20, paddingTop: 20 }}>¿Pueden las vacas con menos flatulencias ayudar al planeta?</Text>

          <Text style={{ fontSize: 17, textAlign: 'justify', lineHeight: 30, paddingLeft: 20, paddingRight: 20, color: 'grey'}}>
          Ubicada en Kota, a unos 500 kilómetros al suroeste de la capital india de Nueva Delhi, la granja de lácteos orgánicos GAU es el hogar de alrededor de 130 vacas en 16 hectáreas. “GAU” significa vaca en hindi, pero también representa los nombres de los tres directivos de la finca: los hermanos Gagandeep, Amanpreet y Uttamjyot Singh.

Su padre fundó la granja hace 15 años. Inicialmente fue un proyecto complementario hasta que sus hijos la convirtieron en un verdadero negocio. Amanpreet Singh, de 27 años, observa cuidadosamente sus vacas mientras mastican pasto verde orgánico picado finamente con brotes de maíz. La mezcla produce emisiones mucho más bajas que los aproximadamente 500 litros de metano que suele liberar una vaca al día.

“Hemos reducido la emisión total de metano en un 60 a 70% reduciendo únicamente el suplemento alimentario” – cuenta  Amanpreet,- y añade que la granja utiliza alfalfa y una hierba local de nombre “Makkhan”. El alimento se cultiva en agua sin suelo utilizando una técnica conocida como hidropónica.

Los hermanos han podido determinar la reducción de emisiones liberando hexafluoruro de azufre como gas trazador y midiendo las muestras de aire recolectadas alrededor de la nariz y boca de la vaca mediante un cromatógrafo de gases.

El pasto verde reduce las emisiones de metano

Científicos indios también están investigando otras estrategias de reducción del metano para el ganado, incluida la alimentación de granos fermentados, así como de hierbas.

“La adición de aceites vegetales y algunas especias indias a la dieta bovina también reducen la producción de metano”, explica la Dr. Seema Midha, nutricionista animal del laboratorio estatal de nutrición para el ganado de Rayastán. “Bloquean la disponibilidad de hidrógeno a los microbios que habitan los intestinos del ganado, restringiendo así la reacción química del carbono con el hidrógeno y por lo tanto la formación de metano”, aclara.

Una mezcla de forraje ecológico hace que las vacas tengan menos flatulencias, según los agricultores de la granja de GAU.

Los responsables políticos locales también están teniendo en cuenta la creciente evidencia de una correlación entre la dieta vacuna y la emisión de metano. El estado de Rayastán incluirá recomendaciones para los forrajes, que disminuyan las emisiones de metano y aumenten la producción de leche.

La política debe proporcionar un incentivo a los ganaderos. En el estado de Rayastán, donde se encuentra Kota, está prohibido sacrificar vacas. Por eso, la producción de leche y de ghee (una especie de mantequilla clarificada muy utilizada en la medicina tradicional ayurveda) es una de las pocas razones para la cría de ganado bovino. El estiércol es otra.

Excremento útil

A pesar de las grandes reducciones en las emisiones de metano, las vacas de la granja GAU siguen defecando mucho. Y cuando el estiércol se descompone, también libera gas metano. Pero los hermanos Singhs han encontrado el modo de hacer un buen uso de los excrementos de las vacas.

La orina y el estiércol de vaca de la granja van a parar a una planta de biogás, donde generan 40 kilovatios de electricidad al día, suficiente para abastecer energéticamente a toda la hacienda, según Amanpreet.

La granja de GAU funciona con electricidad proveniente de su planta de biogás.

Los residuos también producen un abono orgánico rico en nutrientes. “El estiércol y la orina de vaca restantes, se mezclan con otros desperdicios vegetales o alimenticios y así como con lombrices de tierra”, explica Giriraj Sharma, responsable del proceso. “Este es un abono muy bueno para todo tipo de plantas, frutas, cultivos y verduras”, añade.

Estiércol con un propósito espiritual

La granja también vende estiércol seco de vaca por Internet. La sustancia semilíquida primero se seca y después se calienta en grandes cocinas solares. Luego se envía por correo en cajas de cartón, cuidadosamente embalada, por toda la India. Los hermanos venden entre 500 y 1.000 porciones a la semana, cuyo precio ronda las 120 rupias (1,50 euros) la docena.

A veces se utilizan para calentar y cocinar, pero también en ceremonias religiosas. Los rituales hindúes de Yajna, por ejemplo, incluyen oraciones ofrecidas en frente de un fuego sagrado alimentado con estiércol seco de vaca.

“El estiércol de vaca es muy importante”, dice el sacerdote hindú Pandit Ravi Shastri, en un templo cerca de la Granja GAU. “Es muy puro y santo”, agrega. Cuando se quema, también se dice que repele a los mosquitos y otros insectos.

Difusión del conocimiento

La India se encuentra bajo presión para reducir sus emisiones de gases de efecto invernadero con el fin de cumplir los objetivos climáticos de París fijados en 2015. Los agricultores de GAU esperan que sus esfuerzos ayuden a lograrlo y para ello también comparten sus conocimientos con los demás agricultores locales.

Bhawani Singh, de 53 años de edad, ha venido a la granja para aprender más sobre el uso de excrementos de vaca. Es uno de los 10 agricultores que asisten a un taller sobre “manejo del estiércol de vaca” organizado por la granja.

“Este es un método muy simple y fácil para darles una salida a los subproductos de las vacas de una forma eficiente. No se necesita mucho dinero ni tiempo y se puede aplicar en todas partes”, explica Bhawani. Y por ello quiere difundir el conocimiento aún más: “educaré a los agricultores de mi aldea para que adopten este modelo a fin de tener vacas sanas y un clima limpio”, concluye.

 

Jasvinder Sehgal
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

export default MedioAmbienteArticulo5;