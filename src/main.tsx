import { Button, StyleSheet, View } from "react-native"
import ContactWrapper from "./contact-list";
import SettingsModal from "./settings-modal";
import { useState } from "react";

const MainApp = () => {
    const [settingsVisible, setSettingsVisible] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.settingsStyle}>
                <Button title="Open Settings" onPress={() => { setSettingsVisible(true); }} />
                <SettingsModal visible={settingsVisible} onClose={() => { setSettingsVisible(false); }} />
            </View>
            <ContactWrapper />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    textStyle: {
        fontSize: 24
    },
    settingsStyle:{
        alignItems: "flex-end",
        paddingTop: 50
    }
});

export default MainApp;