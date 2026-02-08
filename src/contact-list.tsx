import { Button, PermissionsAndroid, StyleSheet, Text, View, FlatList } from "react-native";
import Contacts, { Contact } from 'react-native-contacts';
import { useState } from "react";
import { getBaseUrl, endpoint } from "./config";

const ContactItem = ({ contact }: { contact: Contact }) => {
  return (
    <View style={styles.item}>
      <Text>Name: {contact.displayName}</Text>
      <Text>Number: {contact.phoneNumbers[0]?.number || "N/A"}</Text>
      <Text>Email: {contact.emailAddresses[0]?.email || "N/A"}</Text>
    </View>
  );
};

const ContactList = ({ contacts }: { contacts: Contact[] }) => {
  return (
    <FlatList
      data={contacts}
      keyExtractor={(item) => item.recordID}
      renderItem={({ item }) => <ContactItem contact={item} />}
    />
  );
};

export default function ContactWrapper() {
  const [contacts, setContacts] = useState<Contact[]>([]);

  async function getContacts() {
    console.log("Requesting permission to access contacts...");
    const permission = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS
    );

    if (permission === PermissionsAndroid.RESULTS.GRANTED) {
      const contactList = await Contacts.getAll();
      setContacts(contactList);
      console.log("Contacts loaded successfully");
    } else {
      console.log("Permission denied");
    }
  }

  async function sendToServer(){
    const url = `${getBaseUrl()}${endpoint}`;
    console.log("Sending contacts to server at:", url);
    const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ contacts })
      });
      const data = await res.json();
      console.log("Server response:", data);
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact List</Text>

      <View style={styles.buttons}>
        <Button title="Load Contacts" onPress={getContacts} />
        <Button title="Send Contacts to Server" onPress={sendToServer} />
      </View>
      

      <ContactList contacts={contacts} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 0
  },
  title: {
    fontSize: 20,
    marginBottom: 10
  },
  item: {
    padding: 10,
    borderBottomWidth: 1
  },
  buttons:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  }
});
