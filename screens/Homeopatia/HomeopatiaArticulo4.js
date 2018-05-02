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

class HomeopatiaArticulo4 extends React.Component {

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
            source={{uri: 'http://www.convivirpress.com/wp-content/uploads/2017/08/Dr-House.jpg'}} />
          

          <Text style={{ fontSize: 20, paddingLeft: 20, paddingTop: 20 }}>Lo primero es no dañar</Text>

          <Text style={{ fontSize: 17, textAlign: 'justify', lineHeight: 30, paddingLeft: 20, paddingRight: 20, color: 'grey'}}>
          Hipócrates: padre de la medicina lo decía en griego. “Primum non nocere”. Precepto que muchos se olvidan a la hora de elegir un tratamiento o un procedimiento médico.

Leyendo trabajos científicos he notado que en los últimos tiempos aparecen muchos que indican y refuerzan esta frase. Alertan sobre los tratamientos apresurados, realizados sin pensar, sólo por verlos publicados en alguna gacetilla, generalmente escrita por interesados laboratorios de medicamentos.

Vamos a los hechos: En el tratamiento de las cistitis o de infecciones urinarias, se utilizan rutinariamente antibióticos que con el paso del tiempo ya no funcionan, porque han generado resistencia. Al estudiar profundamente el tema, se ha descubierto que muchas de esas supuestas infecciones en realidad son bacterias normales de la orina, forman parte de la microflora urinaria como pasa también con el intestino grueso y su biota, de la que ya hablé en otro artículo. Por lo tanto no tiene sentido matar a algo que es normal, y además con el riesgo de generar la tan temida resistencia. Al usar estos antibióticos están dejando de lado otros medicamentos menos agresivos y más efecticos: antisépticos urinarios como la tintura de arándano, algunos antiinflamatorios y ni que hablar de los medicamentos homeopáticos que trabajan sobre la inmunidad y no matan sino que regulan, equilibran…

El diagnóstico de “infección urinaria” (“IU”) es ambiguo, sobreutilizado y puede llevar a la antibioticoterapia excesiva y perjudicial. La “bacteriuria significativa”, central en la mayoría de las definiciones de “IU,” no identifica a las personas que se beneficiarán con el tratamiento. Los “síntomas urinarios” también son poco informativos. La bacteriuria y los síntomas remiten y recidivan de manera espontánea. La utilidad del tratamiento es escasa. Las pruebas diagnósticas actuales demuestran que las vías urinarias tienen una flora bacteriana ubicua y compleja. El reconocimiento de este micro bioma, indetectable con los métodos de cultivo actuales, brinda una nueva perspectiva de la “IU.” La mayoría de las personas que reciben tratamiento por “IU” probablemente estarían mejor sin este. Hacer hincapié sobre la importancia del micro bioma y emplear el término “disbiosis de las vías urinarias” en lugar de “IU” también podría ser útil y quizás estimularía el estudio de las relaciones entre huésped, envejecimiento, micro bioma, enfermedad y antibioticoterapia. (Extracto de infección urinaria, requiem para un peso pesado de Intramed )

El otro tema del cual he leído es el cáncer de mama en mujeres. Resulta que los métodos de detección temprana logran identificara estos posibles tumores malignos en sus etapas iniciales, años antes de lo que se detectaba hace un tiempo atrás. Esto que parecería algo muy bueno en realidad no lo es, ya que la ortodoxia hace que apenas veamos esas células presuntamente malignas, se indiquen tratamientos quimioterápicos o radiaciones, tempranas, que son más dañinas que la propia enfermedad. Muchos de esos presuntos tumores, luego no se desarrollan o se mantienen en equilibrio con el cuerpo y no prosperan hacia ningún lado, pero al ser atacados por la quimio reaccionan, se transforman y se malignizan. En veterinaria ante la presencia de un tumor de mama, observo primero su evolución, equilibro al paciente con remedios homeopáticos y luego se indica o no la cirugía de acuerdo a la evolución de dicho tumor.

Hay otros papers, que indican que muchos procedimientos diagnósticos son peligrosos. El exceso de tomografías computadas que se sobreindican por cualquier motivo, no tiene en cuenta que esos rayos son cancerígenos, sobretodo en bebés, en niños pequeños. Las recomendaciones actuales indican perfectamente cuando usarlos y cuando no.

Los dermatólogos veterinarios hace ya un tiempo que tratan de no usar mas antibióticos de uso general para los problemas de piel. Ahora se usan las lociones, los sprays de antisépticos locales.

Resumiendo: veo con alegría que hay una reacción de la comunidad médica seria al avance de la propaganda médica. Estos médicos independientes, tienen en cuenta a Hipócrates y sus consejos de “lo primero es no dañar”, buscando métodos alternativos al abuso de procedimientos o químicos agresivos. Bienvenidos al nuestro mundo de no agresión al paciente.

No tengo que recordar que la homeopatía nació como contrapartida a los tratamientos agresivos que se utilizaban a comienzos del siglo XIX. Han pasado doscientos años y la cosa sigue más o menos igual. La ciencia médica avanza a pasos agigantados, pero los conceptos se mantienen o por lo menos tratan de mantenerse.

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

export default HomeopatiaArticulo4;