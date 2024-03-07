import { CategoryItem } from '@/components/atoms';
import { useEffect } from 'react';

const CATEGORY_URL = `${import.meta.env.VITE_PB_URL}/api/collections/category/records`;

// useEffect(() => {
//   const getData = async () => {
//     const response = await fetch(CATEGORY_URL);
//     const data = await response.json();
//     const category = data.items;
//     return category;
//   };
//   getData();
// }, []);

function Category() {
  return (
    <div className="my-5 flex min-w-375pxr max-w-680pxr flex-wrap justify-center gap-y-2">
      {/* {category.map(({ id, icon, collectionId, backgroundColor, keyword }) => (
        <CategoryItem
          key={id}
          icon={`${import.meta.env.VITE_PB_URL}/api/files/${collectionId}/${id}/${icon}`}
          backgroundColor={backgroundColor}
          keyword={keyword}
        />
      ))} */}
    </div>
  );
}

export default Category;
