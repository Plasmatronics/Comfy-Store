import { Header, Loading, Navbar } from "@/components";
import { Outlet, useNavigation } from "react-router-dom";

function HomeLayout() {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";

  return (
    <>
      <Header />
      <Navbar />
      <div className="py-20 align-element">
        {isPageLoading ? <Loading /> : <Outlet />}
      </div>
    </>
  );
}
export default HomeLayout;
