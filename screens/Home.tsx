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
    navigation: any
}

export default function Home(props: HomeScreenProps) {
    const [task, setTask] = useState()
    const [taskItems, setTaskItems] = useState([])
    const [open, setOpen] = useState(false)
    const [openSocial, setOpenSocial] = useState(false)
    const socials = ['Instagram', 'Snapchat', 'Twitter']
    const socialLinks = []

    const handleAddTask = () => {
        props.navigation.navigate('Social')
    }

    const completeTask = (index) => {
        let itemsCopy = [...taskItems]
        itemsCopy.splice(index, 1)
        setTaskItems(itemsCopy)
        {
            /*COpy taskItems into itemsCopy, splice pops the index from array, 
    set the remaining tasks into itemsCopy and call setTaskItems*/
        }
    }

    const addSocial = (social) => {
        console.log(social)
        console.log(openSocial)
        setOpenSocial(true)
    }

    return (
        <View style={styles.container}>
            {/* <AppNavigator /> */}
            {/* Today's tasks */}
            <View style={styles.taskWrapper}>
                <Text style={styles.sectionTitle}>Your Socials</Text>
                <View style={styles.items}>
                    {/*This is where the tasks will go*/}
                    {taskItems.map((item, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                onPress={() => completeTask(index)}
                            >
                                <Task text={item} />
                            </TouchableOpacity>
                        )
                    })}
                </View>
            </View>

            {/*Write a task*/}
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.writeTaskWrapper}
            >
                {/* <TextInput style={styles.input} placeholder={'Write a Task'} value = {task} onChangeText={text => setTask(text)}/> */}
                {/* TouchableOpacity is a button */}
                <TouchableOpacity onPress={() => handleAddTask()}>
                    <View style={styles.addWrapper}>
                        <Text style={styles.addText}>Add an account</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>

            {/*Modal for the social account */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={openSocial}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.')
                    setOpen(false)
                }}
            >
                <View style={styles.container}>
                    {/* Socials*/}
                    <View style={styles.taskWrapper}>
                        <Text style={styles.sectionTitle}>Add link</Text>
                        <View style={styles.items}>
                            {/*This is where the tasks will go*/}
                            {socials.map((social, index) => {
                                return (
                                    <TouchableOpacity
                                        key={index}
                                        onPress={() => addSocial(index)}
                                    >
                                        <Task text={social} />
                                    </TouchableOpacity>
                                )
                            })}
                        </View>
                    </View>
                </View>
                <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setOpen(false)}
                >
                    <Text style={styles.textStyle}>Try again</Text>
                </Pressable>
            </Modal>
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
        backgroundColor: '#fff',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
    },
    addText: {
        fontSize: 24,
        fontWeight: 'bold',
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
