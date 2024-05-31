import Header from "../components/Header";
import MainHeader from "../components/MainHeader";

export default function page() {
  return (
    <div>
      <MainHeader />
      <Header />
      <div className="w-full fixed flex items-center justify-center h-screen">
        <div className="flex items-center gap-3 text-3xl">
          <h1 className="text-3xl font-bold italic">Comming Soon </h1>🥰
        </div>
      </div>
    </div>
  );
}
