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

function PasswordIcon({ PasswordVisible, setPasswordVisible }) {
  return (
    <img
      className="cursor-pointer px-3"
      src={PasswordVisible ? icon.visible.src : icon.hidden.src}
      alt={PasswordVisible ? icon.visible.alt : icon.hidden.alt}
      onClick={() => setPasswordVisible(!PasswordVisible)}
    />
  );
}

export default PasswordIcon;
