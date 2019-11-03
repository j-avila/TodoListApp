import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default class Task extends Component {
  render() {
    const { task, deleteItem } = this.props
    return (
      <View style={styles.taskCard}>
        <Text> {task.texto} </Text>
        <TouchableOpacity onPress={() => deleteItem(task.key)}>
          <Ionicons
            name="md-trash"
            size={24}
            color="grey"
          />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  taskCard: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 14,
    marginVertical: 12,
    flexDirection: 'row',
    justifyContent: "space-between",
    borderRadius: 4,
    shadowColor: '#20232a',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 2,
    shadowRadius: 10
  },
  texto: {
    fontSize: 24
  }
})
