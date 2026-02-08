import { useState } from "react";
import { Modal, View, Text, Button, Switch, TextInput, StyleSheet } from "react-native";
import { setBaseUrl } from "./config";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.5)"
    },
    "form-text":{
        color: "black",
    }
});

const Form = ({baseUrl, setBaseUrlState} : {baseUrl: string, setBaseUrlState: (val: string) => void}) => {
    const onChangeText = (val: string) => {
        setBaseUrlState(val);
        setBaseUrl(val);
    }

    return (
        <View>
            <Text>Base URL:</Text>
            <TextInput style={styles["form-text"]}  placeholder="Enter base URL" onChangeText={onChangeText} value={baseUrl} />
        </View>
    )
}




export default function CustomModal({ visible, onClose }: { visible: boolean; onClose: () => void }) {

    const [testEnabled, setTestEnabled] = useState(false);
    const [baseUrl, setBaseUrlState] = useState("");

    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="slide"
            onRequestClose={onClose}
        >
            <View style={styles.container}>
                <View style={{ backgroundColor: "white", padding: 20 }}>
                    <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 20 }}>
                        <Text>Is Test?</Text>
                        <Switch
                            value={testEnabled}
                            onValueChange={setTestEnabled}
                        />
                    </View>

                    {testEnabled && Form({baseUrl, setBaseUrlState})}

                    <Button title="Close" onPress={onClose} />
                </View>
            </View>
        </Modal>
    );
}

