import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, Button, } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { MaterialCommunityIcons } from '@expo/vector-icons';
export default class App extends React.Component {
  state = {
    image: null,
  };

  takePicture = async () => {

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: false,
    });
    this.setState({ image: result.uri });
  };

  render() {
    const { image } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.Text}>Welcome to Camera App</Text>
        {image && (
          <Image source={{ uri: image }} style={styles.image} />)}
        <MaterialCommunityIcons name="camera-enhance-outline" size={64} color="green" onPress={() => this.takePicture()} style={styles.Icon} />
        <Text style={{textAlign:'center',marginTop:10}}>Press the icon to take picture</Text>
        {/* <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}
               onPress={() => this.takePicture()}
            >Camera
                   </Text>
          </TouchableOpacity> */}
      </View>
    );
  }
}




const styles = StyleSheet.create({


  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  Text: {
    textAlign: 'center',
    marginTop: 100,
    fontSize: 20,
    borderColor: 'black',
    backgroundColor: 'yellow',
    padding: 10

  },
  Icon: {
    // marginTop: 400,
    marginRight:150
  },
  buttonContainer: {
    backgroundColor: '#28a745',
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 14,
  },
  buttonText: {
    color: 'black',
    fontWeight: '900',
    textAlign: 'center',
    borderRadius: 14,
    paddingHorizontal: 15
  },

  image: {
    width: 300,
    height: 400,
    backgroundColor:'green',
  
    marginTop:50,
    marginLeft:25

  },
});