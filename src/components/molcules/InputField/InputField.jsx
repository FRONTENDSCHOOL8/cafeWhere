import visibleIcon from '/visible.png';
import hiddenIcon from '/hidden.png';

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
  label,
  placeholder,
  type,
  required,
  ErrorMessage,
  PasswordVisible,
  setPasswordVisible,
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={type} className="font-semibold">
        {label}
      </label>
      <div className="flex h-12 min-w-375pxr max-w-680pxr items-center rounded-xl border border-greyscale-100">
        {/* border-semantic-error */}
        <input
          type={type}
          name={type}
          id={type}
          placeholder={placeholder}
          className={inputStyle}
          required={required}
        />
        {label.includes('비밀번호') && (
          <PasswordIcon
            PasswordVisible={PasswordVisible}
            setPasswordVisible={setPasswordVisible}
          />
        )}
      </div>
      <span className="h-5 text-sm text-semantic-error ">{ErrorMessage}</span>
    </div>
  );
}

export default InputField;
