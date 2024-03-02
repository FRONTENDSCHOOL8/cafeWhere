function Divider({ children = '또는'}) {
  return (
    <div role="none" className="mx-30pxr my-4 flex items-center p-2">
      <div className="flex-1 border-t border-[#E2E2E2]"/>
      <div className="mx-4 text-[#757575]">{children}</div>
      <div className="flex-1 border-t border-[#E2E2E2]"/>
    </div>
  );
}

export default Divider;
