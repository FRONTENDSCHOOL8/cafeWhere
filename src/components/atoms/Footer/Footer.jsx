import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="w-full bg-[#E1E1E1] p-5 text-xs">
      <div>
        <ul>
          <li>
            <p className="font-semibold">(주)구조요청</p>
            <div className="item-container my-10pxr leading-[180%]">
              <ul>
                <li>
                  <p>
                    <span className="mr-2 text-[#6B6B6B]">대표자</span>
                    <span>이정현</span>
                  </p>
                  <address className="not-italic">
                    <span className="mr-2 text-[#6B6B6B]">주소</span>
                    <span>
                      서울 종로구 종로3길 17 디타워 광화문 17층 (D타워)
                    </span>
                  </address>
                  <p>
                    <span className="mr-2 text-[#6B6B6B]">사업자등록번호</span>
                    <span>112-82-12577</span>
                  </p>
                  <p>
                    <span className="mr-2 text-[#6B6B6B]">고객센터</span>
                    <span>112</span>
                  </p>
                  <p>
                    <span className="mr-2 text-[#6B6B6B]">통신판매업</span>
                    <span>신고번호 2024-서울강남-02482</span>
                  </p>
                  <p>
                    <span className="mr-2 text-[#6B6B6B]">9조요청</span>
                    <span>119</span>
                  </p>
                  <p>
                    <span className="mr-2 text-[#6B6B6B]">개인정보담당</span>
                    <span>9teamhelp@sos.com</span>
                  </p>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <ul className="footer-policy flex flex-row font-semibold leading-[150%] text-[#6b6b6b]">
          <li>
            <Link className="after:mx-2pxr after:content-['|']" to="/">
              이용약관
            </Link>
          </li>
          <li>
            <Link className="after:mx-2pxr after:content-['|']" to="/">
              개인정보 처리방침
            </Link>
          </li>
          <li>
            <Link className="after:mx-2pxr after:content-['|']" to="/">
              인재 채용
            </Link>
          </li>
          <li>
            <Link to="/">공지사항</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
