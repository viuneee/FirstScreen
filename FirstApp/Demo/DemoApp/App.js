/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  StatusBar,
  Dimensions,
  ScrollView,
} from 'react-native';

const {width} = Dimensions.get('window');
//Tải thư viện icon về: run npm install --save react-native-vector-icons
// Sau đó trước khi run thì link bằng cách: npx react-native link
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const HEADER_ICON_SIZE = 24;
const section_banner = require('./source/section_banner.png');
const item_image_1 = require('./source/item_image_1.png');
const item_image_2 = require('./source/item_image_2.png');
const item_image_3 = require('./source/item_image_3.png');
const item_image_4 = require('./source/item_image_4.png');

const ProductItem = ({Image, Name, Price}) => (
  <View style={styles.itemContainer}>
          <Image source={Image} style={styles.itemImage} />
          <Text style={styles.itemName} numberOfLines={2}>
                {Name}</Text>
          <Text style={styles.itemPrice}>{Price}</Text>
        </View>
);

const DemoApp =() => {
  return (
    //Header
    <View>  
      <StatusBar barStyle="light-content"/>
      <View style = {styles.headerContainer}>
        <View style = {styles.inputContainer}>
          <FontAwesome name="search" size={24} color="#969696"/>
          <Text style={styles.inputText}>Bạn muốn tìm gì nè?</Text>
        </View>
        <View style={styles.cartContainer}>
          <FontAwesome name="shopping-cart" size={24} color="#fff"/>
        </View>
      </View>

      {/* Body */}
      <View style={styles.bodyContainer}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Điện thoại - Máy tính bảng</Text>
          <Image source={section_banner} style={styles.sectionImage}/>
        <ScrollView horizontal={true} >
          <View style={styles.filterContainer}>
            <View style={styles.filterActiveButtonContainer}>
              <Text style={styles.filterActiveText}>Tất cả</Text>
            </View>
            <View style={styles.filterInactiveButtonContainer}>
              <Text style={styles.filterInactiveText}>Điện thoại</Text>
            </View>
            <View style={styles.filterInactiveButtonContainer}>
              <Text style={styles.filterInactiveText}>Máy tính bảng</Text>
            </View>
            <View style={styles.filterInactiveButtonContainer}>
              <Text style={styles.filterInactiveText}>Loa</Text>
            </View>
          </View>
        </ScrollView> 
          
          <ScrollView horizontal={true} >       
        <View style={styles.listItemContainer}>
        <View>
        {/* Hinh 1 */}
        <ProductItem
          Name="Điện thoại Vsmart Bee"
          Image={item_image_1}
          Price="699.000đ" />
        {/* Hinh 2 */}
        <ProductItem
          Name="Điện thoại Vsmart Bee"
          Image={item_image_1}
          Price="699.000đ" />
        </View>
{/* ------------------------------------------- */}
        <View>
        {/* Hinh 1 */}
        <ProductItem
          Name="Điện thoại Vsmart Bee"
          Image={item_image_2}
          Price="699.000đ" />

        {/* Hinh 2 */}
        <ProductItem
          Name="Điện thoại Vsmart Bee"
          Image={item_image_2}
          Price="699.000đ" />
        </View>
{/* ------------------------------------------- */}
        <View>
        {/* Hinh 1 */}
        <ProductItem
          Name="Điện thoại Vsmart Bee"
          Image={item_image_3}
          Price="699.000đ" />

        {/* Hinh 2 */}
        <ProductItem
          Name="Điện thoại Vsmart Bee"
          Image={item_image_3}
          Price="699.000đ" />
        </View>
{/* ------------------------------------------- */}
        <View>
        {/* Hinh 1 */}
        <ProductItem
          Name="Điện thoại Vsmart Bee"
          Image={item_image_4}
          Price="699.000đ" />

        {/* Hinh 2 */}
        <ProductItem
          Name="Điện thoại Vsmart Bee"
          Image={item_image_4}
          Price="699.000đ" />
        </View>
{/* ------------------------------------------- */}
        </View>
        </ScrollView>
        {/* See more */}
        <View style={styles.seeMoreContainer}>
        <Text style={styles.seeMoreText}>
            XEM THÊM 1127 SẢN PHẨM
        </Text>
        </View>
        </View>
      </View>
    </View>
  );
};

// Tạo StyleSheet
const styles = StyleSheet.create({
  headerContainer: { 
    flexDirection: 'row',
    paddingTop: 50,
    paddingBottom: 4,
    backgroundColor: '#1e88e5',
  },

  inputContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    flex: 1,
    marginLeft: 10,
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 2,
  },

  inputText: {
    color: '#969696',
    fontSize: 14,
    marginLeft: 8,
    fontWeight: '500',
  },

  cartContainer: {
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  bodyContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },

  sectionContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
  },
  sectionTitle: {
    fontWeight: '700',
    fontSize: 16,
    color: '#2f2f2f',
    marginVertical: 12,
  },
  sectionImage: {
    width: width - 24,
    height: 130,
    borderRadius: 4,
  },

  filterContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  filterActiveButtonContainer: {
    backgroundColor: '#242424',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    marginRight: 10,
  },
  filterInactiveButtonContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    borderColor: '#5a5a5a',
    borderWidth: 1,
    marginRight: 10,
  },
  filterActiveText: {
    color: '#fff',
  },
  filterInactiveText: {
    color: '#5a5a5a',
  },
  //
  listItemContainer: {
    flexDirection: 'row',
  },
  itemContainer: {
    width: 100,
    marginRight: 12,
    marginTop: 10,
  },
  itemImage: {
    width: 100,
    height: 120,
  },
  itemName: {
    fontSize: 14,
    color: '#484848',
    marginVertical: 4,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2a2a2a',
  },
  //
  seeMoreContainer: {
    marginTop: 10,
    padding: 12,
    borderTopWidth: 0.6,
    borderTopColor: '#ededed',
    alignItems: 'center',
  },
  seeMoreText: {
    color: '#0e45b4',
  },

  screenContainer: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    paddingTop: 50,
    backgroundColor: '#1e88e5',
    justifyContent: 'space-between',
    paddingBottom: 12,
  },
  cartContainer: {
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartIcon: {
    width: HEADER_ICON_SIZE,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
  },

  screenContainer: {
    flex: 1,
  },
  bodyContainer: {
    flex: 1,
    backgroundColor: '#ededed',
  },
  //
  userContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 22,
    alignItems: 'center',
  },
  avatarContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1e88e5',
  },
  textContainer: {
    flex: 1,
    marginLeft: 20,
  },
  welcomeText: {
    color: '#828282',
  },
  authText: {
    color: '#1e88e5',
    fontSize: 18,
    fontWeight: '500',
  },
  //
  itemContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
  },
  itemText: {
    flex: 1,
    color: '#1e1e1e',
  },
  //
  divider: {
    height: 10,
  },
});



export default DemoApp;
