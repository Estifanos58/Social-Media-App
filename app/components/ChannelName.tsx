import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ChannelName = ({
  selected,
  setSelected,
  channel,
}: {
    selected:number,
    setSelected: any,
    channel: any
}) => {
  return (
    <TouchableOpacity onPress={()=>setSelected(channel.id)} style={selected === channel.id ? styles.selectedContainer : styles.channelNameContainer}>
      <View style={styles.groupLeft}>
        <Text style={styles.icon}>#</Text>
        <View>
          <Text  style={selected === channel.id ? styles.selectedTitle :styles.title}>{channel.name}</Text>
          <Text style={selected === channel.id ? styles.selectedDesc:styles.description}>
            {channel.description.length > 25
              ? channel.description.substring(0, 30) + "..."
              : channel.description}
          </Text>
        </View>
      </View>
      {channel.notification && (
        <View style={styles.notification}>
          <Text style={styles.notText}>{channel.notification}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  channelNameContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: 15,
  },
  selectedContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: 15,
    borderLeftWidth: 4,
    borderLeftColor: "orange",
  },
  groupLeft: {
    display: "flex",
    flexDirection: "row",
    gap: 7,
    alignItems: "center",
  },
  icon: {
    fontSize: 20,
    fontWeight: "700",
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
  },
  selectedTitle: {
    fontSize: 16,
    fontWeight: "800",
  },
  selectedDesc: {
    fontSize: 13,
    fontWeight: "300",
    color: 'gray'
  },
  description: {
    fontSize: 12,
    fontWeight: "200",
    color: "gray",
  },
  notification: {
    backgroundColor: "orange",
    borderRadius: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 35,
    height: 35,
  },
  notText: {
    color: "#fff",
    fontSize: 20,
  },
});

export default ChannelName;
