import { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import SongCard from "./SongCard";

const MusicGallery = ({ section, artist, songs: propsSongs }) => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    if (!propsSongs && artist) {
      const fetchSongs = async () => {
        try {
          const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artist}`);
          if (response.ok) {
            const { data } = await response.json();
            setSongs(data.slice(0, 4));
          } else {
            console.error("Errore nel fetch delle canzoni");
          }
        } catch (err) {
          console.error(err);
        }
      };

      fetchSongs();
    } else if (propsSongs) {
      setSongs(propsSongs);
    }
  }, [artist, propsSongs]);

  return (
    <Container fluid className="mb-3">
      <h2 className="mb-3 text-white">{section}</h2>
      <Row className="g-0">
        {songs.map((song) => (
          <Col key={song.id} xs={12} sm={6} lg={3} className="p-1">
            <SongCard song={song} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MusicGallery;
