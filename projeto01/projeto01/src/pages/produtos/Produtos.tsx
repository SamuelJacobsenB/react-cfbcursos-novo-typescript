import Topo from "@/components/Topo";
import Card from "@/components/Card";
import { useRouter } from "next/router";

const Produtos = () => {

    const calcDesc = (val: number, desc: number): number => {
        return val - desc;
      };
    
      const calcDesc2 = (val: number, desc: number): number => {
        return val - (desc / 2);
      };
    
    const produtos: object[] = [
        {
          produto: 'Mouse',
          valor: 59.90,
          desconto: 5,
          disponivel: true
        },
        {
          produto: 'Teclado',
          valor: 159.90,
          desconto: 20,
          disponivel: true
        },
        {
          produto: 'Monitor',
          valor: 1240.00,
          desconto: 115,
          disponivel: true
        },
        {
          produto: 'CPU',
          valor: 829.90,
          desconto: 59.90,
          disponivel: true
        },
        {
          produto: 'Caixa de Som',
          valor: 280.90,
          desconto: 24.90,
          disponivel: true
        },
        {
          produto: 'Celular',
          valor: 1890.90,
          desconto: 105.90,
          disponivel: true
        }
    ];  

    const router = useRouter();
    const {nome, curso} = router.query;
    console.log(nome, curso)

  return (
    <>
      <Topo></Topo>
      <div className="list">
        {
            produtos.map((el: any, i: number)=>{
                return (
                    <Card produto={el.produto} valor={el.valor} desconto={el.desconto} funcao={calcDesc} key={i}/>
                );
            })

        }
    </div>
    </>
  );
};

export default Produtos;