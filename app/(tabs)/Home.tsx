import { StyleSheet, Text, View } from "react-native";
import { SharedProfile } from "../components/SharedProfile";
import { Header } from "../components/Header";
import ChannelName from "../components/ChannelName";
import { useState } from "react";
import DirectMessage from "../components/DIrectMessage";
import { ScrollView } from "react-native";

const Home = () => {
  const channels = [
    {
      id: 1,
      name: "general",
      description: "Latest updated from the team is here",
      notification: 3,
    },
    {
      id: 2,
      name: "marketing",
      description: "Company discussion",
      notification: 0,
    },
  ];

  const directMessages = [
    {
        id:1,
        name: "James Wilson",
        lastText:"Can we discuss the new feature",
        image: "",
        lastTime: '6w',
    },
    {
        id:2,
        name: "Sarah Parker",
        lastText:"Thanks for the update",
        image: "",
        lastTime: '1h',
    },
  ]

  const groups = [
    {
      id: 1,
      name: "Design Team"
    }
  ]
  const [selected, setSelected] = useState(channels[0].id);
  return (
    <>
      <View>
        <SharedProfile />
        <ScrollView style={styles.mainContainer}>
          <Header title={"channels"} />
          <View style={styles.Container}>
            {channels.map((channel) => (
              <ChannelName
                selected={selected}
                setSelected={setSelected}
                key={channel.id}
                channel={channel}
              />
            ))}
          </View>

          <Header title="direct Messages" />

          <View style={styles.Container}>
            {
                directMessages.map((messages)=>(
                    <DirectMessage key={messages.id} messages={messages}/>
                ))
            }
          </View>

          <Header title="groups"/>

        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: 10,
  },
  Container: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    marginVertical: 20,
  },
});

export default Home;
