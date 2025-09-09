import { useEffect } from "react";

import { getMovie } from "../../services/getData";

import { useState } from "react";

import { Container, Background } from "./styles";
import Button from "../../../src/components/Button";
import { ButtonFechar } from "../Button/styles";
import iconFechar from "../../../src/assets/fechar.png";

function Modal({ movieId, setShowModal }) {
  const [movie, setMovie] = useState();
  useEffect(() => {
    async function getMovies() {
   setMovie (await getMovie (movieId))
    }

    getMovies();
  }, []);
  return (
    <Background onClick={() => setShowModal(false)}>
      {movie && (
        <Container>
          <iframe
            src={`https://www.youtube.com/embed/${movie.key}`}
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
