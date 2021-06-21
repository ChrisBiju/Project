import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';

export default class App extends React.Component {
    constructor() {
      super();
      this.state = {
        text: '',
        chunks: [],
      };
    }
    getWord=(word)=>{
        var searchKeyword=word.toLowerCase();
        var url = "https://rupinwhitehatjr.github.io/dictionary/%22"+searchKeyword+"%22.json"
        return fetch(url)
        .then((data)=>{
          if(data.status===200)
          {
              returndata.json()
          }
          else{
              return null
          }
    })
}
    
    

    render() {
      return (
          <View>
        <TextInput
        style={styles.inputBox}
        onChangeText={text => {
          this.setState({ 
              text: text,
              isSearchPressed:false,
              word: "Loading...",
              lexcialCategory:'',
              examples:[],
              definition: ""
            });
        }}
        value={this.state.text}
        />

<TouchableOpacity>
          style={styles.goButton}
          onPress={() => {
           this.setStae({isSearchedPressed:true}),
           this.GetWord(this.state.text)
          }}
        </TouchableOpacity>
        </View>
        )}
        }
      