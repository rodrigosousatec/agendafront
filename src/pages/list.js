import React, { useState, useEffect } from 'react';
import { FlatList, RefreshControl, SafeAreaView, View } from 'react-native';
import { ListItem, Icon, Button } from 'react-native-elements';

import getData, {remove} from './api/providers';

export default function List({ navigation }) {

    const [agendas, setAgendas] = useState({})
    const [refreshing, setRefreshing] = useState(false);

    function del(agenda){
        remove(agenda)
    }

    function actions(agenda) {
        return(
            <>
                <Button
                    onPress={() => navigation.navigate('New', agenda)}          
                    type = "clear"
                    icon={<Icon name="edit" size={25} color="red" />}
                />
                
                <Button
                    onPress={() => del(agenda)}          
                    type = "clear"
                    icon={<Icon name="delete" size={25} color="red" />}
                /> 
            </>    
        )
    }

    function renderItem({item: agenda }) {
        return (
            <ListItem
            bottomDivider
        >
            <ListItem.Content>
                <ListItem.Title>{agenda.id} - {agenda.nome}</ListItem.Title>
            </ListItem.Content>
            <View style={{flexDirection: "row" }}>{actions(agenda)}</View>
        </ListItem>
        )

    }

    useEffect(() => {

        getData().then(setAgendas);
        console.warn(agendas.data);       
    }, []);

    function onRefresh(){
        setRefreshing(false);
        getData().then(setAgendas);
    }

    return (
        <SafeAreaView>
            <FlatList
            data={agendas}
            renderItem={renderItem}
            keyExtractor={agenda => agenda.id}
            refreshControl={
            <RefreshControl refreshing={refreshing}
                onRefresh= {onRefresh}
            />}
        />
        </SafeAreaView>
    );
}