import ButtonComponent from "../components/ButtonComponent";
import App from "../layouts/App";

export default function Home() {
  return (
    <div className="grid grid-cols-3 gap-x-3">
      <div className="bg-rose-500 w-full aspect-video flex items-center justify-center text-white">Tailwind CSS</div>
      <div className="bg-rose-500 w-full aspect-video flex items-center justify-center text-white">Tailwind CSS</div>
      <div className="bg-rose-500 w-full aspect-video flex items-center justify-center text-white">Tailwind CSS</div>

    </div>
  );
}

Home.getLayout = page => <App children={page}></App>
