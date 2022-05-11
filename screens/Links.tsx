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
} from 'react-native'
import Task from '../components/Tasks.js'
import React, { useState } from 'react'

interface LinkScreenProps {
    navigation: any
}

export default function Link(props: LinkScreenProps) {
    const [task, setTask] = useState(String)
    const [taskItems, setTaskItems] = useState([])
    const [open, setOpen] = useState(false)
    const [openSocial, setOpenSocial] = useState(false)
    const socials = ['Instagram', 'Snapchat', 'Twitter']
    const socialLinks = []

    const handleAddTask = () => {
        console.log(task)
        Keyboard.dismiss()
        if (task != null) {
            setTaskItems([...taskItems, task])
            setTask(null)
            // props.navigation.navigate('Home')
        } else {
            console.log(open)
            setOpen(true)
        }
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
            <View style={styles.container}>
                {/* Socials*/}
                <View style={styles.taskWrapper}>
                    <Text style={styles.sectionTitle}>Add a Link</Text>
                    <TextInput
                        style={styles.input}
                        placeholder={'Write a Task'}
                        value={task}
                        onChangeText={(text) => setTask(text)}
                    />
                </View>
            </View>
            <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => handleAddTask()}
            >
                <Text style={styles.textStyle}>Done</Text>
            </Pressable>
            <Modal
                animationType="slide"
                transparent={true}
                visible={open}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.')
                    setOpen(false)
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>
                            Task cannot be empty!
                        </Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setOpen(false)}
                        >
                            <Text style={styles.textStyle}>Try again</Text>
                        </Pressable>
                    </View>
                </View>
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
        width: 350,
        marginTop: 20,
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
