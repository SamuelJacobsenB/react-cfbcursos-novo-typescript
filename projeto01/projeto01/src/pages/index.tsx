export default function Home() {

  const nome: string = 'Samuel';
  const curso: string = 'React Next';

  function retNome(): string {
    return nome;
  };

  const cur = (): string =>{
    return curso;
  };

  function Topo(){
    return (
      <div className="flex justify-between items-center bg-slate-600 h-[80px]">
        <div>Logo</div>
        <div className="flex flex-col ">
          <div className="padDiv">{cur()}</div>
          <div className="padDiv">{nome}</div>
          <div className="padDiv">Menu</div>
        </div>
      </div>
    ); 
  };

  return (
    <main>
      <Topo></Topo>
      <div>{cur()}</div>
      <div>{retNome()}</div>
      <div>Typescript</div>
      <div>React</div>
    </main>
  );
};
 