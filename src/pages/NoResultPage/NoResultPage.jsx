import NoResult from '@/components/atoms/NoResult/NoResult';
import SearchField from '@/components/molecules/SearchField/SearchField';

function NoResultPage() {
  return (
    <div className="h-screen">
      <div className="mx-auto h-[calc(100vh-68px)] w-full min-w-375pxr max-w-680pxr">
        <div className="">
          <SearchField />
          <NoResult />
        </div>
      </div>
    </div>
  );
}

export default NoResultPage;
