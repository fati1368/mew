import Card from "../../Components/Layout/Card";
import CardCollection from "../../Components/Layout/CardCollection";
import CardPerson from "../../Components/Layout/CardPerson";
import { Button, Radio, Pagination, List, Input } from "antd";
import Style from "./style";

export default function ResultSearch({movie, collection, person, company}) {
  return (
    <Style>
      <div className="container">
        <div className="result pt-5 pb-5">
          <Card dataAPI={movie} mediaType="" />
          <CardCollection dataAPI={collection} />
          <CardPerson dataAPI={person} />
          <List
            size="large"
            bordered
            locale
            dataSource={company}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />

          {/* <Pagination
                  onChange={onPageChange}
                  Current={data.page}
                  total={data.total_pages}
                  style={{ colorText: "#FFF" }}
                /> */}
        </div>
      </div>
    </Style>
  );
}
