// import React, { useState, useEffect } from "react";
// import Card from "../../Components/Layout/Card";
// import CardPerson from "../../Components/Layout/CardPerson";
// import Style from "./style";

// export default function ResultSearch({ data = [] }) {
//   const [dataNull, setDataNull] = useState([]);
//   const [dataMovies, setDataMovies] = useState([]);
//   const [dataPerson, setDataPerson] = useState([]);

//   useEffect(() => {
//     filterData();
//   }, []);

//   const filterData = (data) => {
//     const filteredData = data.filter(
//       (data) => data.poster_path !== null || data.profile_path !== null
//     );
//     setDataNull(filteredData);

//     const moviesAndTV = filteredData.filter(
//       (filteredData) =>
//         filteredData.media_type === "movie" || filteredData.media_type === "tv"
//     );
//     setDataMovies(moviesAndTV);

//     const persons = filteredData.filter(
//       (filteredData) => filteredData.media_type === "person"
//     );
//     setDataPerson(persons);
// console.log(filteredData, "filter");
//   };

//   return (
//     <Style>
//       <div className="container">
//         <div className="result pt-5 pb-5">
//           {/* Render the Card component with movies and TV data */}
//           <Card dataAPI={dataMovies} mediaType="" />

//           {/* Uncomment the CardCollection component ieded */}

//           {/* Render the CardPerson component with person data */}
//           <CardPerson dataAPI={dataPerson} />

//           {/* Uncomment the List and Pagination components if needed */}
//            <List
//             size="large"
//             bordered
//             locale
//             dataSource={company}
//             renderItem={(item) => <List.Item>{item}</List.Item>}
//           />
//           {/* <Pagination
//             onChange={onPageChange}
//             Current={data.page}
//             total={data.total_pages}
//             style={{ colorText: '#FFF' }}
//           /> */}
//         </div>
//       </div>
//     </Style>
//   );
// }
