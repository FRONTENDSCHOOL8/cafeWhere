function CategoryListName(props) {
  return (
    <>
      <h2 className="mb-4 ml-5 min-w-375pxr max-w-680pxr text-20pxr font-semibold leading-5">
        {props.children}
      </h2>
    </>
  );
}

export default CategoryListName;
