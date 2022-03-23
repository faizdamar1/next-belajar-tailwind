import ButtonComponent from "../components/ButtonComponent";
import App from "../layouts/App";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-1/2">
        <h1 className="font-display font-semibold text-2xl mb-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, sint.
        </h1>
        <article className="text-lg leading-relaxed">
          <p className="mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
            similique voluptates dolorem vero quis possimus deleniti ex sequi
            magnam, quo amet officia? Unde impedit architecto repellat autem
            dolorum. Iste, tenetur.
          </p>
          <p>
            Quae tenetur sunt officiis sapiente possimus beatae magnam quasi
            tempore non nihil dicta omnis assumenda ratione consequatur
            necessitatibus facere quam, eligendi hic. Ab, animi esse doloribus
            hic doloremque consectetur consequuntur!
          </p> 
        </article>
      </div>
    </div>
  );
}

Home.getLayout = (page) => <App children={page}></App>;
