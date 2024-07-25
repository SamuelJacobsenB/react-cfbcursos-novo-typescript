import Topo from "@/components/Topo";
import Card from "@/components/Card";

export default function Home() {
  return (
    <main>
      <Topo></Topo>
      <div>Typescript</div>
      <div>React</div>
      <div className="flex justify-center">
        <Card produto={'Mouse'} valor={59.90} desconto={5.00}/>
        <Card produto={'Teclado'} valor={159.90} desconto={10.00}/>
        <Card produto={'Monitor'} valor={1250.00} desconto={50.00}/>
      </div>
    </main>
  );
};