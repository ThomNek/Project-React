import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  // Hàm xử lý khi nhấn nút số hoặc phép tính
  const handlePress = (value) => {
    setInput(input + value);
  };

  // Hàm xử lý tính toán
  const calculateResult = () => {
    try {
      const evalResult = eval(input); // Tính kết quả của phép tính
      setResult(evalResult.toString());
    } catch (error) {
      setResult('Error');
    }
  };

  // Hàm xóa toàn bộ
  const clearAll = () => {
    setInput('');
    setResult('');
  };

  // Hàm quay lại (xóa ký tự cuối cùng)
  const undo = () => {
    setInput(input.slice(0, -1));
  };

  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.inputText}>{input}</Text>
        <Text style={styles.resultText}>{result}</Text>
      </View>

      <View style={styles.buttonsContainer}>
        {/* Hàng AC <- */}
        <View style={styles.row}>
          <TouchableOpacity style={styles.buttonSmall} onPress={clearAll}>
            <Text style={styles.buttonText}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSmall} onPress={undo}>
            <Text style={styles.buttonText}>←</Text>
          </TouchableOpacity>
          <View style={styles.spacer} />
        </View>

        {/* Hàng số 9 8 7 + */}
        <View style={styles.row}>
          <TouchableOpacity style={styles.buttonSmall} onPress={() => handlePress('9')}>
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSmall} onPress={() => handlePress('8')}>
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSmall} onPress={() => handlePress('7')}>
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSmall} onPress={() => handlePress('+')}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>

        {/* Hàng số 6 5 4 - */}
        <View style={styles.row}>
          <TouchableOpacity style={styles.buttonSmall} onPress={() => handlePress('6')}>
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSmall} onPress={() => handlePress('5')}>
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSmall} onPress={() => handlePress('4')}>
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSmall} onPress={() => handlePress('-')}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>

        {/* Hàng số 3 2 1 * */}
        <View style={styles.row}>
          <TouchableOpacity style={styles.buttonSmall} onPress={() => handlePress('3')}>
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSmall} onPress={() => handlePress('2')}>
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSmall} onPress={() => handlePress('1')}>
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSmall} onPress={() => handlePress('*')}>
            <Text style={styles.buttonText}>*</Text>
          </TouchableOpacity>
        </View>

        {/* Hàng số 0 . = / */}
        <View style={styles.row}>
          <TouchableOpacity style={styles.buttonWide} onPress={() => handlePress('0')}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSmall} onPress={() => handlePress('.')}>
            <Text style={styles.buttonText}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.equalButton} onPress={calculateResult}>
            <Text style={styles.buttonText}>=</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSmall} onPress={() => handlePress('/')}>
            <Text style={styles.buttonText}>/</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  displayContainer: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  inputText: {
    fontSize: 35, // Giảm kích thước font
    color: '#333',
  },
  resultText: {
    fontSize: 25, // Giảm kích thước font
    color: '#888',
  },
  buttonsContainer: {
    flex: 3,
    padding: 10,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  buttonSmall: {
    flex: 1,
    padding: 10, // Giảm padding
    margin: 3, // Giảm margin
    backgroundColor: '#f0f0f0',
    borderRadius: 8, // Giảm border radius
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1, // Giảm độ nổi
  },
  buttonWide: {
    flex: 2,
    padding: 10, // Giảm padding
    margin: 3, // Giảm margin
    backgroundColor: '#f0f0f0',
    borderRadius: 8, // Giảm border radius
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1, // Giảm độ nổi
  },
  buttonText: {
    fontSize: 30, // Giảm kích thước font
    color: '#333',
  },
  equalButton: {
    flex: 1,
    padding: 10, // Giảm padding
    margin: 3, // Giảm margin
    backgroundColor: '#4CAF50',
    borderRadius: 8, // Giảm border radius
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1, // Giảm độ nổi
  },
  spacer: {
    flex: 1,
    margin: 3, // Giảm margin
  },
});
