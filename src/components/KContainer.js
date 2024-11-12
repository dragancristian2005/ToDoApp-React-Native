import { SafeAreaView } from "react-native";

const KContainer = ({ children }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      {children}
    </SafeAreaView>
  );
};

export default KContainer;
