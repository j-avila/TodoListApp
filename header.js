import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'

export class Header extends Component {
  constructor(props){
    super(props)
  }
  render() {
    const { handleTodo, handleSubmit, text } = this.props
    return (
      <View style={styles.head} >
        <Text style={{...styles.textFields, fontWeight: '900', fontSize: 22, textTransform: 'capitalize', paddingTop: 6}}> todo app </Text>
        <TextInput
          style={{...styles.textFields, borderBottomColor: '#ffffff6b', borderBottomWidth: 1, fontSize: 20}}
          onChangeText={ handleTodo }
          placeholder="añade algo que hacer"
          onSubmitEditing={handleSubmit}
          value={text}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  head: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#2fa7df',
    padding: 8,
  },
  textFields: {
    color: '#ffff',
    marginVertical: 4,

  }
})

export default Header
