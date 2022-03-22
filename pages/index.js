import ButtonComponent from "../components/ButtonComponent";

export default function Home() {
  return (
    <div className="space-x-2">
      <ButtonComponent
        onClick={() => console.log("print")}
        className="bg-blue-600 hover:bg-blue-700 ring-blue-200"
      >
        Primary using component
      </ButtonComponent>
      <ButtonComponent
        onClick={() => console.log("print")}
        className="bg-pink-400 hover:bg-pink-600 ring-pink-200"
      >
        Secondary using component
      </ButtonComponent>

      <button className="btn btn-primary">Primary using apply</button>
      <button className="btn btn-secondary">Secondary using apply</button>
    </div>
  );
}
