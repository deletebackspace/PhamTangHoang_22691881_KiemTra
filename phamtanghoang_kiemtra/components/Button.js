import { Text, View, StyleSheet, TouchableOpacity  } from 'react-native';

export default function Button() {
  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row',flexWrap:'wrap',gap:12}}>
        <TouchableOpacity style={styles.button}>
              <Text style={{color:'white'}}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
              <Text style={{color:'white'}}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
              <Text style={{color:'white'}}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
              <Text style={{color:'white'}}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
              <Text style={{color:'white'}}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
              <Text style={{color:'white'}}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
              <Text style={{color:'white'}}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
              <Text style={{color:'white'}}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
              <Text style={{color:'white'}}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
              <Text style={{color:'white'}}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
              <Text style={{color:'white'}}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
              <Text style={{color:'white'}}>*</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
              <Text style={{color:'white'}}>/</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1}>
              <Text style={{color:'white'}}>Xóa</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
   button:{
    backgroundColor:'#0A5EB7',
    padding: 10,
    gap: 12
  },
  button1: {
    backgroundColor:'#0A14B7',
    padding: 7
  }
});
