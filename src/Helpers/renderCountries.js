export default function renderCountries(data) {
    return data.map(({ id, iso_3166_1 }) => {
      return (
        <li key={id}>
          <p>{iso_3166_1}</p>
        </li>
      );
    });
  }