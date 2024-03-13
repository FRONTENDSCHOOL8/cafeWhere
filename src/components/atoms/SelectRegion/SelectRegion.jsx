import { useRegionStore } from '@/store';

function SelectRegion() {
  const { region, setRegion } = useRegionStore();

  const handleChangeRegion = (e) => {
    setRegion(e.target.value);
  };

  return (
    <form className="mx-5 py-4">
      <label htmlFor="region" className="sr-only">
        지역검색
      </label>
      <select
        name="region"
        id="region"
        className="bg-transparent"
        onChange={handleChangeRegion}
        value={region}
      >
        <option value="강남구">서울 강남구</option>
        <option value="마포구">서울 마포구</option>
        <option value="서대문구">서울 서대문구</option>
        <option value="성동구">서울 성동구</option>
        <option value="송파구">서울 송파구</option>
        <option value="영등포구">서울 영등포구</option>
        <option value="용산구">서울 용산구</option>
        <option value="종로구">서울 종로구</option>
      </select>
    </form>
  );
}

export default SelectRegion;
