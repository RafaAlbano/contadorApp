import { Component } from 'react';
import { Button, Text, View,StyleSheet } from 'react-native';

export default class Counter extends Component {
   state = {
    count: 0,
   };
   incrementar() {
    if (this.state.count < this.props.max || this.props.min ) {
        this.setState({ count: this.state.count + 1});
    }
   }
   decrementar() {
    if (this.state.count > this.props.min) {
        this.setState({ count: this.state.count - 1});
    }
   }
   render() {
    return (
        <View style={StyleSheet.contador}>
            <Text>Contador: {this.state.count}</Text>
            <Button onPress={() => this.incrementar()} title="+"/>
            <Button onPress={() => this.decrementar()} title="-"/>
        </View>
    );
   }
}

const styles = StyleSheet.create( {
    contador: {
        flexDirection:'row',
        marginBottom:10,
        alignItems:'center',
    }

})