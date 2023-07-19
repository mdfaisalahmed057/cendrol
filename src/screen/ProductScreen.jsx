import React, { useEffect } from 'react';
import { StyleSheet, View, Image, Text, FlatList, Pressable } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { fetchingProduct } from '../ReducStore/prouctSlice';
export default function ProductScreen() {
  //product fetching from the redux store 
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchingProduct());
  }, [dispatch]);
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20 }}>Listed Products</Text>

      <FlatList
        data={products}
        renderItem={({ item }) => (
          <View style={styles.imagecontainer}>
            <Pressable
              onPress={() => {
                navigation.navigate('productDetails', { productId: item.id });
              }}
            >
              <Text style={styles.title}>{item.title}</Text>
              <Image source={{ uri: item.thumbnail }} style={styles.image} />
            </Pressable>

          </View>
        )}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10


  },
  title: {
    fontWeight: "500",
    marginVertical: 10,
    marginHorizontal: 10
  },
  imagecontainer: {
    width: "48%",
    marginBottom: 10,
    marginRight: 4,
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#D3D3D3',
    marginTop: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    marginLeft: 4
  },
});
