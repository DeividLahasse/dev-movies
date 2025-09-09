import { useState, useEffect } from "react";

import {useNavigate} from 'react-router-dom'
import Slider from "../../components/slider";

import Button from "../../../src/components/Button/index";


import { Background, Info, Poster, Container, ContainerButton } from "./styles";
import { getImages } from "../../../src/utils/getimages";
import Modal from "../../components/Modal";
import { getMovies, getTopMovies, getTopSeries } from "../../services/getData";

function Home() {
  const [showModal, setShowModal] = useState(false)
  const [movie, setMovie] = useState();
  const [topMovies, setTopMovies] = useState();
  const [TopSeries, setTopSeries] = useState();

  const [popularSeries, setPopularSeries] = useState();

  const [FilmesAvalicao, setFilmesAvalicao] = useState();

  const navigate = useNavigate()

  useEffect(() => {
    async function getAllData() {
      setMovie(await getMovies())
      setTopMovies(await getTopMovies())
      setTopSeries(await getTopSeries())
      setPopularSeries(await getTopSeries())
      setFilmesAvalicao(await getFilmesAvalicao())
    }

  
    getAllData();
    
  }, []);

  return (
    <>
      {movie && (
        <Background $img={getImages(movie.backdrop_path)}>
          {showModal && <Modal  movieId={movie.id} setShowModal={setShowModal}/>}

          <Container>
            <Info>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <ContainerButton>
                <Button onClick={() => navigate(`/detalhe/${movie.id}`)} red={true}>Assista Agora</Button>
                <Button onClick={() =>setShowModal(true)} white={false}>Assista o Trailer</Button>
              </ContainerButton>
            </Info>

            <Poster>
              <img src={getImages(movie.poster_path)} alt="capa do filme" />
            </Poster>
          </Container>
        </Background>
      )}
      {topMovies && <Slider info={topMovies} title={"Top Filmes"} />}
      {TopSeries && <Slider info={TopSeries} title={"Top Series"} />}

      {popularSeries && (
        <Slider info={popularSeries} title={"Top Series populares"} />
      )}

      {FilmesAvalicao && (
        <Slider info={FilmesAvalicao} title={"Filmes Com Melhor Avaliação"} />
      )}
    </>
  );
}

export default Home;
