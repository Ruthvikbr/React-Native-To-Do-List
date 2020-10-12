import React,{useState} from 'react';
import { FlatList, StyleSheet, Text, View,Alert, Keyboard, TouchableWithoutFeedback, TouchableWithoutFeedbackBase} from 'react-native';
import AddTodo from './components/AddTodo';
import Header from './components/header';
import ToDoItem from './components/ToDoitem';


export default function App() {
const [todos,setTodos] = useState([
  {text:'buy coffee',key:'1'},
  {text:'Learn react native',key:'2'},
  {text:'build react native app',key:'3'},
]); 

const pressHandler = (key) => {
  setTodos((prevTodos) => {
    return prevTodos.filter(todo => todo.key != key);
  })
}

const submitHandler = (text) => {
  setTodos((prevTodos) => {
    Alert.alert('Add To Do','Successfully added todo', [
      {text: 'Ok', onPress: () => console.log('alert closed')}
    ])
    return [
          {text, key: Math.random().toString() },
          ...prevTodos
    ]
      
  })
}

  return (
    <TouchableWithoutFeedback onPress={(
      Keyboard.dismiss
    )}>
      <View style={styles.container}>
        <Header />
        <View style = {styles.content}>
        <AddTodo submitHandler={submitHandler}/>
          <View style={styles.list}>
            <FlatList
            data={todos}
            renderItem={({item}) => (
              <ToDoItem item={item} pressHandler={pressHandler} />
            )}
            ></FlatList>
          </View>  
        </View>
      </View >
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#ddd'
  },
  content: {
    padding:40,
    flex:1   
  },
  list: {
    marginTop: 20,
    flex:1
  }
});
