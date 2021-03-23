import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput} from 'react-native';
import { TouchableOpacity } from 'react-native';
import { save } from './api/providers';



export default function New({ route, navigation }) {

    const [agenda, setAgenda ] = useState(route.params ? route.params : {});


    async function salvar() {
        if (agenda.id) {
            update(agenda)
        } else {
            save(agenda)
        }
        navigation.navigate('List')
    }

    return (
        <View style={styles.container}>
            <Text>Contato</Text>
            <TextInput
                style={styles.input}
                placeholder="Nome"
                value={agenda.nome}
                onChangeText={nome => setAgenda({...agenda, nome})}
            />
              <TextInput
                style={styles.input}
                placeholder="Telefone"
                value={agenda.telefone}
                onChangeText={telefone => setAgenda({...agenda, telefone})}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={salvar}
            >
                <Text style={styles.textButton}>Salvar</Text>

            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        color: "#f00"
    },
    button: {
        marginTop: 10,
        padding: 15,
        backgroundColor: "red",
        width: 120,
        height: 50,
        alignItems: "center",
        borderRadius: 8,
    },
    textButton: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },
    input: {
        height: 40,
        width: 300,
        borderRadius: 8,
        margin: 10,
        fontSize: 16,
        borderWidth: 1,
        borderColor: "red",
    }
});