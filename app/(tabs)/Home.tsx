import { StyleSheet, Text, View } from "react-native";
import { SharedProfile } from "../components/SharedProfile";
import { Header } from "../components/Header";
import ChannelName from "../components/ChannelName";
import { useState } from "react";

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

  const [selected, setSelected] = useState(channels[0].id);
  return (
    <>
      <View>
        <SharedProfile />
        <View style={styles.mainContainer}>
          <Header title={"channels"} />
          <View style={styles.channelsContainer}>
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
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: 10,
  },
  channelsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    marginVertical: 20,
  },
});

export default Home;
