import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Tab, Tabs, TabHeading, Icon, Left, Body, Right, Card, CardItem, Thumbnail, Title } from 'native-base';
import { Font } from 'expo';
import { StackNavigator } from 'react-navigation'
import {
    Text,
    ScrollView,
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

class ListSecciones extends Component {
    render() {
        return (
            
            <View>
                <ScrollView>
                    <TouchableOpacity style={styles.contenedorLista}>
                        <Text style={styles.textoLista}>
                            <Icon name="md-add-circle" style={{ color: '#333', fontSize: 23 }} />  Alimentación
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.contenedorLista}>
                        <Text style={styles.textoLista}>
                        <Icon name="md-add-circle" style={{ color: '#333', fontSize: 23 }} />  Recetas
                        </Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.contenedorLista}>
                        <Text style={styles.textoLista}>
                        <Icon name="md-add-circle" style={{ color: '#333', fontSize: 23 }} />  Veganismo
                        </Text>
                    </TouchableOpacity>                    

                    <TouchableOpacity style={styles.contenedorLista}>
                        <Text style={styles.textoLista}>
                        <Icon name="md-add-circle" style={{ color: '#333', fontSize: 23 }} />  Conocimiento
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.contenedorLista}>
                        <Text style={styles.textoLista}>
                        <Icon name="md-add-circle" style={{ color: '#333', fontSize: 23 }} />  Celiaquía
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.contenedorLista}>
                        <Text style={styles.textoLista}>
                        <Icon name="md-add-circle" style={{ color: '#333', fontSize: 23 }} />  Creer
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.contenedorLista}>
                        <Text style={styles.textoLista}>
                        <Icon name="md-add-circle" style={{ color: '#333', fontSize: 23 }} />  Herboristería
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.contenedorLista}>
                        <Text style={styles.textoLista}>
                        <Icon name="md-add-circle" style={{ color: '#333', fontSize: 23 }} />  Homeopatía
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.contenedorLista}>
                        <Text style={styles.textoLista}>
                        <Icon name="md-add-circle" style={{ color: '#333', fontSize: 23 }} />  Medioambiente
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.contenedorLista}>
                        <Text style={styles.textoLista}>
                        <Icon name="md-add-circle" style={{ color: '#333', fontSize: 23 }} />  Salud
                        </Text>  
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.contenedorLista}>
                        <Text style={styles.textoLista}>
                        <Icon name="md-add-circle" style={{ color: '#333', fontSize: 23 }} />  Sociedad
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.contenedorLista}>
                        <Text style={styles.textoLista}>
                        <Icon name="md-add-circle" style={{ color: '#333', fontSize: 23 }} />  Terapias
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textoLista: {
        fontSize: 26
    },
    contenedorLista: {
        paddingTop: 30,
        paddingLeft: 30
    }
});

export default ListSecciones;