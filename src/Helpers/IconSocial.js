import Icon, {
  FacebookFilled,
  InstagramFilled,
  TwitterSquareFilled,
} from "@ant-design/icons";
import { LinkOutlined } from "@ant-design/icons";

export default function IconSocial({
  homePage,
  facebook,
  imdb,
  instagram,
  twitter,
}) {
  return (
    <div className="social">
      <a
        href={`https://www.imdb.com/title/${imdb}/?ref_=hm_top_tt_i_3`}
        target="_blank"
        style={{ fontSize: "1.5rem", padding: "0.2em" }}
      >
        {imdb ? "IMDB" : ""}
      </a>

      <a href={homePage} target="_blank">
      {homePage ?  <LinkOutlined style={{ fontSize: "2rem", padding: "0.2em" }} /> : ""}
       
      </a>
      <a href={`https://www.facebook.com/${facebook}`} target="_blank">
      {facebook ? <FacebookFilled style={{ fontSize: "2rem", padding: "0.2em" }} /> : ""}

        
      </a>
      <a href={`https://www.instagram.com/${instagram}`} target="_blank">
      {instagram ?  <InstagramFilled style={{ fontSize: "2rem", padding: "0.2em" }} />: ""}
       
      </a>
      <a href={`https://twitter.com/${twitter}`} target="_blank">
      {twitter ? <TwitterSquareFilled style={{ fontSize: "2rem", padding: "0.2em" }} /> : ""}
        
      </a>
    </div>
  );
}
