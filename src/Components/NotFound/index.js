import Cat from "../../Animation&Icon/Cat";
import PrimaryLayout from "../../Components/Layout/PrimaryLayout";
import Style from "./style";
import { FloatButton } from "antd";
import ScrollTop from "../../Helpers/ScrollTop";
import { useEffect } from "react";
import NotFoundInformation from "../../Animation&Icon/NotFoundAnimation copy";

export default function NotFoundSingleMovie() {
  useEffect(() => {
    ScrollTop();
  }, []);

  return (
    <PrimaryLayout>
      <Style>
        <div className="flex align-center relative center pt-5 mt-5">
          <NotFoundInformation />
          <div className="cat absolute">
            <Cat />
          </div>
          <div>
            <h2>Sorry My Friend</h2>
            <h2>The information is not complete</h2>
          </div>
        </div>
      </Style>
      <FloatButton.BackTop />
    </PrimaryLayout>
  );
}
