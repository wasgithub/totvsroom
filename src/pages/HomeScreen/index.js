import React from "react";
import { View, Button, Text } from "react-native";
// import AsyncStorage from '@react-native-community/async-storage';


class HomeScreen extends React.Component {
    static navigationOptions = {
      title: 'Welcome to the app!',
    };

    state = {storage: "washin"}

    getData = async () => {
      try {
        // const value = await AsyncStorage.getItem('login')
        this.setState({storage: value})
        if(value !== null) {
          // value previously stored
        }
      } catch(e) {
        // error reading value
      }
    }
    componentDidMount() {
      this.getData()
    }
  
    render() {
      return (
        <View>
          <Button title="Show me more of the app" onPress={this._showMoreApp} />
          <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
          <Text>
            {this.state.storage}
          </Text>
        </View>
      );
    }
  
    _showMoreApp = () => {
      this.props.navigation.navigate('Other');
    };
  
    _signOutAsync = async () => {
      await AsyncStorage.clear();
      this.props.navigation.navigate('Auth');
    };
  }

  export default HomeScreen;
