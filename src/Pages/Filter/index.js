import { Button, Row, Col } from "antd";
import { Fragment, useEffect, useState, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MovieListByGenre from "../../Components/MovieListByGenre";

export default function Filter() {
  const [genre, setGenre] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentGenreId ,setCurrentGenreId]=useState(1)
  const [currentGenreTitle , setCurrentGenreTitle] =useState("crime")
  

  useEffect(function () {
    getAPI();
  }, []);

  function getAPI() {
    axios
      .get(`https://api.themoviedb.org/3/genre/movie/list?api_key=58c395f7f55c4dbbaf7934499b39a8a6`)
      .then(function (res) {
        setGenre(res.data.genres);
        setLoading(false);
      })
      .catch(function (err) {
        setLoading(false);
      });
  }
  function changeGenreId(id , name){
    setCurrentGenreId(id)
    setCurrentGenreTitle(name)
  }

  function renderFarm() {
    return genre.map(({ id, name }) => {
      return (
        <Col key={id} span={2}>
          <Button
            type="primary"
            size="large"
        
           onClick={()=>changeGenreId(id , name)}
          >
            {name}
          </Button>
        </Col>
      );
    });
  }
  return (
    <Fragment>
      <Row gutter={[10, 10]}>{renderFarm()}</Row>
       <MovieListByGenre
        genreId={currentGenreId}
        headerDetail={{ title:`${currentGenreTitle}`, link: `/genre/${currentGenreId}` }}
      /> 
    </Fragment>
  );
}
