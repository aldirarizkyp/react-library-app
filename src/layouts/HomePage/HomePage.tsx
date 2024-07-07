import { Carousel } from "./components/Caraousel";
import { ExportTopBooks } from "./components/ExploreTopBooks";
import { Heros } from "./components/Heros";

export const HomePage = () => {
  return (
    <>
      <ExportTopBooks />
      <Carousel />
      <Heros />
    </>
  );
};
