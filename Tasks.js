import React from 'react';
import { StyleSheet, Text, View,FlatList} from 'react-native';


function OngoingTasks() {
    

  return (
    <View style={styles.taskContainerWrapper}>
    <View style={styles.taskContainer}>
      <Text style={styles.taskTitle}>Ongoing Tasks</Text>
      <View style={styles.taskpaper}>
        <Text style={styles.taskName}>Mobile App development</Text>
      </View>
      <View style={styles.taskpaper}>
        <Text style={styles.taskName}>Web development</Text>
      </View>
      <View style={styles.taskpaper}>
        <Text style={styles.taskName}>Push Ups</Text>
      </View>
      <View style={styles.taskpaper}>
        <Text style={styles.taskName}>UI Design</Text>
      </View>
      <View style={styles.taskpaper}>
        <Text style={styles.taskName}>Anime</Text>
      </View>
      <View style={styles.taskpaper}>
        <Text style={styles.taskName}>Assignments</Text>
      </View>
      <View style={styles.taskpaper}>
        <Text style={styles.taskName}>File Downloads</Text>
      </View>
      <View style={styles.taskpaper}>
        <Text style={styles.taskName}>Forex TA</Text>
      </View>
      <View style={styles.taskpaper}>
        <Text style={styles.taskName}>Rendering</Text>
      </View>
      <View style={styles.taskpaper}>
        <Text style={styles.taskName}>Carving</Text>
      </View>
      <View style={styles.taskpaper}>
        <Text style={styles.taskName}>Manga</Text>
      </View>
      <View style={styles.taskpaper}>
        <Text style={styles.taskName}>Guy sensei</Text>
      </View>
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
  todayTasks: {
    width: 154,
    fontSize: 15,
  },
  taskpaper: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 8,
    padding: 3,
    marginVertical: 5,
    width: '100%',
    alignSelf: 'center',
    height: 110,
    justifyContent: 'center',
    borderColor: '#E8D1BA',
  },
  taskName: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  taskContainerWrapper: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  taskContainer: {
    width: '90%',
    backgroundColor: '#F7F0E8',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    borderColor: '#F7F0E8'
  },
  taskTitle: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 10,
  },
  taskName: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  });
  

export default OngoingTasks
