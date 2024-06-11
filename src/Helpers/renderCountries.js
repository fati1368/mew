export default function renderCountries(data) {
    return data.map(({ iso_3166_1, name }) => {
      return (
          <span key={iso_3166_1} className="country">   {name}  .  </span>
      );
    });
  }