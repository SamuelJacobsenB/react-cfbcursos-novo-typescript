interface CardProps {
  produto: string;
  valor: number;
  desconto: number;
};

const Card = (props: CardProps) => {

  const resultado = props.valor - props.desconto;

  return (
    <div className="mr-10 border p-4">
        <div>Produto: {props.produto}</div>
        <div>Valor à vista com desconto de R${props.desconto.toFixed(2)} : {resultado.toFixed(2)}</div>
        <div>Valor à prazo: {props.valor.toFixed(2)}</div>
    </div>
  );
};

export default Card;