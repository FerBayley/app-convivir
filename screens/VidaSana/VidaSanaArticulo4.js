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

class VidaSanaArticulo4 extends React.Component {

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
            source={{uri: 'http://www.convivirpress.com/wp-content/uploads/2017/06/poder-mente-696x392.jpg'}} />
          

          <Text style={{ fontSize: 20, paddingLeft: 20, paddingTop: 20 }}>¿Se puede sanar con la imaginación?</Text>

          <Text style={{ fontSize: 17, textAlign: 'justify', lineHeight: 30, paddingLeft: 20, paddingRight: 20, color: 'grey'}}>
          Hace aproximadamente treinta años llegó a mis manos el libro: “Amazing Secrets of Psychic Healing” Asombrosos Secretos de Curaciones Psíquicas, 1976 Parker Publishing Company USA. Los autores: Benjamin O. Bibb y Joseph J. Weed, tenían un instituto en Tampa, Florida. El libro lo guardé en mi biblioteca para posteriormente leerlo, aunque lo aparté de los demás libros porque me pareció muy fantasioso pero a la vez interesante; se trataba de un compendio más parecido a la carpintería o a la mecánica, porque en forma imaginaria había que desarmar, limpiar y armar nuevamente, partes del cuerpo humano como si se tratara de una máquina. Lo primero de lo primero consistía en pedir permiso a la persona a sanar, mediante un teléfono también imaginario, para saber si quería ser sanado, a los efectos de respetar el libre albedrío. A este método lo patentaron bajo el nombre de “Medipic”.
Y llegó el día en que iba a poner en práctica los conocimientos del libro: Una mañana vino al taller uno de mis empleados, se lo veía muy preocupado, recién llegado de Bariloche de un viaje de fin de curso con sus compañeros de grado y he aquí que su preocupación se debía a que su mejor amigo había quedado internado en un hospital del centro turístico porque contrajo meningitis. El estado de salud del muchacho era muy comprometido, estaba en coma y los padres debieron viajar para hacerse cargo de sus cuidados y estudiar la posibilidad de traerlo a Buenos Aires para su atención en un centro médico de alta complejidad, podía morir.
Ya que no implicaba riesgo alguno, decidí ayudarlo usando el método del libro, cosa que comuniqué a mi empleado esperando su aprobación y así pedirle datos del muchacho. Necesitaba saber el nombre completo, fecha de nacimiento, hospital donde se hallaba internado, piso y número de cama, entre otros datos y si me podía mostrar alguna fotografía de él. El procedimiento lo hice a la hora de la siesta y me demandó aproximadamente dos horas. A media tarde mi empleado me llamó por teléfono para preguntarme si había hecho la sanación a distancia porque tenía muy buenas noticias de Bariloche, el muchacho había salido del coma y lo traerían a su casa porque estaba en condiciones de viajar. Al poco tiempo retornó a la vida normal.
Me costó mucho convencerme de que había sido efectivo lo que hice esa tarde y no creer que fue obra de la casualidad. Los métodos de sanación a distancia los usé exitosamente en muchas personas, pero, debido a un gran disgusto, deje de hacerlo y guarde el libro decepcionado porque no pude curar la enfermedad terminal de mi novia que se había sometido a los tratamientos ortodoxos en un hospital oncológico.
• Una gran amiga, me avisa tardíamente que en Rio de Janeiro hay un Templo Espirita llamado “Tupyara” que hacen Operaciones Fluídicas a distancia. Me contó que a su sobrino de 17 años le detectaron un tumor en un hueso de la pierna y que por la gravedad se la amputarían. La familia estaba destruida, mandaron la carta a Tupyara, escrita de puño y letra por el enfermo, al mes le contestaron diciendo que lo iban a operar a distancia, dándole fecha y hora, ese día debía permanecer en la cama con ropa blanca. No debía comer carne, fumar ni ingerir alcohol por un mes previo a la operación. Podía haber en la habitación una persona de acompañante. Llegó el día y fue “operado”, es decir; él se mantuvo quieto en la cama a la hora indicada leyendo pasajes de la Biblia. Luego los “curativos” a realizarse de forma similar durante cuatro semanas. A los tres días de la “operación” los dolores habían desaparecido y al mes la tomografía no mostraba ya el tumor.
• Hace unos años estaba yo en pareja con una psicóloga transpersonal y excelente reikista. Me llamaba la atención de que luego de recibir una llamada a su celular, se paraba mirando fijamente hacia un punto cardinal con las palmas de las manos extendidas quedándose inmóvil por varios minutos. Luego empezaba a bostezar y a llorarle los ojos, a los minutos su celular volvía a sonar, era la persona que había recibido la sanación que la llamaba para agradecerle. Un día, extrañado, le pregunté ¿Qué estaba haciendo?, y me dijo que mandaba reiki a distancia.
• Tiempo después en una exposición, la causalidad me lleva a conocer a un parapsicólogo llamado Eduardo Lambertt. Estaba sentado en una mesa y en su mano tenía un pequeño péndulo de bronce que lo hacía oscilar sobre un papel escrito con el nombre de una persona. Esa persona estaba sentada frente a él y seguía atentamente las indicaciones de Lambertt. Me acerqué. En la mesa rezaba un cartel que decía: “Sanación Psicoespiritual SIN SHOW”. Observé con sigilo para no interrumpir: Lambertt indicaba a la persona que haga ciertos movimientos con la cabeza, luego con los omóplatos y cervicales. A continuación mientras pasaba el péndulo por el nombre escrito en el papel, el mismo oscilaba en círculo para luego detenerse. A cada oscilación Lambertt anotaba con pequeños círculos de birome en el papel. Luego se persignaba y apoyaba suavemente su mano sobre el nombre escrito de la persona. Mientras hacía esto bostezaba a más no poder. A esto lo llamó: “Imposición de manos a distancia”, bueno, no a mucha distancia porque la persona que recibía la sanación estaba sentada frente a él. Al preguntarle por otros nombres anotados en el papel dijo que eran familiares de la persona que los estaba sanando a distancia, me dejó sorprendido. Luego me invitó a sentar diciendo que me iba a “limpiar” y que no me cobraría porque una “voz” en su oído se lo estaba indicando así, pregunté:“limpiar de que?”. “Parásitos energéticos” – dijo.
Lambertt continuó diciéndome que si bien él había estado nueve años con el Padre Mario Pantaleo, y lo había iniciado en esto, pero el método que usaba con su péndulo, lo llamó radiestesia, no era el mismo del Padre, sino que era propio.
Con Lambertt estamos trabajando en equipo desde hace 7 años, me ha enseñado mucho y dice que también él aprendió mucho de mí (Los domingos en la feria de mataderos nos pueden visitar, en el anexo el puesto dice: Auténtica Foto Kirlian).
• Paracelso, el médico suizo renacentista (alquimista del siglo XVI) que es considerado el padre de la moderna farmacopea y de la medicina científica, decía:
“El hombre tiene un taller visible y otro invisible. El visible es el cuerpo, el invisible es la imaginación (la mente). La imaginación es el sol en el alma del hombre. Hace que las formas del alma acudan a la existencia. El cuerpo físico del hombre se forma a partir de su alma invisible.”
“El espíritu es el maestro, la imaginación la herramienta, y el cuerpo es el material plástico. El poder de la imaginación es un gran factor en la medicina; puede crear enfermedades en el hombre y en los animales así como puede curarlas. La enfermedad del cuerpo puede ser curada por remedios físicos o por el poder del espíritu que actúa a través del alma”.
Por el Ing. Guillermo Marino Cramer
Autor del libro: “Crónica de un viaje
a lo desconocido” Ed. DUNKEN
Email: skyjetar@gmail.com

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

export default VidaSanaArticulo4;