import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Slider from "../../components/slider"
import { getImages } from "../../../src/utils/getimages";
import { Container, Background, Cover, Info } from "./styles";
import SpanGenres from "../../components/SpanGenres";
import Credits from "../../components/Credits";
import { ContainerMovies } from "./styles";
import {
  getMovieById,
  getMovieVideos,
  getMovieCredits,
  getMovieSimilar,
} from "../../services/getData";
function Detail() {
  const { id } = useParams();

  const [movie, setMovie] = useState();
  const [movievideos, setMovieVideos] = useState();
  const [movieCredits, setMovieCredits] = useState();
  const [movieSimilar, setMovieSimilar] = useState();

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getMovieById(id),
        getMovieVideos(id),
        getMovieCredits(id),
        getMovieSimilar(id),
      ])
        .then(([movie, videos, credits, similar]) => {
          

          setMovie(movie);
          setMovieVideos(videos);
          setMovieCredits(credits);
          setMovieSimilar(similar);
        })
        
      
    }

    getAllData();
  }, []);
  return (
    <>
      {movie && (
        <>
          <Background image={getImages(movie.backdrop_path)} />
          <Container>
            <Cover>
              <img src={getImages(movie.poster_path)} />
            </Cover>

            <Info>
              <h2>{movie.title}</h2>
              <SpanGenres genres={movie.genres} />
              <p>{movie.overview}</p>
              <div>
                <Credits credits={movieCredits} />
              </div>
            </Info>
             </Container>
            <ContainerMovies>
              {setMovieVideos &&
                movievideos.map((video) => (
                  <div key={video.id}>
                    <h4>{movie.name}</h4>{" "}
                    <iframe
                      src={`https://www.youtube.com/embed/${video.key}`}
                      title="YouTube Vídeo Player"
                      height="500px"
                      width="100%"
                    ></iframe>
                  </div>
                ))}
            </ContainerMovies>
            {movieSimilar && <Slider info={movieSimilar} title={"Filmes Similares"} />}
        </>
      )}
    </>
  );
}

export default Detail;
