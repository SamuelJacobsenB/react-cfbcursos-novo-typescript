export default function Home() {

  const nome: string = 'Samuel';
  const curso: string = 'React Next';

  function retNome(): string {
    return nome;
  };

  return (
    <main>
      <div>{curso}</div>
      <div>{retNome()}</div>
      <div>Typescript</div>
      <div>React</div>
    </main>
  );
};
