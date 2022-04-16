import AppLayout from "@/layout/AppLayout";
import Loading from "@/components/Loading";
import type { ReactNode } from "react";
import { lazy, Suspense } from "react";
import type { RouteObject } from "react-router-dom";

const Home = lazy(() => import("@/pages/Home"));
const Main = lazy(() => import("@/pages/Main"));
const router: RouteObject[] = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: LazyLoad(<Home />),
      },
      {
        path: "main",
        element: LazyLoad(<Main />),
      },
    ],
  },
];

function LazyLoad(children: ReactNode): ReactNode {
  return (
    <Suspense
      fallback={
        <div className="w-screen h-screen flex justify-center items-center">
          <Loading />
        </div>
      }
    >
      {children}
    </Suspense>
  );
}

export default router;
