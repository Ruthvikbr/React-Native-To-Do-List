import React,{useState} from 'react';
import { StyleSheet, View , Text, TextInput, Button } from 'react-native';


export default function AddTodo({ submitHandler }) {

    const [text,setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    }

    return (
        <View>
            <TextInput
                style={styles.input} 
                onChangeText ={changeHandler}
                placeholder='add task'
            />
            <Button onPress={() => submitHandler(text)} title='add todo' color='blue'/>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginTop:10,
        marginBottom:10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})