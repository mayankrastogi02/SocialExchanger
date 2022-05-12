import { StatusBar } from 'expo-status-bar'
import LinearGradient from 'react-native-linear-gradient'
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
    ImageBackground,
} from 'react-native'
import Task from '../components/Tasks.js'
import React, { useState } from 'react'
import AppNavigator from '../app.navigator'

interface HomeScreenProps {
    navigation: any
    route: { params }
}

export default function Home(props: HomeScreenProps) {
    const [socialLinks, setLinks] = useState([
        { social: 'Instagram', id: 0, link: '' },
        { social: 'Snapchat', id: 1, link: '' },
        { social: 'Twitter', id: 2, link: '' },
    ])

    const handleAddTask = (socialLinks) => {
        props.navigation.navigate('Social', socialLinks)
    }

    const exchangeSocial = (item) => {
        props.navigation.navigate('Code', item)
    }

    const image = require('../resources/img/white-gradient.jpg')

    return (
        <View style={styles.container}>
            {/* <ImageBackground
                source={image}
                resizeMode="cover"
                style={styles.image}
            > */}
            {/* <AppNavigator /> */}
            {/* Today's tasks */}
            <View style={styles.taskWrapper}>
                <Text style={styles.sectionTitle}>Your Socials</Text>
                <View style={styles.items}>
                    {/*This is where the tasks will go*/}
                    {
                    socialLinks.map((item, index) => {
                        var count = 0
                        if (item.link) {
                            return (
                                <TouchableOpacity
                                    key={index}
                                    onPress={() => exchangeSocial(item)}
                                >
                                    <Task text={item.social} />
                                </TouchableOpacity>
                            )
                        } else {
                            ++count
                            console.log(count)
                        }
                        if (count == 3) {
                            return (
                                <Text style={styles.sectionTitle}>
                                    Add a social
                                </Text>
                            )
                        }
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
            {/* </ImageBackground> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F6F6',
    },
    image: {
        flex: 1,
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
        backgroundColor: '#000',
        // backgroundColor: '#2196F3',
        // borderRadius: 60,
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
