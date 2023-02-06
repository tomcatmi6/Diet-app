import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import "./i18n.config";
import { useTranslation } from "react-i18next";
import {recipes} from './assets/database/recipes';

export default function App() {
const { t } = useTranslation();
const ingr = recipes();
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text>{t('hello')}</Text>

{ingr.map((ingredient) => <div>
  {ingredient.name}
  {ingredient.description}

</div>)}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
