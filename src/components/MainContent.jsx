import MusicGallery from "./MusicGallery";
import NavBAR from "./NavBAR";
import { useSelector } from "react-redux";

const MainContent = () => {
  const sections = [
    { title: "Rock Classics", artist: "queen" },
    { title: "Pop Culture", artist: "katyperry" },
    { title: "HipHop", artist: "eminem" },
  ];

  const searchResults = useSelector((state) => state.searchResults.list || []);
  const searchQuery = useSelector((state) => state.searchResults.query || "");

  return (
    <div className="mt-4 px-3 ps-md-3 ps-lg-4">
      <NavBAR />

      {/* Sezione per la ricerca*/}
      {searchResults.length > 0 && <MusicGallery section={`Results for: "${searchQuery}"`} songs={searchResults} />}

      {/* Sezione statica */}
      {sections.map((section, index) => (
        <MusicGallery key={index} section={section.title} artist={section.artist} />
      ))}
    </div>
  );
};

export default MainContent;
