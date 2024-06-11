import { useEffect, useState } from "react";
import API from "../../Helpers/API";
import Style from "./style";
import SRCimg from "../../Helpers/SRCimg";
import KeyAPI from "../../Helpers/KeyAPI";
import { Avatar, List, message } from "antd";
import VirtualList from "rc-virtual-list";

export default function Credit({dataActing}) {
const filterDataActing= dataActing.slice (0,11)
  return (
    <Style>
      <nav className="credit pt-5 mt-5">
        <h3 className="pb-5 pt-5">Top Billed Cast</h3>
        <List
          itemLayout="horizontal"
          dataSource={filterDataActing}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar src={`${SRCimg}${item.profile_path}`} size={80} />
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
      </nav>
    </Style>
  );
}
