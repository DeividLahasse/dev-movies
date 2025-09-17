import { useEffect } from "react";

import { getMovieVideos } from "../../services/getData";

import { useState } from "react";

import { Container, Background } from "./styles";
import Button from "../../../src/components/Button";
import { ButtonFechar } from "../Button/styles";
import iconFechar from "../../../src/assets/fechar.png";

function Modal({ movieId, setShowModal }) {
  const [movie, setMovie] = useState();
  useEffect(() => {
    async function getMovies() {
   setMovie (await getMovieVideos (movieId))
    }

    getMovies();
  }, []);



  return (
    <Background onClick={() => setShowModal(false)}>
      {movie && (
        <Container>
          <iframe
            src={`https://www.youtube.com/embed/${movie[0].key}`}
            title="YouTube Vídeo Player"
            height="500px"
            width="100%"
          ></iframe>
          <ButtonFechar><img src={iconFechar} alt="logo-dev-movies" /></ButtonFechar>
        </Container>
      )}
    </Background>
  );
}

export default Modal;
