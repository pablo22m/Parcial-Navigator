import {Text, View, StyleSheet, Pressable, Image, ScrollView} from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function HomeScreen(){
  const navigation = useNavigation()
  const bola = () => {
    navigation.navigate('Bola')
  }
  const camisa = () => {
    navigation.navigate('Camisa')
  }
  const meia = () => {
    navigation.navigate('Meia')
  }
  const caneleira = () => {
    navigation.navigate('Caneleira')
  }
  const luva = () => {
    navigation.navigate('Luva')
  }
  const chuteira = () => {
    navigation.navigate('Chuteira')
  }
  return(
    <ScrollView style={styles.container}>
      <Pressable onPress={bola}>
        <Image source={require('../icons8-balls-100.png')} style={styles.colum1}/>
        <Text style={styles.colum11}>BOLAS</Text>
      </Pressable>
       
      <Pressable onPress={camisa}>
        <Image source={require('../icons8-polo-shirt-100.png')} style={styles.colum2}/>
        <Text style={styles.colum22}>CAMISAS</Text>
      </Pressable>

      <Pressable onPress={meia}>
        <Image source={require('../icons8-socks-100.png')} style={styles.colum1}/>
        <Text style={styles.colum11}>MEIAS</Text>
      </Pressable>

      <Pressable onPress={caneleira}>
        <Image source={require('../icons8-shin-guard-100.png')} style={styles.colum2}/>
        <Text style={styles.colum22}>CANELEIRAS</Text>
      </Pressable>
      
      <Pressable onPress={luva}>
        <Image source={require('../icons8-rubber-gloves-100.png')} style={styles.colum1}/>
        <Text style={styles.colum11}>LUVAS</Text>
      </Pressable>

      <Pressable onPress={chuteira}>
        <Image source={require('../icons8-cleats-100.png')} style={styles.colum2}/>
        <Text style={styles.colum22}>CHUTEIRAS</Text>
      </Pressable>
    
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container:{
      marginRight: 20,
      alignItems:'center',
    },
    colum1:{
      marginLeft: 30,
      marginTop: 35,
    },
    colum11:{
        width: 100,
        height:  40,
        backgroundColor: '#5297b4',
        marginLeft: 30,
        textAlign: 'center',
        paddingTop: 10,
        fontWeight: 'bold',
        fontSize: 15,
        borderEndEndRadius: 10,
        borderEndStartRadius:10,
        color: '#fff'
    },
    colum2:{
      marginLeft: 200,
      marginTop: -138,
    },
    colum22:{
        width: 100,
        height:  40,
        backgroundColor: '#5297b4',
        marginLeft: 200,
        textAlign: 'center',
        paddingTop: 10,
        fontWeight: 'bold',
        fontSize: 15,
        borderEndEndRadius: 10,
        borderEndStartRadius:10,
        color: '#fff'  
    }
}
)