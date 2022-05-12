import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const Task = props => {
    const Instagram_icon = require('./Instagram.png')
    const Snapchat_icon = require('./Snapchat.png')
    const Twitter_icon = require('./Twitter.png')
    // let imgsrc = './' + props.text + '.png';
    // let icon = (props.text == "Instagram") ? Instagram_icon : Snapchat_icon;
    let icon
    if (props.text == 'Instagram') icon = Instagram_icon
    if (props.text == 'Snapchat') icon = Snapchat_icon
    if (props.text == 'Twitter') icon = Twitter_icon
    // console.log(imgsrc);
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}>
                    <Image source={icon} style={styles.icon}></Image>
                </View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            {/* <View style={styles.circular}></View> */}
            <Text stlye={styles.right}>{'>'}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        borderColor: '#000',
        borderWidth: 3,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        // opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },

    itemText: {
        maxWidth: '80%',
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5,
    },
    right: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    icon: {
        width: 24,
        height: 24,
        // backgroundColor: '#55BCF6',
        // opacity: 0.4,
        // borderRadius: 5,
        // marginRight: 15,
    },
})

export default Task
