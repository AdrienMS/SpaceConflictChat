import React from 'react';
import { StyleSheet, Text, View, FlatList, Platform, TextInput, KeyboardAvoidingView} from 'react-native';

export class ChatScreen extends React.Component{
    state = {
        messages: [
            {
                sender : 'test',
                message : 'test1'
            },
            {
                sender : 'test2',
                message : 'test2'
            }
        ],
        typing: ''
    }

    renderItem({item}) {
        return (
          <View style={styles.row}>
            <Text style={styles.sender}>{item.sender}</Text>
            <Text style={styles.message}>{item.message}</Text>
          </View>
        );
    }

    keyExtractor = (item, index) => index.toString();
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    {Platform.OS}
                </Text>
                <FlatList
                data={this.state.messages}
                renderItem={this.renderItem}
                keyExtractor={this.keyExtractor}
                inverted/>
                <KeyboardAvoidingView behavior="padding">
                    <View style={styles.footer}>
                        <TextInput
                        value={this.state.typing}
                        onChangeText={text => this.setState({typing: text})}
                        style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Type something nice"
                        />
                    </View>
                </KeyboardAvoidingView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    row: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    message: {
        fontSize: 18,
    },
    sender: {
        fontWeight: 'bold',
        paddingRight: 10,
    },
    footer: {
        flexDirection: 'row',
        backgroundColor: '#eee',
    },
    input: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontSize: 18,
        flex: 1,
    },
});