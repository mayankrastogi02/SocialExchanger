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
    ImageBackground,
} from 'react-native'
import Task from '../components/Tasks.js'
import React, { useState } from 'react'
import QRCode from 'react-native-qrcode-svg'

interface CodeScreenProps {
    navigation: any
    route: { params }
}

export default function Code(props: CodeScreenProps) {
    const [task, setTask] = useState(String)
    const [taskItems, setTaskItems] = useState([])
    const [open, setOpen] = useState(false)
    const [openSocial, setOpenSocial] = useState(false)
    const socials = ['Instagram', 'Snapchat', 'Twitter']
    const socialLinks = []

    const handleDeleteTask = () => {
        console.log(task)
        Keyboard.dismiss()
        if (task != null) {
            props.route.params.link = ''
            console.log(props.route.params.link)
            console.log(props.route.params)
            props.navigation.navigate('Home')
        } else {
            console.log(open)
            setOpen(true)
        }
    }

    const image = require('../resources/img/white-gradient.jpg')

    return (
        <View style={styles.container}>
            <View style={styles.container}>
                {/* Socials*/}
                <View style={styles.taskWrapper}>
                    <Text style={styles.sectionTitle}>Exchange it!</Text>
                </View>
            </View>

            <View style={styles.qrcode}>
                <QRCode
                    value={props.route.params.link}
                    logoBackgroundColor="transparent"
                    size={200}
                />
            </View>

            <Pressable
                style={[styles.button, styles.deletebuttonClose]}
                onPress={() => handleDeleteTask()}
            >
                <Text style={styles.textStyle}>Delete</Text>
            </Pressable>
            <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() =>
                    props.navigation.navigate('Home', props.route.params)
                }
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
                            Link cannot be empty!
                        </Text>
                        <Pressable
                            style={[styles.button, styles.modalbuttonClose]}
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
    qrcode: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        marginBottom: 300,
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
        borderRadius: 0,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#000',
        position: 'absolute',
        bottom: 60,
        left: '10%',
        width: '80%',
        height: 60,

        justifyContent: 'center',
        alignItems: 'center',
    },
    deletebuttonClose: {
        // backgroundColor: '#F31B1B',
        backgroundColor: '#Bd9883',
        position: 'absolute',
        bottom: 130,
        left: '10%',
        width: '80%',
        height: 60,

        justifyContent: 'center',
        alignItems: 'center',
    },
    modalbuttonClose: {
        backgroundColor: '#F31B1B',
        width: 200,
        height: 50,
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
