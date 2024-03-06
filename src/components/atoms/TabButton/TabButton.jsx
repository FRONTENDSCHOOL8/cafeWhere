function TabButton({ active, onClick, children }) {
  return (
    <button
      className={`w-full rounded-t-lg border border-l border-r border-t border-[#999] bg-white px-4 py-2 text-center leading-5
        ${active ? 'border-b-0' : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default TabButton;
