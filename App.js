import { StyleSheet, Text, View, Image, FlatList, ScrollView} from 'react-native';
import myImage from './assets/Frame 1.png';
import mySearch from './assets/Search.png';
import OngoingTasks from './components/Tasks';
import Categories from './components/category';

export default function App() {
  return (
    <ScrollView  contentContainerStyle={styles.contentContainer} style={styles.container}>
      <Image source={myImage} style={styles.title}/>
      <Image source={mySearch} style={styles.search}/>
      <Text style={styles.title}>Categories</Text>
      <Categories />
      <OngoingTasks/>
    </ScrollView>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F0E8',
  },
  contentContainer: {
    alignItems: 'center',
    paddingBottom: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    marginTop:20,
    padding:10,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    marginTop:20,
    padding:10,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  search: {
    marginTop: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  exerciseStudy: {
     marginTop: 20,
    padding: 20,
    borderWidth: 0.5,
    borderColor: '#ccc',
    borderRadius:5
  }
});
