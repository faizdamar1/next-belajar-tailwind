import HeroComponent from "../components/HeroComponent";
import App from "../layouts/App";

export default function Home() {
  return (
    <>
      <HeroComponent></HeroComponent>

    </>
  );
}

Home.getLayout = (page) => <App children={page}></App>;
