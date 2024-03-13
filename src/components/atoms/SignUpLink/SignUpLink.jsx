import { Link } from 'react-router-dom';

function SignUpLink() {
  return (
    <div className="flex justify-center gap-2 text-14pxr">
      <span>계정이 없으신가요?</span>
      <Link to="/join" className="cursor-pointer text-primary-colors">
        회원가입
      </Link>
    </div>
  );
}

export default SignUpLink;
