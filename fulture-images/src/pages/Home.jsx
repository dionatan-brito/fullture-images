import { useState } from "react"
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

export function Home(){
    const [value, setValue] = useState("")
    return(
        <SafeAreaView style = {style.container}>
            
            <Image style={style.image} source = {require("../../assets/icon.png")}/>
            <TextInput 
            style = {style.input} 
            value={value}
            onChangeText={(e)=>setValue(e)}
            placeholder = "Procurar imagens"
            />
            <TouchableOpacity style={style.button}>
                <Text>Buscar</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
    },
    image:{
       width: 300,
       height: 100,
    },
    input:{
     borderColor:"black",
     borderWidth:1,
     borderRadius: 20,
     height:60,
     width: "80%",
     fontSize: 20,
     paddingHorizontal:20,
     marginVertical: 40,
    },

    button:{
        backgroundColor: "#e8e8e8",
        height:40,
        width: 100,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",

    }

})