import { useSearchParams } from 'react-router-dom';

function FetchingData() {
  const [serachParams] = useSearchParams();

  return (
    <div>
      <h2>데이터 가져오기</h2>
      <ul></ul>
    </div>
  );
}

export default FetchingData;
