import { CategoryButton } from '@/components/Category-button';
import { Header } from '@/components/Header';
import { View, Text, FlatList, SectionList } from 'react-native';

import { CATEGORIES, MENU } from '@/utils/data/products';
import { useState, useRef } from 'react';
import { Product } from '@/components/Product';

export default function Home() {
  const [category, setCategory] = useState(CATEGORIES[0]);

  const sectionListRef = useRef<SectionList>(null);

  function handleCategorySelected(selectedCategory: string) {
    setCategory(selectedCategory);

    const sectionIndex = CATEGORIES.findIndex((category) => category === selectedCategory)

    if (sectionListRef.current) {
      sectionListRef.current.scrollToLocation({
        animated: true,
        sectionIndex, // sectionIndex: sectionIndex
        itemIndex: 0,
      })
    }
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

      <SectionList
        ref={sectionListRef}
        sections={MENU}
        keyExtractor={(item) => item.id}
        stickySectionHeadersEnabled={false}
        renderItem={({ item }) =>
          <Product data={item} />
        }
        renderSectionHeader={({ section: { title } }) =>
          <Text className='text-xl text-white font-heading mt-8 mb-3'>{title}</Text>
        }
        className='flex-1 p-5'
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </View>
  )
}