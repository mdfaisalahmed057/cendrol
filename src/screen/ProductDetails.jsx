import React, { useEffect } from 'react'
import { View, Text, Image, FlatList, useWindowDimensions, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { fetchingProduct } from '../ReducStore/prouctSlice';
import ProductScreen from './ProductScreen';

function ProductDetails({ route }) {
  const { productId } = route.params
  const { width } = useWindowDimensions()
  const products = useSelector((state) => state.products.products.find((product) => product.id === productId));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchingProduct());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <FlatList
        data={[products]}
        renderItem={({ item }) => (
          <>
          <View>
            {item.images && (
              <FlatList
                data={item.images}
                horizontal
                renderItem={({ item }) => (
                  <Image source={{ uri: item }} style={{ width: width,aspectRatio: 1 }} />
                )}
                keyExtractor={(item, index) => index.toString()} />

            )}
            <View style={{ padding: 20 }}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.price}>${item.price}</Text>
              <Text style={styles.description}>{item.description}</Text>

            </View>
          </View>
            <ProductScreen />
          </>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    marginTop: 8,
  },

  title: {
    fontSize: 34,
    fontWeight: "500",
    marginVertical: 10,
  },

  price: {
    fontWeight: "500",
    fontSize: 16,
    letterSpacing: 1.5,
  },

  description: {
    marginVertical: 10,
    fontSize: 18,
    lineHeight: 30,
    fontWeight: "300",
  },



 
});

export default ProductDetails
