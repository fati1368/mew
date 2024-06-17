import Cat from "../../Animation&Icon/Cat";
import NotFoundAnimation from "../../Animation&Icon/NotFoundAnimation";
import PrimaryLayout from "../../Components/Layout/PrimaryLayout";
import Style from "./style";

export default function NotFound() {
  return (
    <PrimaryLayout>
      <Style>
        <div className="flex align-center relative center pt-5 mt-5">
        <NotFoundAnimation />
          <div className="cat absolute">
            <Cat />
          </div>
          <h2 >Sorry My Friend Not Found Page </h2>
        </div>
      </Style>
    </PrimaryLayout>
  );
}
