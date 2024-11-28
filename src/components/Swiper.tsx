import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SwiperFlatList } from 'react-native-swiper-flatlist';


export default ({children,onChangeIndex,goToNext}) => {
  const insets = useSafeAreaInsets()
  const scrollRef = React.useRef<SwiperFlatList>(null);
useEffect(() => {
  if(goToNext==0) return
  let currentIndex = scrollRef.current.getCurrentIndex()
    scrollRef.current.scrollToIndex({index:currentIndex+1})

}, [goToNext])

  return (
    <SwiperFlatList
      showPagination
      paginationStyle={{bottom:80,left:20}}
      paginationStyleItemActive={{width:35,height:10}} 
      paginationStyleItem	={{height:10,width:15,marginHorizontal:3}}
      paginationDefaultColor='#353cab'
      paginationActiveColor='#4cd9fc'
      ref={scrollRef}
      onChangeIndex={({ index, prevIndex }) => onChangeIndex(index)}
    >{children}
    </SwiperFlatList>
  );
};

const styles = StyleSheet.create({

});