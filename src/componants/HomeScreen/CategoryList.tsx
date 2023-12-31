import {FlatList, View} from 'react-native';
import React from 'react';
import CategoryItem, {CategoryItemProps} from './CategoryItem';
interface CategoryListProps {
  categories: CategoryItemProps[];
  onTap: (id: string, name: string) => void;
}

const CategoryList = (props: CategoryListProps) => {
  return (
    <View style={{height:120}}>
    <FlatList
      data={props.categories}
      renderItem={item => (
        <CategoryItem
          id={item.item.id}
          name={item.item.name}
          icon={item.item.icon}
          onTap={props.onTap}
        />
      )}
      keyExtractor={(category) => category.id}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
    </View>
  );
};

export default CategoryList;
