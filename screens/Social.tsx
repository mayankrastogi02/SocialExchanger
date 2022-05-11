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
} from 'react-native'
import Task from '../components/Tasks.js'
import React, { useState } from 'react'

interface SocialScreenProps {
    navigation: any
}

export default function Social(props: SocialScreenProps) {
    const [task, setTask] = useState()
    const [taskItems, setTaskItems] = useState([])
    const [open, setOpen] = useState(false)
    const [openSocial, setOpenSocial] = useState(false)
    const socials = ['Instagram', 'Snapchat', 'Twitter']
    const socialLinks = []

    const addSocial = () => {
        console.log()
        console.log(openSocial)
        props.navigation.navigate('Link');
    }

    return (
        <View style={styles.container}>
            <View style={styles.container}>
                {/* Socials*/}
                <View style={styles.taskWrapper}>
                    <Text style={styles.sectionTitle}>Choose a social</Text>
                    <View style={styles.items}>
                        {/*This is where the tasks will go*/}
                        {socials.map((social, index) => {
                            return (
                                <TouchableOpacity
                                    key={index}
                                    onPress={() => addSocial()}
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
                onPress={() => props.navigation.navigate('Home')}
            >
                <Text style={styles.textStyle}>Done</Text>
            </Pressable>
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
