import ButtonComponent from "../components/ButtonComponent";
import App from "../layouts/App";

export default function Home() {
  return (
    <div className="space-x-2">
      Tailwind Css
    </div>
  );
}

Home.getLayout = page => <App children={page}></App>
