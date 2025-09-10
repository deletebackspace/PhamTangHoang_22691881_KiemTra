import {View, StyleSheet,Text,TextInput} from 'react-native';



export default function Screen() {
  function tinhToan(a,b,phepTinh){
    if(phepTinh==='+')
      return a+b;
    if(phepTinh==='-')
      return a-b;
     if(phepTinh==='*')
      return a*b;
    if(phepTinh==='/')
      return a/b;
  }
  return (
    <View style={styles.container}>
    <Text>Màn hình tính toán </Text>
    <View style={{flexDirection: 'row',gap: 15}}><Text>a </Text> 
      <TextInput/></View>
     <View style={{flexDirection: 'row',gap:15}}><Text>Phép tính </Text> 
      <TextInput/></View>
     <View style={{flexDirection: 'row',gap: 15}}><Text>b </Text> 
      <TextInput/></View>
      <View style={{flexDirection: 'row',gap: 15}}><Text>Kết quả </Text> 
      <TextInput onPress={tinhToan}/></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  
});
