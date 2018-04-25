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

class AlimentacionArticulo5 extends React.Component {

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
            <Title style={styles.textoBotones}>Alimentación</Title>
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
            source={{uri: 'http://www.convivirpress.com/wp-content/uploads/2018/01/despues-de-las-fiestas-696x394.jpg'}} />
          

          <Text style={{ fontSize: 20, paddingLeft: 20, paddingTop: 20 }}>Alimentación después de navidad</Text>

          <Text style={{ fontSize: 17, textAlign: 'justify', lineHeight: 30, paddingLeft: 20, paddingRight: 20, color: 'grey'}}>
          Comienzo de un nuevo año, nuevas sueños y metas por cumplir y con ellos quedaron atrás los días de fiestas, reuniones y comidas ricas en grasa y llenas de calorías vacías. Así que, si en navidad tu alimentación fue pésima y quieres empezar este año nuevo con una alimentación saludable y poder eliminar todos los excesos consumidos en diciembre, aquí te explicamos cómo aprender a depurar tu organismo después de las fiestas y como potenciar al máximo tu salud y bienestar.

Alimentación depurativa. (De 5 a 7 días)

¿Qué es? 
Este tipo de alimentación está especialmente pensada para restablecer nuestro organismo de períodos de excesos alimentarios, en este caso las pasadas navidades. Funciona desintoxicando el organismo, eliminando rápidamente las sustancias tóxicas de una dieta poco adecuada. Así mismo buscamos con esta terapia alimentaria un periodo de descanso del excesivo trabajo que hemos provocado al aparato digestivo, al sistema linfático y el sistema excretor encargado de expulsar las sustancias de desecho procedentes del metabolismo sometido a un excesivo consumo de comida ricas en grasas y azucares.

¿Qué tipos de alimentos debo consumir?
• Jugos detox e Infusiones En este periodo de tiempo, estos jugos o licuados resultan fundamentales para la eliminación de toxinas, son elaborados a base de alimentos alcalinos y tizanas que promueven el proceso de desintoxicación y pérdida de peso. Las jugueras utilizadas para tal fin logran un producto con baja concentración en fibra que facilita de tal manera el proceso de digestión. Normalmente se basan en jugos que están compuesto por una fruta cítrica + vegetales de elección y acompañado de semillas (opcional). Es importante aclarar qué para desintoxicar tu cuerpo no tienes que dejar de comer ni tomar puros jugos o polvos, lo que sí es que puedes complementar tu alimentación con alguno de estos jugos cargados de vitaminas que te pueden ayudar si tuviste una temporada de comidas pesadas.

• Jugo de zanahoria, ananá y cúrcuma 2 zanahorias 1 cucharada de cúrcuma (si no la encuentras la puedes sustituir por jengibre) 1 naranja El ananá y la cúrcuma son antiinflamatorias, protegen las células del daño y bajan los niveles de las enzimas que causan inflamación. Los dos tienen un rico sabor combinado y aún mejor con zanahoria.

• Jugo verde detox 1 taza de espinacas. 1/2 taza de ananá cortada en cuadritos 1/2 pepino 1 manzana Así mismo tanto la espinaca como el pepino y el ananá poseen propiedades diuréticas y depurativas que promueven el proceso de eliminación de toxinas.

• Tés e Infusiones
– Infusión de alcachofa, manzanilla, boldo o diente de león: estas son solo unas de las infusiones más usadas para estos periodos de depuración debido a que poseen propiedades antinflamatorias, antibacterianas y depurativas. Para su elaboración utilizar de una a 2 cucharaditas, colocar en el momento que empiece a hervir el agua y luego reposar por 2 minutos, colarlo y listo puedes, consumirlas frías o calientes.
– Té verde: Antioxidante, depurativo y un poco estimulante. Las sustancias que contiene este té son de gran interés nutricional y funcional, sobre todo flavonoides con acción antioxidante (catequinas, rubigenina, flavina y taninos). La clave está en añadir el agua a 85° grados aproximadamente, a la taza con el té verde (mejor a granel) y dejarlo reposar 2 a 3 minutos, para aprovechar al máximo sus compuestos biodisponibles y el punto idóneo de teína.

Es importante resaltar que todos estos jugos, Te e infusiones es importante realizar su consumo preferiblemente en las mañanas antes de comer, como acompañante de una merienda o antes de dormir. Pero nunca sustituirlo por una comida principal. Un plan de alimentación depurativo para que realmente funcione debe realizarse de manera razonable y en ayuda de tu especialista en nutrición de confianza. Así mismo otros alimentos funcionales para este periodo de depuración y desintoxicación son: Caldo de verduras, arroz integral, vegetales verdes, pollo, pescados azules, frutos secos y semillas entre otros. Qué esperas para empezar este 2018 cambiando y mejorando tus hábitos de alimentación al máximo!!

Michelle Angarita Soto
Equipo de Nutrisión /New Garden

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

export default AlimentacionArticulo5;