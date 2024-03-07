import { useState, useEffect } from 'react';
import { CategoryItem } from '@/components/atoms';

const CATEGORY_URL = `${import.meta.env.VITE_PB_URL}/api/collections/category/records`;

function Category() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(CATEGORY_URL);
        const data = await response.json();
        setCategories(data.items); // 데이터 가져온 후 state 업데이트
      } catch (error) {
        console.error('카테고리 데이터 가져오기 오류:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="my-5 flex min-w-375pxr max-w-680pxr flex-wrap justify-center gap-y-2">
      {categories.map(
        ({ id, icon, collectionId, backgroundColor, keyword }) => (
          <CategoryItem
            key={id}
            icon={`${import.meta.env.VITE_PB_URL}/api/files/${collectionId}/${id}/${icon}`}
            backgroundColor={backgroundColor}
            keyword={keyword}
          />
        )
      )}
    </div>
  );
}

export default Category;
