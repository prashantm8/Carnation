import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    pathContainer:{ flex: 1, justifyContent: 'center' ,alignItems:'center'},
    pathText:{color:'black', fontSize:20, fontWeight:'bold'},
    pathJoin:{color:'black', fontSize:20},
    container:{ flex: 1, paddingVertical: 10 },
    buttonContainer:{ flex: 1, justifyContent: 'flex-end' },
    itemContainer:{ flex: 1, flexDirection: 'row', borderWidth: 1, borderColor: 'grey', alignItems: 'center' },
    indicator:{ height: 50, width: 60, marginLeft: 20, borderWidth: 1, borderColor: 'grey' },
    filled:{ backgroundColor: 'green' },
    empty: { backgroundColor: 'white' },
    buttonUp:{ borderWidth: 1, borderColor: 'grey', padding: 10, marginHorizontal: 10, width: 100 },
    buttonWrapper:{ flex:1, flexDirection: 'row', alignItems: 'center',justifyContent:'center' },
    centerAlign:{ alignSelf: 'center' }
})

export default styles