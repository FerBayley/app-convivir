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

class MedioAmbienteArticulo2 extends React.Component {

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
            source={{uri: 'http://www.convivirpress.com/wp-content/uploads/2018/02/oxigeno-696x522.jpg'}} />
          

          <Text style={{ fontSize: 20, paddingLeft: 20, paddingTop: 20 }}>Inhalamos…¿oxígeno?</Text>

          <Text style={{ fontSize: 17, textAlign: 'justify', lineHeight: 30, paddingLeft: 20, paddingRight: 20, color: 'grey'}}>
          Las zonas con mayor contaminación suelen ser, las más pobladas e industrializadas. Estos lugares van dejando pasar y olvidando de a poco –o eso pareciera –la importancia de verde a nuestro alrededor. Y al referirme a esto, no quiero decir a tener una planta en casa! Me refiero a los espacios verdes en la ciudad: amplios, cuidados, abiertos, educativos, recreativos. Lugares que renueven el aire que nos rodea y nos ayude a limpiarlo. La contaminación del aire es un riesgo. Pero, ¿por qué y cómo? Porque esta problemática puede traer aparejadas enfermedades cerebrovasculares, cánceres de pulmón, cáncer relacionado con las vías urinarias y la vejiga y dificultades de respiración, como neumopatías crónicas y agudas que pueden devenir en la muerte. La OMS (Organización Mundial de la Salud) nos cuenta que las partículas PM 2.5 que se pueden encontrar en el aire son las más pequeñas y perjudiciales ya que pueden penetrar directamente en los pulmones y marca que el nivel más “razonable” de estas partículas es de 10 microgramos por metro cúbico. Superando esa cantidad, el aire es perjudicial, y siendo menos, el aire es limpio.

Por eso es importante que el aire del lugar donde habitamos sea seguro, limpio y lejos de los niveles considerados de contaminación. Y este es un trabajo que debe ser llevado a cabo por normativas y medidas de los gobiernos a nivel nacional e internacional en relación a residuos enérgicos, construcción, agricultura, transporte, electricidad, industria. Algunos ejemplos de acciones vinculadas al cuidado de la calidad del aire pueden tener que ver con tecnologías limpias para que las chimeneas de las industrias no sean nocivas, mejorar el movimiento de los desechos urbanos y agrícolas, admisión de formas limpias para generar electricidad tanto para los transportes como para otros servicios, mantener la ciudad adaptada con formas de moverse más saludables como bicicletas y peatones, etc.

Veamos ejemplos de calidad del aire:

Argentina: Nuestro país es un caso excepcional. Y aún más nuestra ciudad capital. No hay una Red de Monitoreo de Aire acorde a la magnitud de la Ciudad Autónoma de Buenos Aires ya que sólo se cuenta con cuatro estaciones ubicadas en distintos puntos de la urbe. Una Red de Monitoreo controla la calidad ambiental del entorno en el que se encuentra a través de un examen constante. Así se genera una base de información firme y representativa para controlar y revisar los niveles de contaminación del aire y de esta manera realizar estrategias para proteger la salud y el ambiente.

Los contaminantes que se encuentran en el ambiente tienen que ver con muchos de los aspectos descriptos antes (transporte, industrias, actividad agrícola, etc.).

En las cuatro estaciones que se encuentran actualmente en la ciudad, se monitorean monóxido y dióxido de nitrógeno (NO –NO2), monóxido de carbono (CO) y variables atmosféricas como vientos, temperatura, presión. Sin embargo, hay algunos contaminantes que son los que la OMS considera nocivos que no se calculan del todo. Se entiende que en una ciudad tan grande, se debería contar con por lo menos diez centros de monitoreo. Lo mismo sucede en cualquier ciudad de Argentina: lamentablemente faltan estaciones automáticas de examen ambiental.

Sin embargo, se sabe por los parámetros de investigación realizado por la OMS, que el nivel de calidad de aire de nuestro país no es saludable, encontrándose una gran exposición de la población a PM10, aunque tampoco se lo considera nocivo. Y más allá de esto, debe ansiarse que la calidad sea mejor.

Chile: Nuestro país vecino, es otro caso particular. Contrario a lo que sucede en Argentina, Chile sabe y presenta graves problemas con la calidad de su aire. En lo que va del año se han registrado 14 alertas de emergencia y de preemergencia. Este país cuenta con un monitoreo en línea que busca las concentraciones ambientales de MP10 y MEP 2.5 y cuando hay alertas de emergencia o preemergencia toda la ciudad mantiene medidas que se llevan a cabo tales como no realizar actividades deportivas al aire libre, se prohíben las quemas agrícolas, restricción vehicular y vías exclusivas de transporte, prohibición de calefactores a leña. Santiago de Chile es considerado una de las ciudades más contaminadas de América Latina pero cuenta con una gran voluntad política para trabajar con ello y regular y mejorar la situación climática y de contaminación ambiental.

Uruguay: Este pequeño país es la excepción y el extremo contrario de Chile. Uruguay, semanalmente emite dos informes de la Red de Monitoreo. Uno registra la calidad base de la ciudad con el registro de cinco estaciones y el otro marca la evaluación del impacto de las fuentes más significativas del departamento con el informe de cuatro estaciones. Está considerado uno de los países con mejor calidad el aire del mundo según un informe de la Universidad de Yale y de uno de la OMS. La ubicación geográfica de este país ayuda a mantener limpio el aire por la prevalencia de vientos, su relieve suave sin grandes accidentes topográficos y la cercanía del Río de la Plata que ayudan a la dispersión de cualquier tipo de contaminante. Uruguay, sigue con su trabajo para la mejoría y el mantenimiento de la buena calidad de aire realizando trabajos de articulación interinstitucional con organismos nacionales y departamentales que permiten mantener informado sobre el estado del aire y mejorar maneras de la gestión.

México: En este país, los indicadores calculan cinco contaminantes: dióxido de azufre, monóxido de carbono, dióxido de nitrógeno, ozono y partículas suspendidas. En líneas generales, la calidad del aire en México es regular o mala, provocando un número muy elevado de muertes anuales por esta causa. Algunas campañas se encuentran llevando adelante algunas acciones para concientizar y dar a conocer la situación y de esta manera que se hagan operaciones para garantizar y promover la mejora de la calidad del aire.

Brasil: Por su parte, el país más grande de América Latina, también cuenta con un nivel de contaminación grande. La ciudad de San Pablo registró en 2014 los índices más contaminados de los últimos 7 años en calidad de aire. Las pocas precipitaciones tuvieron su papel importante para esta problemática por mantener la humedad en un nivel bajo y el aire caliente contaminado, entonces, quedó estancado en la urbe. Por ser uno de los países más urbanizados, la salud pública se ve muy afectada por la contaminación del aire aun cuando hay políticas y programas que abordan la contaminación del aire y el cambio climático. Sin embargo, estas medidas no se llevan adelante o no se presta la misma atención a realizarlas en los distintos lugares del país, por lo que provocan el incumplimiento o no producen éxito.

Son muchos los países que tienen mala calidad de aire, lo cual pide a gritos tomar medidas que equiparen y ayuden a mejorar el aire que respiramos.

 

Gisela Medrano
CONVIVIR
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

export default MedioAmbienteArticulo2;