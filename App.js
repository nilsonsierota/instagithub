import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  ScrollView,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function InstaGitHubCard({githubUser}) {

  const [liked, setLikedState] = useState(false);

  return(
      <View>
        <View style={{ 
            flexDirection: 'row', 
            padding: 15, 
            alignItems: 'center' 
          }}>
          <Image
            style={{
              marginRight: 15,
              width: 40,
              height: 40,
              borderRadius: 20,
            }} 
            source={{
              uri: `https://github.com/${githubUser}.png`
          }}
          />
        <Text>{githubUser}</Text>
        </View>
          <Image
            style={{
              width: '100%',
              height: 350,
            }} 
            source={{
              uri: `https://github.com/${githubUser}.png`
          }}
          />
        <View style={{ 
            flexDirection: 'row', 
            padding: 15, 
            alignItems: 'center' 
          }}>
          <TouchableOpacity onPress={() => setLikedState(!liked)}>
            {liked && <Ionicons name="heart-outline" size={24} color="black" />}
            {!liked &&<Ionicons name="heart-sharp" size={24} color="red" />}
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView >
        {
        [
          'nilsonsierota',
          'omariosouto',
          'peas',
          'vweberfroes',
          'gabrielfroes',
        ].map((githubUser) => 
          <InstaGitHubCard key={githubUser} githubUser={githubUser}/>
        )}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
