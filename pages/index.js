import HeroComponent from "../components/HeroComponent";
import App from "../layouts/App";

export default function Home() {
  return (
    <>
      <HeroComponent>
        <HeroComponent.Body>
          <header className="text-white py-4 sm:py-8 md:py-16">
            <HeroComponent.Title>Your Brand</HeroComponent.Title>
            <p className="md:text-xl leading-relaxed font-light mt-4 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              <a
                href="#"
                className="underline decoration-sky-500 text-sky-400 font-medium"
              >
                Dolorem quam
              </a>
              , recusandae quis dolorum veritatis nulla, nemo consequuntur
              temporibus quisquam expedita libero est facere ipsum laboriosam
              eveniet itaque. Rem, dicta temporibus?
            </p>
            <a
              href="#"
              className="bg-white hover:bg-gray-50 hover:text-blue-500 transition duration-300 text-gray-900 text-sm md:text-tiny px-4 py-2 md:px-6 md:py-2.5 rounded-xl font-medium inline-flex shadow-inner shadow-gray-300 md:shadow-gray-400"
            >
              Browse
            </a>
          </header>
        </HeroComponent.Body>
      </HeroComponent>
      <div className="container">Index</div>
    </>
  );
}

Home.getLayout = (page) => <App title="Brand" children={page}></App>;
