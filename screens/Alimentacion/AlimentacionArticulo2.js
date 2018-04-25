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

class AlimentacionArticulo2 extends React.Component {

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
            <Title style={styles.textoBotones}>Teff</Title>
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
            source={{uri: 'http://www.convivirpress.com/wp-content/uploads/2018/02/teff-2000x1180-696x411.jpg'}} />
          

          <Text style={{ fontSize: 20, paddingLeft: 20, paddingTop: 20 }}>Teff, el exótico grano Etíope gluten free</Text>

          <Text style={{ fontSize: 17, textAlign: 'justify', lineHeight: 30, paddingLeft: 20, paddingRight: 20, color: 'grey'}}>
            Los expertos en alimentos de Argentina están detrás de un cereal exótico proveniente de Etiopía, ya muy utilizado en Europa y estados Unidos con una gran ventaja: Es libre de Gluten. El Teff además es rico en proteínas, minerales, vitaminas, calcio y fibra, démosle la bienvenida a un nuevo Súper alimento.
          </Text>

          <Text style={{ fontSize: 20, paddingLeft: 20, paddingTop: 20 }}>Nuevo para nosotros</Text>

          <Text style={{ fontSize: 17, textAlign: 'justify', lineHeight: 30, paddingLeft: 20, paddingRight: 20, color: 'grey'}}>
            En Etiopía, el Teff se consume hace más de 5000 años pero en el resto del mundo es un descubrimiento alimenticio de mucho valor nutricional por lo que lo denominan “el nuevo superalimento”.  En nuestra parte del mapa, casi no se habla del Teff, es prácticamente “un desconocido”. Sin embargo, el grano más pequeño del mundo, sin gluten, y repleto de beneficios alimenticios, podría comenzar a cultivarse en nuestro país.
          </Text>

          <Text style={{ fontSize: 17, textAlign: 'justify', lineHeight: 30, paddingLeft: 20, paddingRight: 20, color: 'grey'}}>
            Para la gente etíope, el Teff es la base de su alimentación, así como lo son el trigo o el maíz para nuestra gente. Hace pocos años, se prohibió su exportación, por temor a que la demanda externa – por la gran cantidad de beneficios que propicia – provocara el desabastecimiento del mercado local. Pero actualmente, esa realidad cambió, pudiéndose comercializar internacionalmente la harina, no el grano.
            Y como sus propiedades y uso se están haciendo famosos, no faltan los estudios realizados sobre su composición nutricional, su forma de procesar y los beneficios que trae aparejado.
            Uno de los más importantes es que gracias a su composición de hidratos de carbono complejos con almidón de digestión lenta, disminuye su índice glucémico y es apto para diabéticos. Asimismo, controla el peso y la salud del colon.
            Y, gracias a no poseer gluten, es perfecto para las personas intolerantes al gluten o celíacas: se descompone fácilmente y es anti-inflamatorio por lo que es un gran sustituto para las comidas como el pan o la pasta.
            Por otro lado, si se lo compara con otros cereales, notamos que su contenido en proteína no es muy distinto; sin embargo, el Teff es más rico en el aminoácido esencial lisina, esencial para un correcto y adecuado crecimiento. La lisina proveniente de este grano, agiliza la reparación muscular y ayuda a producir elastina y colágeno natural y nos deja una piel suave y joven.
            La harina integral que se hace con este grano es muy bueno en fibra y minerales, especialmente hierro y calcio, y fitoquímicos como los polifenoles y los fitatos.
            Su nivel de calcio es tan alto que puede reemplazar, consumido en la cantidad adecuada, a la leche y es especial para las personas que prefieren o deben mantener una dieta sin lácteos y lograr proteger los huesos.
            Además, nos aporta vitamina C – lo cual no es usual encontrar en los granos de cereal – y un gran nivel de vitamina B1 y B6, fósforo, magnesio, cobre y hierro. Esto último, mejora el nivel de hemoglobina y de la calidad de la sangre, además de la resistencia física.
          </Text>

          <Text style={{ fontSize: 20, paddingLeft: 20, paddingTop: 20 }}>El dato más curioso</Text>
          <Text style={{ fontSize: 17, textAlign: 'justify', lineHeight: 30, paddingLeft: 20, paddingRight: 20, color: 'grey'}}>
            Es el grano más pequeño del mundo: 3000 granos pesan sólo un gramo. Nadie lo diría, notando todas las propiedades que posee.
            Para consumirlo, es importante y recomendable comenzar con una cucharada pequeña, luego a una más grande y luego a ingerir de cinco a diez cucharadas. El intestino necesita un tiempo para asimilar este nuevo alimento repleto de fibra, aún si es saludable. Su gran contenido en fibra, nos ayuda a tener el corazón sano y mejorar la digestión.
          </Text>

          <Text style={{ fontSize: 20, paddingLeft: 20, paddingTop: 20 }}>Algunas maneras de preparar el Teff</Text>
          <Text style={{ fontSize: 17, textAlign: 'justify', lineHeight: 30, paddingLeft: 20, paddingRight: 20, color: 'grey'}}>
            Se puede: elaborar cremas de verduras, en guisos, para espesar salsas o estofados.
            Se debe colocar 1 taza de teff por 3 tazas de agua o leche en una olla destapada. Cuando hierva el agua, bajar a fuego lento y cubrir la olla con una tapa y hervir durante unos 15-20 minutos.
            También se pueden realizar harinas o copos.
            Ahora bien, viendo todas las propiedades que posee, podemos preguntarnos ¿por qué no se cultiva en nuestro país. Si bien su cultivo no está prohibido, al momento de ingresarse productos totalmente nuevos, deben realizarse estudios de control de plagas y de esa manera se define o decide el futuro cultivo en el país. Ese proceso lo realiza el Senasa sin costo y se inicia cuando un productor o persona interesada presenta un pedido formal para ingresar el grano en el país.
            Lo que se conoce, es que crece en cualquier tipo de suelo y lo único que necesita es agua y temperatura.
            Lo cierto es que más tarde o más temprano, el Teff se producirá en Argentina. Y si sos de las personas a las que les gusta llevar un estilo de vida saludable, agregar este grano a tus comidas es una idea brillante. Y sino, este 2018 que comienza con nuevas recetas, alimentos y una nueva dieta saludable es un plan muy posible y beneficioso.
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

export default AlimentacionArticulo2;