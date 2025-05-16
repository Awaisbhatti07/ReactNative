import { Image, ScrollView, Text, View } from "react-native";
import React from "react";
import styles from "../styles/contactListStyle";

export default function ContactList() {
  const contactsList = [
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      phone: "+1 555-1234",
      avatar: "https://randomuser.me/api/portraits/women/21.jpg",
    },
    {
      id: 2,
      name: "Michael Lee",
      email: "michael.lee@example.com",
      phone: "+1 555-2345",
      avatar: "https://randomuser.me/api/portraits/men/34.jpg",
    },
    {
      id: 3,
      name: "Sofia Martinez",
      email: "sofia.martinez@example.com",
      phone: "+1 555-3456",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      id: 4,
      name: "David Kim",
      email: "david.kim@example.com",
      phone: "+1 555-4567",
      avatar: "https://randomuser.me/api/portraits/men/56.jpg",
    },
    {
      id: 5,
      name: "Emily Zhang",
      email: "emily.zhang@example.com",
      phone: "+1 555-5678",
      avatar: "https://randomuser.me/api/portraits/women/67.jpg",
    },
  ];

  return (
    <View style={{ marginTop: 20 }}>
      <Text style={styles.headingText}>Contacts</Text>
      <ScrollView style={[styles.scrollContainer, styles.elevatedCard]} scrollEnabled={false}>
        {contactsList.map((contact) => (
          <View key={contact.id} style={styles.userCard}>
            {/* key={contact.id} is for Unique key like we use in swift ui ForEach */}
            <Image source={{ uri: contact.avatar }} style={styles.avatar} />
            <View style={styles.userInfoView}>
              <Text style={styles.userName}>{contact.name}</Text>
              <Text style={styles.email}>{contact.email}</Text>
              <Text style={styles.phone}>{contact.phone}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
