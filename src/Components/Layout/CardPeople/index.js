import Style from "./style";
import convertToStars from "../../../Helpers/convertToStars";
import ConvertGenreIdsToNames from "../../../Helpers/convertGenreIdsToNames";
import { Rate } from "antd";
import SRCimg from "../../../Helpers/SRCimg";
import { Link } from "react-router-dom";
import { Avatar, List } from 'antd';
import Card from "../Card";


export default function CardPeople({PeopleAPI}) {
  return (
    <Style>
      <div className="flex space-between">
      <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item, index) => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
          title={<a href="https://ant.design">{item.title}</a>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    )}
  />
      </div>
      <Card dataAPI={PeopleAPI} />
    </Style>
  );

}
