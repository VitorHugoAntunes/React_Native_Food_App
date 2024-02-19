import { CategoryButton } from '@/components/Category-button';
import { Header } from '@/components/Header';
import { View, Text, FlatList } from 'react-native';

import { CATEGORIES } from '@/utils/data/products';
import { useState } from 'react';

export default function Home() {
  const [category, setCategory] = useState(CATEGORIES[0]);

  function handleCategorySelected(selectedCategory: string) {
    setCategory(selectedCategory);
  }

  return (
    <View className="flex-1 pt-8">
      <Header title='Faça seu pedido' cartQuantityItems={2} />

      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <CategoryButton title={item} isSelected={item === category} onPress={() => handleCategorySelected(item)} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        className='max-h-10 mt-5'
        contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
      />
    </View>
  )
}