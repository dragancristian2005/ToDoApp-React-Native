import { SafeAreaView } from "react-native";

const KContainer = ({ children }) => {
  return <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>;
};

export default KContainer;
