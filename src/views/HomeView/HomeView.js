
import React, {useState} from 'react';
import {
    Text,
  View,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
  Button,
  TouchableOpacity
} from 'react-native';
import { listPokeOriginal } from '../../data/PokemonList';
import { pokeman } from '../../models/Pokemon';




const HomeView = ()=> {
  const [conterPokedex, setConterPokedex] = useState(0)
  const [listPoke, setListPoke] = useState(listPokeOriginal)

  const getNamePokemon = (namePokemon) =>{
    console.log("This is pokemon:", namePokemon)
    console.log("This is neighbour pokemon:", listPoke[conterPokedex +1].name)
  }

  const modifyLevel = () =>{
    let newArr = [...listPoke]
    newArr[conterPokedex].level = listPoke[conterPokedex].level +5
    setListPoke(newArr)
  }

  const onNext = () =>{
    if(conterPokedex === listPoke.length - 1){
      setConterPokedex(0)
    }
    else{

      
      setConterPokedex(conterPokedex + 1)
    }
  }
  const onPrevious = () =>{
    if(conterPokedex === 0) setConterPokedex(listPoke.length - 1)
    else setConterPokedex(conterPokedex - 1)
  }


  return (
    <View>
    
     
    <ScrollView horizontal={true} style={{ width: "100%" }}>

    <PokemanInfo id={listPoke[conterPokedex].id} name={listPoke[conterPokedex].name} level={listPoke[conterPokedex].level} isMale={listPoke[conterPokedex].isMale} src={listPoke[conterPokedex].src} modifyLevel ={modifyLevel}/>

     
    </ScrollView>
    <Text>hslkdhflshdflkshldkfhlsdkhflkshdlflsdkhfljsdhlfjhsdlfhlsdhfljsdhfljsdhlf
      hslkdhflshdflkshldkfhlsdkhflkshdlflsdkhfljsdhlfjhsdlfhlsdhfljsdhfljsdhlf
      hslkdhflshdflkshldkfhlsdkhflkshdlflsdkhfljsdhlfjhsdlfhlsdhfljsdhfljsdhlf
      hslkdhflshdflkshldkfhlsdkhflkshdlflsdkhfljsdhlfjhsdlfhlsdhfljsdhfljsdhlf
       </Text>
    <Text>{conterPokedex}</Text>
    <Button
        title="Next"
        onPress={() => onNext() }
      />
      
      <Button 
        title='Previous'
        onPress={onPrevious}
      />
    </View>
    
    
  );
};

const PokemanInfo = ({id, name, level, isMale, src, modifyLevel})=>{
  
  return(
    <View>
    <Text>
      this my first app to react native ok
      
    </Text>
    <Text>His name is {name}, his level pokeman is {level} </Text>
    {isMale ? <Text>This is male</Text>
    :
    <Text>This is female</Text>
    
  
    }
   
    <TouchableOpacity
          onPress={() => modifyLevel()}
        >
          <Image source={src} style={styles.imagePokemon}/>
        </TouchableOpacity>
</View>
  )
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  imagePokemon: {
    width: 200,
    height: 200,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

export default HomeView