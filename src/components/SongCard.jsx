import { Card, Button } from "react-bootstrap";
import { Heart, HeartFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { toggleLikeSong, setCurrentSong } from "../redux/actions";

const SongCard = ({ song }) => {
  const dispatch = useDispatch();
  const likedSongs = useSelector((state) => state.favoriteSongs.list || []);

  const isLiked = likedSongs.some((s) => s.id === song.id);

  const handleLike = () => {
    dispatch(toggleLikeSong(song));
  };

  const handlePlay = () => {
    dispatch(setCurrentSong(song));
  };

  return (
    <Card className="mb-3 text-center h-100 m-1" style={{ maxWidth: "180px", margin: "0 auto" }}>
      <Card.Img
        variant="top"
        src={song.album.cover_medium}
        alt={song.title}
        onClick={handlePlay}
        style={{ cursor: "pointer", width: "100%", height: "auto", objectFit: "cover" }}
      />
      <Card.Body className="p-2 d-flex flex-column align-items-center text-center">
        <div className="d-flex justify-content-center align-items-center gap-2">
          <Card.Title as="h3" className="mb-1">
            {song.title}
          </Card.Title>
          <Button variant="link" onClick={handleLike} className="p-0">
            {isLiked ? <HeartFill color="red" /> : <Heart />}
          </Button>
        </div>
        <Card.Text as="h4" className="text-muted mt-auto">
          {song.artist.name}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SongCard;
