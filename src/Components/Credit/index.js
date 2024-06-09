import { useEffect, useState } from "react";
import API from "../../Helpers/API";
import Style from "./style";
import SRCimg from "../../Helpers/SRCimg";
import KeyAPI from "../../Helpers/KeyAPI";
import { Avatar, List, message } from "antd";
import VirtualList from "rc-virtual-list";

export default function Credit(dataActing) {
 const convertObjectToArray = Object.values(dataActing)
 const result=convertObjectToArray[0]
  return (
    <Style>
      <h3>Top Billed Cast</h3>
      <List
        itemLayout="horizontal"
        dataSource={result}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar src={`${SRCimg}${item.profile_path}`} size={100} />
              }
              title={
                <p className="title-name">
                  Name: <span>{item.name}</span>
                </p>
              }
              description={
                <p>
                  Character: <span>{item.character}</span>
                </p>
              }
            />
          </List.Item>
        )}
      />
    </Style>
  );
}
