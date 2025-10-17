import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import shuffleIcon from "../assets/playerbuttons/shuffle.png";
import prevIcon from "../assets/playerbuttons/prev.png";
import playIcon from "../assets/playerbuttons/play.png";
import nextIcon from "../assets/playerbuttons/next.png";
import repeatIcon from "../assets/playerbuttons/repeat.png";

const Player = () => {
  const currentSong = useSelector((state) => state.currentSong.song);
  if (!currentSong) return null;

  return (
    <Container fluid className="fixed-bottom bg-container d-flex align-items-center">
      {/* Spazio per la sidwebar che copre, aggiungo una classe al css, non so se potevo eliminare quelle personalizzate del codice di epic */}
      <div className="spacer"></div>

      {/* Info canzone */}
      {currentSong && (
        <div className="d-flex align-items-center text-white me-3">
          <img
            src={currentSong.album.cover_small || currentSong.album.cover_medium}
            alt={currentSong.title}
            style={{ width: 50, height: 50, objectFit: "cover", marginRight: "10px" }}
          />
          <div>
            <p className="mb-1">{currentSong.title}</p>
            <p className="mb-0 text-muted">{currentSong.artist.name}</p>
          </div>
        </div>
      )}

      {/* Controlli + barra */}
      <div className="flex-grow-1 d-flex flex-column align-items-center">
        <div className="d-flex justify-content-center align-items-center gap-2">
          <img src={shuffleIcon} alt="shuffle" style={{ width: 20, height: 20 }} />
          <img src={prevIcon} alt="prev" style={{ width: 20, height: 20 }} />
          <img src={playIcon} alt="play" style={{ width: 25, height: 25 }} />
          <img src={nextIcon} alt="next" style={{ width: 20, height: 20 }} />
          <img src={repeatIcon} alt="repeat" style={{ width: 20, height: 20 }} />
        </div>
        <div className="w-100 mt-2">
          <div className="progress">
            <div role="progressbar"></div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Player;
