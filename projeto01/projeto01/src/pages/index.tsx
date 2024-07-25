import Topo from "@/components/Topo";
import Card from "@/components/Card";

export default function Home() {
  return (
    <main>
      <Topo></Topo>
      <div>Typescript</div>
      <div>React</div>
      <div className="flex justify-center">
        <Card produto={'mouse'} valor={'59,90'}/>
        <Card produto={'teclado'} valor={'159,90'}/>
        <Card produto={'monitor'} valor={'1250.00'}/>
      </div>
    </main>
  );
};