import React from 'react';
import {StyleSheet, Text,TouchableOpacity, View} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

export default function ToDoItem({item,pressHandler}) {

    return(
        <TouchableOpacity onPress={() => pressHandler(item.key)}> 
            <View  style={styles.item}>
                <Text style={styles.itemText}>{item.text}</Text>
                <MaterialIcons name='delete' size={18} color='#333' />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item : {
        flexDirection:'row',
        padding: 16,
        marginTop:16,
        borderColor: '#ddd',
        borderWidth:1,
        borderRadius:10,
        borderStyle: 'dashed',
        justifyContent: 'space-between'
    }
,
itemText: {
    marginLeft: 20
}
})