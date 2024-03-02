import { CategoryItem } from '@/components/atoms';

const CATEGORY_URL = `${import.meta.env.VITE_PB_URL}/api/collections/category/records`;

const getData = async () => {
  const response = await fetch(CATEGORY_URL);
  const data = await response.json();

  return data.items;
};
const category = await getData();
console.log(category);

function Category() {
  return (
    <div className="mx-10 my-5 flex w-375pxr flex-wrap gap-x-4 gap-y-2">
      {category.map(({ id, icon, collectionId, backgroundColor, keyword }) => (
        <CategoryItem
          key={id}
          icon={`${import.meta.env.VITE_PB_URL}/api/files/${collectionId}/${id}/${icon}`}
          backgroundColor={backgroundColor}
          keyword={keyword}
        />
      ))}
    </div>
  );
}

export default Category;
