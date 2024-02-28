const inputStyle =
  'h-full w-full rounded-xl px-5 py-3 font-normal outline-none';

function UserInfoInput({
  type,
  id,
  placeholder,
  required,
  message,
  setUser,
  validateInput,
  setError,
}) {
  return (
    <>
      <input
        type={type}
        name={id}
        id={id}
        placeholder={placeholder}
        className={inputStyle}
        required={required}
        onChange={(e) => {
          if (validateInput(e.target.value) || e.target.value === '') {
            setUser(e.target.value);
            setError({
              borderColor: 'border-greyscale-100',
              message: '',
            });
          } else {
            setError({
              borderColor: 'border-semantic-error',
              message: message,
            });
          }
        }}
      />
    </>
  );
}

export default UserInfoInput;
