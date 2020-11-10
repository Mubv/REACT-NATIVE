import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Picker,
    Dimensions,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" />

            <SafeAreaView>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>
                    <View style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>Esteira Dev Ops</Text>

                        <Text style={styles.sectionDescription}>
                            Select you desired super power, to deploy.
                        </Text>

                        <View style={styles.pickerContainer}>
                            <Picker style={styles.picker}>
                                <Picker.Item
                                    label="Invisibility"
                                    value="Invisibility"
                                />

                                <Picker.Item label="Flying" value="Flying" />

                                <Picker.Item
                                    label="Super Speed"
                                    value="Super Speed"
                                />

                                <Picker.Item
                                    label="Super Senses"
                                    value="Super Senses"
                                />

                                <Picker.Item
                                    label="Mind Control"
                                    value="Mind Control"
                                />

                                <Picker.Item
                                    label="Telekinesis"
                                    value="Telekinesis"
                                />
                            </Picker>
                        </View>

                        <Text style={styles.footer}>Footer inc.</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    scrollView: {},

    sectionContainer: {
        paddingTop: 32,
        paddingHorizontal: 24,
        height: Dimensions.get('screen').height - StatusBar.currentHeight,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },

    pickerContainer: {
        marginTop: 30,
        elevation: 1,
        borderWidth: 1,
        borderColor: '#EEEEEE',
        height: 50,
        width: '100%',
    },

    picker: {
        height: 50,
        width: '100%',
    },

    footer: {
        marginTop: 'auto',
    },
});

export default App;
