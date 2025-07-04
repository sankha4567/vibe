
import { dehydrate,HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient,trpc } from "./api/trpc/server";
import { ClientGreeting } from "./client-greeting";
const Home = async()=>{
 const queryClient = getQueryClient();
 void queryClient.prefetchQuery(
  trpc.hello.queryOptions({
    text : " Sankha Subhra Moitra"
  })
 );
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
    <div>
     <ClientGreeting/>
    </div>
    </HydrationBoundary>
  )
}
  export default Home;