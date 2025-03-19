import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

function Detail() {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState([]);

  const getDetails = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetails(() => json.data.movie);
    setLoading(false);
    console.log(json.data.movie);
  };
  useEffect(() => {
    getDetails();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div>
          <img src={details.medium_cover_image} alt={details.title} />
          <h2>{details.title}</h2>
          <p>개봉년도 : {details.year}</p>
          <p> ⭐ {details.rating}</p>
        </div>
      )}
    </div>
  );
}
export default Detail;
