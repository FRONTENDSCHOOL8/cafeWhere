import { useNavigate } from 'react-router-dom';

function SignUpLink() {
  let joinNavigation = useNavigate();

  const handleJoin = () => {
    joinNavigation('/join');
  };

  return (
    <div className="flex justify-center gap-2 pt-2 text-14pxr">
      <span>계정이 없으신가요?</span>
      <span className="cursor-pointer text-primary-colors" onClick={handleJoin}>
        회원가입
      </span>
    </div>
  );
}

export default SignUpLink;
