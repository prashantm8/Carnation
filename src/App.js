import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity, Button } from 'react-native'
import { LIST_DATA } from './Constant'
import styles from './styles'



export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: LIST_DATA,
    }
    this.up = []
    this.down = []
  }
  onPressUP = (item, index) => {
    this.up.push(index)
  }
  onPressDOWN = (item, index) => {
    this.down.push(index)

  }

  recursiveCall = (i,path) => {
    if(path.length>0 && i<path.length){
      LIST_DATA[path[i]].visiting = true
    this.setState({
      data: LIST_DATA
    })
    if(i<path.length){
      setTimeout(()=>{
        LIST_DATA[path[i]].visiting = false
        this.setState({
          data: LIST_DATA
        })
        i++
        this.recursiveCall(i,path)
      },500)
    }
    }else{
      this.props.navigation.navigate("Path",{path})
    }
  }

  task = (i, path) => {
    setTimeout(() => {
      if (path.length > 0) {
        LIST_DATA[path[i]].visiting = false
        this.setState({
          data: LIST_DATA
        })
      }
    }, 1000 * i);
  }

  onPressStartRun = () => {
    this.up.sort((a, b) => {
      return a - b
    })
    this.down.sort((a, b) => {
      return b - a
    })
    let path = [...this.up, ...this.down]
    let i = 0;
    path.length && this.recursiveCall(i,path)
    this.up = []
    this.down = []
  }

  renderItem = ({ index, item }) => {
    return (
      <View style={styles.itemContainer}>
        <View style={[styles.indicator, item.visiting ? styles.filled : styles.empty]} />
        <View style={styles.buttonWrapper}>
         {!item.top && <TouchableOpacity onPress={() => {
            this.onPressUP(item, index)
          }}
            style={styles.buttonUp}
          >
            <Text style={styles.centerAlign}>Lift floor {item.id == 1 ? 'G' : item.id}</Text>
            <Text style={styles.centerAlign}>UP</Text>

          </TouchableOpacity>}
          {!item.ground && <TouchableOpacity onPress={() => {
            this.onPressDOWN(item, index)
          }}
            style={styles.buttonUp}
          >
            <Text style={styles.centerAlign}>Lift floor {item.id == 1 ? 'G' : item.id}</Text>
            <Text style={styles.centerAlign}>Down</Text>

          </TouchableOpacity>}
        </View>
      </View>
    )
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View>
          <FlatList
            inverted={true}
            data={this.state.data}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => item.id.toString()}
            showsVerticalScrollIndicator={false} />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this.onPressStartRun}
            title="Start Run"
            color="#841584"
          />
        </View>
      </View>
    )
  }
}