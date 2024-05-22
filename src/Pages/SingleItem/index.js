import axios from "axios";
import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import PrimaryLayout from "../../Components/Layout/PrimaryLayout";

export default function SingleItem() {
  const { id } = useParams();
  const [data, setData] = useState({ });
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getAPI();
    setLoading(true);
  }, [id]);
  function getAPI() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=58c395f7f55c4dbbaf7934499b39a8a6`
      )
      .then(function (res) {
        console.log(res);
        setData(res.data);
        setLoading(false);
      })
      .catch(function (err) {
        console.log(err);
        setLoading(false);
      });
  }
  function convertMinutesToHoursAndMinutes() {
    const hours = Math.floor(data.runtime / 60);
    const minutes = data.runtime % 60;
    return `${hours}h ${minutes}m`;
  }
  function formatNumberToAccounting() {
    if (typeof data.revenue !== 'number') {
      return 'Invalid input';
    }
    const numString = data.revenue.toString();  
    const [integerPart, decimalPart] = numString.split('.');
    const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    const formattedNumber = decimalPart ? `${formattedInteger}.${decimalPart}` : formattedInteger;
    return formattedNumber;
  }
  return (
    <PrimaryLayout>
      {loading === true ? (
        <h3>Please Waite</h3>
      ) : (
        <Fragment>
          <h2>{id}</h2>
          <h3>Single Item</h3>
          <h2>cost:</h2>
          <h3>{`Status: ${data.status}`}</h3>
          <h3>{`Original Language:${data.original_language}`}</h3>
          <h3>{`Revenue:$${formatNumberToAccounting()}`}</h3>
          <h3>{data.title}</h3>
          <h3>{convertMinutesToHoursAndMinutes()}</h3>
          <h1>{data.overview}</h1>
          <br />
          <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} />
          <br />
          <img src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`} />
          <br />
        </Fragment>
      )}
    </PrimaryLayout>
  );
}
