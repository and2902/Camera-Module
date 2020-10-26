import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, Button, } from 'react-native';
import * as ImagePicker from 'expo-image-picker'; // here is the Library of expo image picker that is used to open the camera function
import { MaterialCommunityIcons } from '@expo/vector-icons'; // here is the library for icons
export default class App extends React.Component {
  state = {
    image: null, //initially set the state of image that is displying the page is null 
  };

  takePicture = async () => {

    const result = await ImagePicker.launchCameraAsync({ // here ImagePicker.launchCameraAsync is a function that open the camera of hardware module
      allowsEditing: false, // here allowsediting is false because we have no need to crop the picture
    });
    this.setState({ image: result.uri });  //here the state of image is changed and this state of image is displying bellow
  };

  render() {
    const { image } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.Text}>Welcome to Camera App</Text>  {/* Here is the simple text Line */}

        {image && (
          <Image source={{ uri: image }} style={styles.image} />)}
        {/* Here is the line that is display the image after take it */}

        <MaterialCommunityIcons name="camera-enhance-outline" size={64} color="green" onPress={() => this.takePicture()} style={styles.Icon} />
        {/* Here is the Icon that is used to call the fuction taht is take picture*/}

        <Text style={{ textAlign: 'center', marginTop: 10 }}>Press the icon to take picture</Text>
        {/* Here is the simple text Line */}

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
    marginRight: 150
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
    height: 420,
    backgroundColor: 'green',

    marginTop: 30,
    marginLeft: 30

  },
});