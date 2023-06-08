import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Search from '@/pages/Search';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Search></Search>
    </QueryClientProvider>
  );
}

export default App;

