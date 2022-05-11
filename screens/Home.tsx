import { StatusBar } from 'expo-status-bar'
import {
    StyleSheet,
    Text,
    View,
    KeyboardAvoidingView,
    TextInput,
    TouchableOpacity,
    Keyboard,
    Modal,
    Pressable,
    Alert,
    Platform,
} from 'react-native'
import Task from '../components/Tasks.js'
import React, { useState } from 'react'
import AppNavigator from '../app.navigator'

interface HomeScreenProps {
    navigation: any,
    route: { params }
}

export default function Home(props: HomeScreenProps) {
    const [task, setTask] = useState()
    const [taskItems, setTaskItems] = useState([])
    const socials = ['Instagram', 'Snapchat', 'Twitter']
    const [socialLinks, setLinks] = useState([
        {social: 'Instagram', id: 0, link: ''},
        {social: 'Snapchat', id: 1, link: ''},
        {social: 'Twitter', id: 2, link: ''},
    ]);

    const handleAddTask = (socialLinks) => {
        console.log(socialLinks);
        props.navigation.navigate('Social', socialLinks);
    }

    const exchangeSocial = (item) => {
    //     let itemsCopy = [...taskItems]
    //     itemsCopy.splice(index, 1)
    //     setTaskItems(itemsCopy)
    //     {
    //         /*Copy taskItems into itemsCopy, splice pops the index from array, 
    // set the remaining tasks into itemsCopy and call setTaskItems*/
    //     }
    console.log(item);
    props.navigation.navigate('Code', item);
    }

    return (
        <View style={styles.container}>
            {/* <AppNavigator /> */}
            {/* Today's tasks */}
            <View style={styles.taskWrapper}>
                <Text style={styles.sectionTitle}>Your Socials</Text>
                <View style={styles.items}>
                    {/*This is where the tasks will go*/}
                    {socialLinks.map((item, index) => { 
                        console.log("Yoohoo")
                        console.log(socialLinks)
                        if(item.link){
                        return (
                            <TouchableOpacity
                                key={index}
                                onPress={() => exchangeSocial(item)}
                            >
                                <Task text={item.social} />
                            </TouchableOpacity>
                        )}
                    })}
                </View>
            </View>

            {/*Write a task*/}
            <View style={styles.writeTaskWrapper}>
                {/* TouchableOpacity is a button */}
                <TouchableOpacity onPress={() => handleAddTask(socialLinks)}>
                    <View style={styles.addWrapper}>
                        <Text style={styles.addText}>Add an account</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EAED',
    },
    taskWrapper: {
        paddingTop: 80,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    items: {
        marginTop: 30,
    },
    writeTaskWrapper: {
        position: 'absolute',
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    input: {
        paddingVertical: 15,
        width: 250,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,
    },
    addWrapper: {
        width: 300,
        height: 60,
        // backgroundColor: '#fff',
        backgroundColor: '#2196F3',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
    },
    addText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: '#E8EAED',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
        position: 'absolute',
        bottom: 60,
        left: '10%',
        width: '80%',
        height: 60,

        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
})
