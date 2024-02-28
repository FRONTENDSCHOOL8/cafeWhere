function UserInfoLabel({ id, label }) {
  return (
    <label htmlFor={id} className="font-semibold">
      {label}
    </label>
  );
}

export default UserInfoLabel;
