import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import Task from './task'

export class Body extends Component {
  render() {
    const { todos, handleDelete, loading } = this.props
    return (
      <View style={styles.body}>
         <Text style={styles.title}>tareas por hacer: </Text>
         {loading &&
          <ActivityIndicator size='large' color='#640064' />
         }
         <FlatList
          data={todos}
          renderItem={ ({item}) => <Task task={item} deleteItem={handleDelete} /> }
         />
      </View>
    ) 
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 4,
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: '#bdbdbd'
  },
  title: {
    fontSize: 20,
    fontWeight: '900',
    marginVertical: 6,
    color: '#2b2b2b'
  }
})

export default Body
