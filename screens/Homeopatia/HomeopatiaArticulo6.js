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

class HomeopatiaArticulo6 extends React.Component {

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
            source={{uri: 'http://www.convivirpress.com/wp-content/uploads/2017/07/homeopat%C3%ADaparaveterinaria6-696x392.jpg'}} />
          

          <Text style={{ fontSize: 20, paddingLeft: 20, paddingTop: 20 }}>Porqué me hice homeópata veterinario</Text>

          <Text style={{ fontSize: 17, textAlign: 'justify', lineHeight: 30, paddingLeft: 20, paddingRight: 20, color: 'grey'}}>
          La clínica es algo apasionante. Explorar al paciente como un detective, ir descubriendo síntomas, agrupándolos, descartando algunos, confirmando otros, para al final encontrar, cual es la enfermedad que padece nuestro paciente y cual la causa que la produjo, con arte y paciencia. Cuando estudiaba en el hospital de la facultad de veterinaria en 1978, utilizábamos un libro maravilloso que era nuestra Biblia, nuestro mundo de la clínica. El Kirk, allí estaba todo lo conocido, y también, las soluciones a todos nuestros problemas. Pero pasó el tiempo y aparecieron nuevas ediciones del Kirk, más modernas, más actuales. Nosotros estudiábamos por el Kirk III en castellano, y luego aparecieron casi seguidos el V y el VI en inglés. Allí fue donde sentí los primeros síntomas. La duda, la incertidumbre, la desconfianza. Con cada nuevo libro, me cambiaban las reglas de juego. Voy a mostrar un ejemplo. La demodexia es una enfermedad de la piel, semejante a la sarna, que según nuestro Kirk III producía una reacción alérgica, que debía ser tratada con corticoides, ya para el V no era alérgica, sino producida por acción del parásito, esto bien documentado por estudios serios a doble ciego. Entonces los corticoides estaban contraindicados, había que matar al parásito. ¿Y a todos los pacientes a los que les apliqué el Depomedrol (prednisolona de depósito) y que yo creí que había curado de su alergia???!!!.
Otra revelación. En realidad lo que yo creía curado, solamente era bloqueado por el corticoide transitoriamente. Que depresión ¡!!! Pero en el Kirk VI, ya se vislumbraba algo que luego se confirmaría en los otros. Los demodex son habitantes normales de la piel de los perros. Entonces no podían ser los culpables de la enfermedad. Aquí es donde aparece el tema del terreno, es decir del enfermo y allí es donde surge la una palabra que luego se
haría muy común: Inmunidad. Tiene las defensas bajas y por eso los demodex atacan. Eso es. Ni corticoides, ni antiparasitarios, ahora inmunoestimulantes. Aquí fue donde mi síndrome Kirk llegó a su mayor intensidad. Ya que lo relatado con la demodexia, valía para cualquiera de las otras miles de enfermedades. Cada vez que salía un nuevo libro de terapéutica se descubría que lo que estábamos haciendo estaba mal y de ahora en adelante
había que hacer. Así desfalleciente, me di cuenta de algo terrible. Si con cada Kirk que saliera, me cambiaban el cuentito, y las enfermedades iban cambiando a medida que los Kirk iban saliendo, me pareció que para ser buen veterinario, la solución sería tener el Kirk nuevo lo antes posible. Me daría cuenta antes que otros: que cosas estaba haciendo mal. Si yo en 1978 tenía la última versión de la clínica y terapéutica y me daba cuenta que lo realizado en 1968, no era lo correcto, no tenía suficiente información, no había estudios detallados, la tecnología no llegaba a descubrir la verdad. Que me quedaba para cuando
fuera 1988,1998, 2008, 2018 o 2228. Siempre estaría haciendo mal las cosas. No hay muchas cosas en terapéutica de duren diez o veinte años. Salvo la aspirina, el
yeso y el enema, todo lo demás fue cambiando a lo largo del siglo. Mi depresión fue total. Llegue a pensar en abandonar todo. Por suerte me salvó la cirugía y traumatología, que siendo bien mecánicas, se mantenían más o menos igual con el tiempo. Eran perdurables. Pasaron los años y siendo ya un traumatólogo bastante respetado por mis colegas y clientes, fui consultado por un colega amigo, (ínter consulta) sobre un caso de una perra ovejera alemán de 16 años, con displasia de cadera, que no podía caminar y estaba todo el día echada en su cucha. Ya habían consultado con otros veterinarios muy respetados
y con mucha más experiencia que la mía, y probado con diferentes tratamientos sin ningún resultado. Luego de revisarla y evaluarla, mi pronóstico fue muy grave: no
había nada que hacer, más que darle algún calmante para que termine sus días de la mejor manera posible. La dueña, mujer muy importante y con mucho dinero, decidió tomar el toro por las astas, y consultar con el reumatólogo humano, más importante del mundo. Y se fue con todos los estudios para Holanda. Consultado el galeno, este la derivó a un veterinario, que trabajaba en sus equipos interdisciplinarios. El veterinario, que residía en
Dinamarca, recibió los estudios, preguntó sobre algunos síntomas, tomó un medicamento de la vitrina y le dijo, dele este remedio, diez gotas dos veces al día. La mujer volvió a Buenos Aires, le dio el remedio y a los dos días la perra, estaba caminando, de buen ánimo y buen apetito. ¿¡QUE LE DIO?! Ese fue el grito que dimos con el colega que la atendía. El remedio, que estaba en danés y tuvimos que traducir, era un remedio homeopático. Al mes estábamos los dos inscriptos en uno de los pocos cursos de homeopatía, para médicos, pero en los que aceptaban veterinarios que había. La Asociación Médica Homeopática
Argentina. En una de las primeras clases, el profesor, un médico de edad, pero muy activo e inteligente, comenzó a hablarnos de terapéutica. Y el libro de terapéutica más
importante se llama Kent y es un repertorio de síntomas. El libro en cuestión fue publicado en el año 1900 recopilando a otros repertorios, que no estaban muy completos. Fue un arduo trabajo de más de 20 años. En mi mente estaba calculando por qué número de Kent irían. A uno cada dos años, más o menos, desde 1900, a 1985, más o menos me daba el Nro 42. No aguanté más y pregunté por qué número de repertorio iban. ¿Cuál era el más
moderno, el más actualizado? El profesor, me miró con cara de no entender la pregunta, y luego de un rato, se sonrió y me dijo: Hay uno solo, fue escrito en el año 1900,
recopilando a otros muy anteriores, y como es muy completo, se usa ese. ¿Pero cómo? ¿No es muy antiguo, no está perimido en lo que dice? No. Si algo está bien en
1900, si algo funciona correctamente en 1900, porque lo íbamos a cambiar. Eso se llama “perdurabilidad”. Ese es el gran respaldo que tiene la homeopatía y que nuestros
colegas alópatas no entienden. Más allá de sí se puede explicar o graficar o exponer matemáticamente, la homeopatía funciona desde hace 200 años de la misma manera y soluciona muchos problemas médicos y ayuda a nuestros pacientes a tener una vida mejor. Eso me tranquilizó tanto, que comencé no solo a aprender homeopatía, sino a disfrutar día a día con ella y a sorprenderme día a día de sus resultados.
Hasta la próxima. Salud y alegría.

M.V. Jorge Muñoz /Médico veterinario homeópata
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

export default HomeopatiaArticulo6;