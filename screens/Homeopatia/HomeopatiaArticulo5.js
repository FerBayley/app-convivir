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

class HomeopatiaArticulo5 extends React.Component {

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
            source={{uri: 'http://www.convivirpress.com/wp-content/uploads/2017/08/perro-vegetales.jpg'}} />
          

          <Text style={{ fontSize: 20, paddingLeft: 20, paddingTop: 20 }}>¿Puede el perro recibir una dieta vegana?</Text>

          <Text style={{ fontSize: 17, textAlign: 'justify', lineHeight: 30, paddingLeft: 20, paddingRight: 20, color: 'grey'}}>
          Muchos de mis clientes son vegetarianos, naturistas, algunos veganos y esta pregunta me la hacen siempre. Mi respuesta: Puede pero no debe. Voy a explicar por qué. El perro puede vivir con una dieta vegana, hay perros que lo hacen, pero hay que tener mucho cuidado con la planificación de esa comida. Hay que valorar si el mismo perro estaría en mejores condiciones con una dieta diferente. Hay dietas con las que un animal puede estar en su punto óptimo de salud y condicionamiento, y otras con las que puede vivir; los perros son animales muy resistentes. Recuerdo a mi perra de chico, mi madre la alimentaba con corazón de vaca y restos de cocina y vivió 20 años.
Si para un perro comparas el valor nutricional de una dieta rica en productos animales (carnes, huevos, lácteos…) con otra que es sólo vegetal, hay una diferencia importante. También en la capacidad para digerir unos alimentos y otros. Desde el punto de vista biológico, no procede darle una dieta vegana a un perro, porque es un carnívoro.
Me parece que no tiene beneficio para el perro una dieta vegana, no hay ninguna ventaja. Otra cuestión es que una persona sea vegana y considere también interesante que su perro se alimente de una manera en la que no hay cruel explotación animal. Enfocado así, es comprensible que alguien vegano lo piense. Pero enfocado por el bienestar del perro… Creo que no tiene ninguna base. Ni en digestión, ni en necesidades, ni mucho menos en palatabilidad. Recuerdo un mensaje en un foro vegano: “Soy vegetariana hace muchos años y desde un año vegana aunque no del todo porque tengo un problemilla (sic): no sé qué dar de comer a mis perros…!
He intentado con comida vegetariana, o sea les preparaba lentejas o garbanzos con verduras, aceite de oliva y arroz. Para una temporada todo bien, les gusta, pero como pueden se escapan para ir a cazar (vivo en una zona aislada donde hay un montón de conejos) y yo misma las vi volver con un conejo y comérselo con huesos, piel y todo… O sea que les hace falta la carne… o no? Me pregunto: ¿Es exagerado por mi parte pretender cambiar su naturaleza y obligarlas a comer vegetales en vez que carne?, Pero por otra parte me resulta imposible manejar carne y comprarla… Qué hago??? Seguro habrá muchos de vosotros con animales… para los gatos imagino sea un tema aún más difícil….”
Es un tema complicado. Muchos hacen tripas corazón y compran carne de vaca, pollo o cerdo o se rinden a usar alimento balanceado para perros o para gatos. En los gatos creo que no hay otro camino. Algunos respetando la dieta natural del perro, tratando de imitar lo que los lobos comen en la naturaleza, han optado por una dieta llamada BARF. Donde se dan los alimentos crudos: carnes, huesos y vegetales. Como en estado silvestre los lobos o los cánidos ingieren vegetales ya digeridos que están en el estomago de sus presas. Los perros no digieren bien los vegetales crudos, por lo que hay que agregar a la dieta suplementos necesarios para completar una buena nutrición: enzimas digestivas, calcio, vitaminas, ácidos grasos esenciales, etc. Lo que complica bastante la preparación de estas dietas. Tengo varios pacientes que comen Barf y están muy bien alimentados y sus responsables (no me gusta la palabra dueños), se bancan todo el trabajo dearmar la comida.
No tengo pacientes totalmente vegetarianos, pero ya hay en el mercado un alimento vegano para perros con el que se puede probar. Tal vez necesiten algún suplemento. Es un tema nuevo y hay que dejar que pase el tiempo para saber su eficiencia. Hay otra gran discusión que es la de dar alimentos balanceados comerciales o comida natural preparada en casa. Los perros no digieren bien los hidratos de carbono y los cereales son uno de los mayores inductores de alergias por lo que recomiendo hacer dietas naturales. Pero muchos de mis pacientes comen balanceados y los toleran perfectamente. Hay otros que no. Cada ser es diferente y único. Por lo que cada caso es también diferente y único.
Resumiendo: teniendo en cuenta cada caso individual es la dieta que recomiendo. Si es natural con proteínas de origen animal en su mayoría y verduras hervidas con agregados de aceite, calcio y fibras, mejor. Si por comodidad o por filosofía se opta por otra dieta, trato de buscar la mejor forma para adaptarla a cada caso. Siempre es posible. El perro es carnívoro no obligatorio, que se puede adaptar a otras dietas, pero los gatos son carnívoros obligatorios que sí o sí necesitan carne en sus comidas.

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

export default HomeopatiaArticulo5;