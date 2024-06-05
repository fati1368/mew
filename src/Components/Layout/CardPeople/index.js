import Style from "./style";
import SRCimg from "../../../Helpers/SRCimg";
import { Link } from "react-router-dom";
import { Avatar, List } from 'antd';
import Card from "../Card";
import {  useState } from "react";

export default function CardPeople({PeopleAPI}) {
  const [CurrentIndex ,setCurrentIndex]=useState(0)
  const dataCard =PeopleAPI[0].known_for
  console.log (dataCard)

  return (
    <Style>
      <div className="flex space-between">
      <List
    itemLayout="horizontal"
    dataSource={PeopleAPI}
    renderItem={(item, index) => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src={`${SRCimg} ${item.profile_path}`} />}
          title={<div>{item.name}</div>}
          onClick={(e)=>setCurrentIndex(item.index)}
        />
      </List.Item>
    )}
  />
      </div>
     <Card dataAPI={dataCard} /> 
    </Style>
  );

}
