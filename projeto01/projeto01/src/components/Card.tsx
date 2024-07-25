interface CardProps {
  produto: string;
  valor: number;
  desconto: number;
  funcao: any;
};

const Card = (props: CardProps) => {
  return (
    <div className="mr-10 border p-4">
        <div>Produto: {props.produto}</div>
        <div>Valor à vista com desconto de R${props.desconto.toFixed(2)} sem a taxa  : {props.funcao(props.valor, props.desconto).toFixed(2)} com a taxa</div>
        <div>Valor à prazo: {props.valor.toFixed(2)}</div>
    </div>
  );
};

export default Card;