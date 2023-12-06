import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet } from 'react-native';

const SearchBarExample = () => {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([
    { id: '1', title: 'Apple' },
    { id: '2', title: 'Banana' },
    { id: '3', title: 'Cherry' },
    // ... more data
  ]);

  const handleSearch = (text) => {
    // Filter the data based on the search query
    const filteredData = data.filter((item) =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );
    setQuery(text);
    setData(filteredData);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        onChangeText={handleSearch}
        value={query}
      />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default SearchBarExample;
