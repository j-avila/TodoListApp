import React, { Component } from 'react';
import { StyleSheet, View, Button, AsyncStorage } from 'react-native';
import Header from './header';
import Body from './body';

class App extends Component {

  constructor(props){
    super(props)
    this.state={
      todos: [],
      actual: "",
      cargando: true
    }
  }


  componentDidMount() {
    this.getFromLocal()
  }
  

  agregarTexto = value => {
    this.setState({
      actual: value
    })
  }
  
  addTodo = () => {
    const {todos, actual} = this.state
    const stateSetted = [...todos, { texto: actual, key: Date.now().toString() }]
    this.saveToLocal( stateSetted )
    this.setState({
      todos: stateSetted,
      actual: ''
    })  
  }

  removeTodo = id => {
    const {todos} = this.state
    const refreshedTodos = todos.filter( task => task.key !== id )
    this.saveToLocal(refreshedTodos)

    this.setState({
      todos: refreshedTodos
    })
  }

  saveToLocal = state => {
    const todosList = JSON.stringify(state)
    AsyncStorage.setItem('@todos:list', todosList)
  }

  getFromLocal = () => {
    AsyncStorage.getItem('@todos:list')
    .then( val => {
      const obj = JSON.parse(val)
      console.log(obj)
      setTimeout( () => {
        obj ? this.setState({
          todos: obj,
          cargando: false
        })
        : !obj ? this.setState({
          cargando: false
        })
        : this.setState({
          cargando: true
        })
      }, 5000)
    }) 
    .catch(
      error => {console.log(error)}
    )
  }

  render(){
    const { actual, todos, cargando } = this.state
    return (
      <View style={styles.container}>
       <Header
        text={actual}
        handleTodo={this.agregarTexto} 
        handleSubmit={this.addTodo}
       />
       {/* <Button title="guardar lista" onPress={() => this.saveToLocal(todos)} />
       <Button title="obtener lista" onPress={() => this.getFromLocal()} /> */}
       <Body
        todos={todos}
        loading={cargando}
        handleDelete={this.removeTodo}
       />
      </View>
    );
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

export default App
