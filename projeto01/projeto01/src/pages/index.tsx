import Topo from "@/components/Topo";
import Card from "@/components/Card";

export default function Home() {

  const calcDesc = (val: number, desc: number): number => {
    return val - desc;
  };

  const calcDesc2 = (val: number, desc: number): number => {
    return val - (desc / 2);
  };

  return (
    <main>
      <Topo/>
      <div>Typescript</div>
      <div>React</div>
      <div className="flex justify-center">
        <Card produto={'Mouse'} valor={59.90} desconto={5.00} funcao={calcDesc}/>
        <Card produto={'Teclado'} valor={159.90} desconto={10.00} funcao={calcDesc2} />
        <Card produto={'Monitor'} valor={1250.00} desconto={50.00} funcao={calcDesc2}/>
      </div>
    </main>
  );
};