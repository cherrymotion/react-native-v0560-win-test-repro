import React from 'react';
import { View, Text } from 'react-native';

class App extends React.Component {
    async componentWillMount() {
        // console.disableYellowBox = true;
    }

    render() {
        return (
            <View>
                <Text>{'Hello 0.56.0'}</Text>
            </View>
        );
    }
}

export default App;
