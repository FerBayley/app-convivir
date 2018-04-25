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

class VidaSanaArticulo3 extends React.Component {

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
            source={{uri: 'http://www.convivirpress.com/wp-content/uploads/2017/07/corre-verduras-696x348.jpg'}} />
          

          <Text style={{ fontSize: 20, paddingLeft: 20, paddingTop: 20 }}>Sanamente y al máximo</Text>

          <Text style={{ fontSize: 17, textAlign: 'justify', lineHeight: 30, paddingLeft: 20, paddingRight: 20, color: 'grey'}}>
          La importancia de la calidad del alimento sobre el metabolismo en general ya no se discute, aunque sí podremos encontrar distintas campanas al explicar qué es un alimento sano, y en todo caso está bien que así suceda.
Sin embargo poco se puede encontrar sobre la acción directa que tiene el alimento sobre las hormonas y neurotransmisores. En Argentina el Dr Carmelo Nicotra (psiquiatra) y el Dr. Jorge Esteves (oncólogo) llevaron un estudio paralelo en más de 20.000 personas.
Qué buscaban con este estudio?
Encontrar la causa de las depresiones, alteraciones neuronales, adicciones y todo lo que conlleva a un desequilibrio emocional.
Ellos lo bautizaron SEDA (Síndrome de Estrés, Depresión y Adicción).
El resultado encontrado fue que las reiteradas subidas de glucemia en sangre generaban un desequilibrio en la producción y secreción de insulina y ésta por efecto rebote, lograba una marcada hipoglucemia. Lo que se llama hiperinsulinismo reactivo. Un círculo vicioso que se genera en alrededor del 80% de la población según sus datos. Mientras más dulce sea un alimento, más estimula la secreción de insulina, por ejemplo: cereales refinados (harinas blancas, y todos los productos farináceos, arroz blanco, trigo o cualquier cereal refinado), sacarosa y los distintos formatos de azúcar refinada que utiliza la industria en la mayoría de sus productos, no sólo golosinas o bebidas.
Cualquiera de estos productos alteran nuestro organismo por producir elevada glucemia (más de 110). De hecho en este caso también marcaban como error el exceso de fruta.
Sólo los edulcorantes y el alcohol generan una marcada hipoglucemia sin subida previa, lo cual no quiere decir que sean mejores. En el caso de los edulcorantes, no suben la glucemia, no tienen kilo calorías pero su poder endulzante supera desde 100 hasta 600 veces a la sacarosa (azúcar blanca).
La insulina es utilizada para controlar la glucemia y bajar sus niveles. El Fei (factor estabilizador de insulina) no se repone con ninguno de estos productos refinados, pero sí con cereales integrales (que dicho sea de paso, no generan más de 90 de glucemia, con lo cual se considera glucosa estable, a no ser que se abuse en forma de harinas).
“El FEI está constituido por vitaminas, aminoácidos y oligoelementos más concentrados como vienen en los mismos cereales integrales. EL reponer estos nutrientes consolida la mejoría, ayuda a recuperar la capacidad de empalagarse y a cortar todo tipo de deseo adictivo sin caer en cambiar una adicción por otra, como el cigarro por chupetín, sino que se resolverán todas a la vez” afirma el Dr. Esteves.

Las hipoglucemias generan desordenes hormonales y también de neurotransmisores -por sufrimiento de las neuronas.
En cuanto a las hormonas, por ejemplo una hipoglucemia hace bajar los niveles de serotonina cerebral (hormona de la “paz”, antidepresiva, que evita entre otras cosas el deseo adictivo) y acciona las hormonas hiperglucemiantes. Mostrado está que las hipoglucemias causan sufrimiento en todas nuestras células, siendo las más sensibles las nerviosas, que no solo pueden llegar a alterarse funcional y estructuralmente cuando sufren por falta de glucosa, sino que pueden llegar a morir.
Para evitar esto nuestro organismo al entrar en un estado de alarma, segrega distintas hormonas que tienen la función opuesta a la insulina: hacen subir el azúcar en sangre. Estas hormonas (hiperglucemiantes) son fundamentalmente
 Glucagon: producida también por el páncreas.
Adrenalina: Glándulas suprarrenales.
Corticoides: Glándula suprarrenales
Tiroides: glándula tiroides ACTH: por la Hipófisis, que a su vez estimula las glándulas suprarrenales. Igualmente estas hormonas también sufren si se segregan en niveles anormales, y se pueden agotar transitoriamente y con esto generar enfermedades como el hipotiroidismo, o crisis asmática si faltan corticoides. Una de las frecuentes consecuencias de la elevación de estas hormonas suelen ser los trastornos en los sueños, desde el insomnio hasta el bruxismo, pero también suele irritar y estar predispuesto a la discusión. ¿Por qué? La adrenalina activa ciertas zonas del hipotálamo (región del cerebro), activando todo tipo de deseos adictivos, comer, fumar, beber.
Cuando hay hipoglucemias y baja el umbral para la secreción de adrenalina, esto hace que la persona reaccione desmedidamente ante estímulos pequeños. La glucosa estable y la buena acción de las neuronas ayudan por ejemplo a pensar en cómo salir de una situación conflictiva o supuestamente conflictiva. ¿Cómo no estresarnos y reaccionar mal si a nuestras neuronas no les llega la energía necesaria para cumplir con sus funciones? Nicotra y Esteves realizaron curvas de glucemia para verificar la conducta según el alimento ingerido. Para esto hacían siete tomas diarias en cinco horas. Ellos comprobaron que los cereales integrales sólo generaban glucosa estable (entre 60 y 90) y esto llevaba al proceso de glucosis; proceso fundamental para que las células no sufran. Vale aclarar que la hipoglucemia no sólo se genera por el efecto rebote ya explicado, sino que cuando no ingerimos alimento durante 4 o más horas por hacer dieta, o trabajar sin consciencia ni prestando atención a este proceso, la energía se comienza a agotar y las alarmas se encienden. Sobre todo cuando esto se hace una conducta habitual y con una mala elección de alimentos. El Dr. Esteves expone “Muchos se levantan a asaltar la heladera para que no se mueran sus neuronas por falta de glucosa durante el sueño”.
Para otros médicos la glucosa estable no sería necesariamente a partir de los cereales integrales, y sí le dan mayor importancia a la ingesta de grasas naturales, sean insaturadas, poliinsaturadas o saturadas. Cada cual tiene su librito.
Las grasas saludables estimulan al cerebro al igual que el azúcar (carbohidratos). Pero con la diferencia de no provocar estímulos agresivos ni mucho menos alteraciones neuronales ni el hiperinsulinismo reactivo. De hecho, sobre todo al Omega3 se lo asocia a la generación y estabilización de serotonina.
Las proteínas tampoco quedan fuera del coctel del buen vivir ya que también se las asocia a la producción y estabilización de serotonina y endorfinas. Aunque su exceso sí marca un desequilibrio importante en nuestro organismo. Cada persona cuenta con su campo bio energético y su condición individual como para querer “cerrar” una dieta estándar para todos. Pero sí es indiscutible que los alimentos sanos mejoran y equilibran la relación con nuestros miedos, con nuestro sentir preocupado y alerta.

La salud nos da Libertad y la verdadera libertad nos da la llave de la Felicidad.
La Salud da Felicidad.

Cada uno comprobará y será testigo de sus propios porcentajes de ingesta en cuanto a macro y micro nutrientes. En algunos funciona más cereales integrales, en otros más grasas saludables. En algunos funciona más crudo, en otro más cocido.
He trabajado con el Dr. Esteves (Medicina China y Macrobiótica adaptada), con el Dr. Vitale (Ayurveda y antroposofía) y he escrito un libro con Pablo de la Iglesia (Naturópata Ortomolecular), todos con distintas miradas sobre un mismo tema milenario: “Primero no dañar”. Me tocó ser testigo, por suerte, de miles de casos, y lo que puedo yo decir como simple cocinero, es que los porcentajes varían según las personas, pero es fundamental ingerir los macronutrientes y micronutrientes concienzudamente. Se podrá cada uno tomar un “recreo” o un “permiso-permitido”, el famoso “free day cerebral”, pero sepan que eso No es un premio de ninguna manera. Podremos mirar mal a los adultos que dan café a criaturas pero felicitamos y premiamos con bebidas colas o gaseosas a niños, incluso antes del año. Cuando estudiamos mucho o nos centramos en trabajos sin movimiento la ingesta desmedida de líquidos (mate, café, en el mejor de los casos té o jugo natural) da lugar a querer ingerir sólidos (cualquier productos farináceo industrial en el común denominador), cuando en realidad el organismo nos pide energía (glucosa estable). O sea, una granola casera sería una muy buena idea. O bien un poco de arroz yamaní, semillas o frutos secos y verduras. La salud depende de cada Uno y la salud mental no escapa de las decisiones que tomemos.
Los desórdenes mentales no son un castigo Divino, o en todo caso si usted cree que sí, no “sólo”. Mis ojos, mis sentidos y destino puestos en este hermoso camino natural me han regalado la dicha de experimentar que toda patología funcional tuvo cura y se pudo revertir. La dulzura, el Amor y la Alegría no se destapan con una gaseosa ni se descubren con una golosina. La gran Vida no está justamente en los excesos tóxicos. La gran Vida no se publicita en los medios masivos, sino que se puede encontrar en medios preparados para brindar herramientas necesarias para el despertar de quien así lo busque, como en este Diario que por algo cumple 25 años creando consciencia.

Pablo Armenti – Chef
pabloarmentichef@gmail.com
www.cocinanaturalonline.com
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

export default VidaSanaArticulo3;