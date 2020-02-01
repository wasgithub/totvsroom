import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import { Avatar } from 'react-native-paper';
import images from "../../assets/images";



class HomeScreen extends React.Component {
    static navigationOptions = {
      title: 'Welcome to the app!',
    };

    state = {storage: "washin"}

    getData = async () => {
      try {
        const value = await AsyncStorage.getItem('login')
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
        <View style={styles.containerHome}>
          <View style={styles.containerHeader}>
            <Avatar.Image size={90} source={images.general.person} />
          </View>
          <View style={styles.containerBody}>

          </View>
          <View style={styles.containerFooter}>
            <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
          </View>
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
  
  const styles = StyleSheet.create({
    containerHome: {
      flex: 1,
      borderWidth: 1
    },
    containerHeader: {
      flex: 1,
      borderWidth: 1
    },
    containerBody: {
      flex: 5,
      borderWidth: 1
    },
    containerFooter: {
      flex: 1,
      borderWidth: 1
    }
  })
  
  export default HomeScreen;
  {/* <Button title="Show me more of the app" onPress={this._showMoreApp} />
  <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
  <Text>
    {this.state.storage}
  </Text> */}
