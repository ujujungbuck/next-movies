"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// import { useSearchParams } from "react-router-dom";
// import { useLocation } from "react-router-dom";

export default function Home() {
  const router = useRouter();
  //const params = useLocation();
  //console.log(params);
  const onClick = (id) => {
    params.push(
      {
        //pathname: `/movies/${id}`,
        query: {
          title: "tomato",
        },
      },
      `/movies/${id}`
    );
  };
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    (async () => {
      const { results } = await (await fetch(`/api/movies`)).json();

      setMovies(results);
    })();
  }, []);

  return (
    <>
      <h3>Pick your movie</h3>
      <div className="container">
        {!movies.length && <h4>Loading...</h4>}
        {movies?.map((movie) => (
          <div
            onClick={() => onClick(movie.id)}
            className="movie"
            key={movie.id}
          >
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
            <h4>{movie.original_title}</h4>
          </div>
        ))}
        <style jsx>{`
          .container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            padding: 20px;
            gap: 20px;
          }
          .movie img {
            max-width: 100%;
            border-radius: 12px;
            transition: transform 0.2s ease-in-out;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 10px;
            cursor: pointer;
          }
          .movie:hover img {
            transform: scale(1.05) translateY(-10px);
          }
          .movie h4 {
            font-size: 18px;
            text-align: center;
            cursor: pointer;
            &:hover {
              color: #c34261;
            }
          }
        `}</style>
      </div>
    </>
  );
}
