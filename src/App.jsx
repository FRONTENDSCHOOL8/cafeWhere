import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Suspense, lazy, useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './routes';

// App 컴포넌트 외부에서 QueryClient 인스턴스 생성
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 1000 * 10,
    },
  },
});

const ReactQueryDevtoolsProduction = lazy(() =>
  import('@tanstack/react-query-devtools/build/modern/production.js').then(
    (d) => ({
      default: d.ReactQueryDevtools,
    })
  )
);

function App() {
  const [showDevtools, setShowDevtools] = useState(false);
  useEffect(() => {
    window.toggleDevtools = () => setShowDevtools((old) => !old);
  }, []);

  return (
    <div className="App mx-auto h-svh min-w-375pxr max-w-680pxr">
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen />
        {showDevtools && (
          <Suspense fallback={null}>
            <ReactQueryDevtoolsProduction />
          </Suspense>
        )}
        <RouterProvider router={router} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
