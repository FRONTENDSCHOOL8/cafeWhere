import visibleIcon from '/visible.png';
import hiddenIcon from '/hidden.png';
import { useState } from 'react';

const Icon = {
  visible: {
    src: visibleIcon,
    alt: '비밀번호 표시',
  },
  hidden: {
    src: hiddenIcon,
    alt: '비밀번호 숨기기',
  },
};

const inputStyle =
  'h-full w-full rounded-xl px-5 py-3 font-normal outline-none';

function PasswordIcon({ PasswordVisible, setPasswordVisible }) {
  return (
    <img
      className="cursor-pointer px-3"
      src={PasswordVisible ? Icon.visible.src : Icon.hidden.src}
      alt={PasswordVisible ? Icon.visible.alt : Icon.hidden.alt}
      onClick={() => setPasswordVisible(!PasswordVisible)}
    />
  );
}

function InputField({
  id,
  label,
  type,
  required,
  placeholder,
  ErrorMessage,
  setUser,
  validateInput,
  PasswordVisible,
  setPasswordVisible,
}) {
  const [error, setError] = useState({
    borderColor: 'border-greyscale-100',
    message: '',
  });

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="font-semibold">
        {label}
      </label>
      <div
        className={`flex h-12 min-w-375pxr max-w-680pxr items-center rounded-xl border bg-white ${error.borderColor}`}
      >
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
                message: ErrorMessage,
              });
            }
          }}
        />
        {label.includes('비밀번호') && (
          <PasswordIcon
            PasswordVisible={PasswordVisible}
            setPasswordVisible={setPasswordVisible}
          />
        )}
      </div>
      <span className="h-5 text-sm text-semantic-error">{error.message}</span>
    </div>
  );
}

export default InputField;
