import {Text, View, StyleSheet, Pressable, Image, ScrollView} from 'react-native'
export default function ChuteiraScreen(){
  const comprado = () => {
    alert('Produto Comprado com sucesso')
  }
  return(
    <ScrollView>
      <Image source={require('../icons8-cleats-100.png')} style={styles.image}/>
      <Text style={styles.text}>Valor: R$ 250.00</Text>
      <Pressable style={styles.button} onPress={comprado}>
        <Text style={styles.buttontext}>Comprar</Text>
      </Pressable>
    </ScrollView>
    )}

const styles = StyleSheet.create({
    image:{
      width: '50%',
      height: 150,
      alignSelf: 'center',
      marginTop: 50
    },
    text:{
      fontSize: 30,
      fontWeight: 'bold',
      alignSelf: 'center'
    },
    button:{
        width: 120,
        height:  50,
        backgroundColor: '#5297b4',
        alignSelf:'center',
        alignItems: 'center',
        paddingTop: 10,
        marginTop: 30,
        fontWeight: 'bold',
        fontSize: 15,
        color: '#fff'
    },
    buttontext:{
      fontSize: 20,
      fontWeight: 'bold'
    }
}
)