import { FC } from "react";
import prismadb from "@/lib/prismadb";

interface pageProps {
  params: { storeId: string };
}

// DashboardPage
const page: FC<pageProps> = async ({ params }) => {
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
    },
  });
  return <div>Active Store: {store?.name}</div>;
};

export default page;
