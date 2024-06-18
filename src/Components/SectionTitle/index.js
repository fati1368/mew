import { useState } from "react";
import Style from "./style";
import { Radio } from "antd";
import { Link } from "react-router-dom";
import { CaretRightFilled } from "@ant-design/icons";

export default function SectionTitle({
  title,
  subTitleOne,
  subTitleTwo,
  callBack,
  filterBottom,
  colorTitle,
  link,
}) {
  const [placement, SetPlacement] = useState("");
  const placementChange = (e) => {
    const selectedPlacement = e.target.value;
    SetPlacement(selectedPlacement);
    callBack(selectedPlacement);
  };
  function render() {
    return filterBottom.map(({ id, value, Name }) => {
      return (
        <span key={id}>
          <Radio.Button Checked value={value}>{Name}</Radio.Button>
        </span>
      );
    });
  }
  return (
    <div className="title-section">
      <Style>
        <div className="container">
          <div className=" bg section-space relative">
            <div className=" relative">
              <div className="sectionTitle pb-3">
                <h2 style={{ color: `${colorTitle}` }}>{title}</h2>
                <h4>{subTitleOne}</h4>
                <h4>{subTitleTwo}</h4>
              </div>
              <div className="flex mb-1 space-between align-center">
                <Radio.Group
                  value={placement}
                  onChange={placementChange}
                  size="large"
                >
                  {render()}
                </Radio.Group>
                <Link className="flex align-center" to={link}>
                  <h3>more</h3>{" "}
                  <CaretRightFilled style={{ fontSize: "2rem" }} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Style>
    </div>
  );
}
