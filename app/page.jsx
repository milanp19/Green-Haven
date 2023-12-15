import HeaderComponent from "./components/HeaderComponent";
import MainComponent from "./components/MainComponent";

export default function Home() {
  return (
    <>
      <HeaderComponent />
      <MainComponent />
      <footer className="px-24 py-8 bg-slate-300 mt-24 text-center">
        Copyright &copy; 2023 GreenHaven. All rights reserved
      </footer>
    </>
  );
}
