import visibleIcon from '/visible.png';
import hiddenIcon from '/hidden.png';

const icon = {
  visible: {
    src: visibleIcon,
    alt: '비밀번호 표시',
  },
  hidden: {
    src: hiddenIcon,
    alt: '비밀번호 숨기기',
  },
};

function PasswordIcon({ passwordVisible, setPasswordVisible }) {
  const iconType = icon[passwordVisible ? 'visible' : 'hidden'];
  return (
    <button
      type="button"
      className="cursor-pointer p-1"
      onClick={() => setPasswordVisible(!passwordVisible)}
      title={iconType.alt}
    >
      <img src={iconType.src} alt={iconType.alt} />
    </button>
  );
}

export default PasswordIcon;
