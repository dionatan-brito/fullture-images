import { useEffect, useState } from "react"
import { Text, StyleSheet, TextInput, View, FlatList, Image, SafeAreaView } from "react-native"
import { api } from "../../assets/api/req";

export function Search() {

    const [value, setValue] = useState("");
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    async function start() {
        var result = await api.get(`${value}&per_page=35&format=json&nojsoncallback=1`)
        console.log(result)
        setImages(result.data.photos.photo)
    }

    useEffect(()=>{
        start()
    },[value])

    useEffect(() => {
        start()
    }, []);

    return (
        <SafeAreaView style={style.container}>
            <TextInput
                style={style.input}
                value={value}
                onChangeText={(e) => setValue(e)
                }
                placeholder="Procurar imagens"
            />
            <FlatList
                style={style.flatlist}
                data={images}
                keyExtractor={(item, index) => item.id}
                numColumns={2}
                renderItem={({ item, index }) => (
                    <Image
                        style={style.image}
                        source={{
                            uri: `https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`
                        }}
                    />
                )}
            />
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 15,
        paddingHorizontal: 10
    },
    input: {
        borderColor: "#d0d0d0",
        borderWidth: 1,
        width: "90%",
        height: 60,
        borderRadius: 20,
        paddingHorizontal: 20,
        marginVertical: 40
    },
    image: {
        width: 180,
        height: 80,
        alignSelf: "center",
        marginVertical: 12,
        marginHorizontal: 3,
    }
})