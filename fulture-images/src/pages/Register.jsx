import { useState } from "react";
import { SafeAreaView, TextInput, TouchableOpacity, StyleSheet, Text} from "react-native";

export function Register() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <SafeAreaView style={style.container}>
            <Text style = {style.buttonText}>Cadastrar</Text>

            <TextInput 
            style={style.input}
            value={email}
            onChangeText = {(e)=>setEmail(e)}
            placeholder = "Digite seu email"
            />
            <TextInput 
            style={style.input}
            value={password}
            onChangeText = {(e)=>setPassword(e)}
            placeholder = "Digite sua senha"
            secureTextEntry
            />
            <TouchableOpacity style={style.button}>
                <Text style = {style.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
            <TouchableOpacity>
               <Text style = {style.login}>Já possui cadastro? Faça seu login.</Text> 
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
container:{
    flex:1,
    backgroundColor: "#fff",
    paddingVertical: 10,
    alignItems:"center",
    justifyContent:"center"
},
input:{
   borderColor:"#d0d0d0",
   borderWidth:1,
   borderRadius:20,
   width:"80%",
   height:50,
   paddingHorizontal:10,
   marginVertical: 10
},
button:{
    backgroundColor:"#e8e8e8",
    justifyContent:"center",
    alignContent:"center",
    width:100,
    height:40,
    borderRadius:5,
    marginVertical:10
},
buttonText:{
   alignSelf:"center",
   fontSize:18,
},
login:{
   marginTop:10,
   color:"blue", 
}
})
