function CategoryItem({ icon, keyword, backgroundColor }) {
  return (
    <figure className="flex w-1/4 flex-col items-center gap-1">
      {/* 라우터 연결해야 함 */}
      <div
        style={{ backgroundColor: backgroundColor }}
        className="flex h-64pxr w-64pxr items-center justify-center rounded-lg"
      >
        <img src={icon} alt={keyword} className="h-10 w-10" />
      </div>
      <figcaption className="text-xs">{keyword}</figcaption>
    </figure>
  );
}

export default CategoryItem;
