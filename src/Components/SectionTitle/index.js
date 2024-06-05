import { useState } from "react";
import Style from "./style";
import { Radio } from "antd";

export default function SectionTitle({
  title,
  subTitleOne,
  subTitleTwo,
  callBack,
  filterBottom,
  colorTitle,
}) {
  const [placement, SetPlacement] = useState("day");
  const placementChange = (e) => {
    const selectedPlacement = e.target.value;
    SetPlacement(selectedPlacement);
    callBack(selectedPlacement);
  };
  function render() {
    return filterBottom.map(({ id, value, Name }) => {
      return (
        <span key={id}>
          <Radio.Button value={value}>{Name}</Radio.Button>
        </span>
      );
    });
  }
  return (
    <Style>
      <div className=" bg section-space relative">
        <div className="container relative">
          <div className="sectionTitle pb-5">
            <h2 style={{ color: `${colorTitle}` }}>{title}</h2>
            <h4>{subTitleOne}</h4>
            <h4>{subTitleTwo}</h4>
          </div>
          <Radio.Group
            className="mb-3"
            value={placement}
            onChange={placementChange}
          >
            {render()}
          </Radio.Group>
        </div>
      </div>
    </Style>
  );
}
