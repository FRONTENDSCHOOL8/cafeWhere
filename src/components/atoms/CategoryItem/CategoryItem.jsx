function CategoryItem({ icon, keyword, backgroundColor }) {
  return (
    <figure className="flex w-50pxr flex-col items-center gap-1">
      {/* 라우터 연결해야 함 */}
      <div
        style={{ backgroundColor: backgroundColor }}
        className="flex h-46pxr w-46pxr items-center justify-center rounded-lg"
      >
        <img src={icon} alt={keyword} className="h-8 w-8" />
      </div>
      <figcaption className="text-xs">{keyword}</figcaption>
    </figure>
  );
}

export default CategoryItem;
