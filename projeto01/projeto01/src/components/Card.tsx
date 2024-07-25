interface CardProps {
  produto: string;
  valor: number;
  desconto: number;
  funcao: any;
};

const Card = (props: CardProps) => {
  return (
    <div className={`mr-10 border ${props.desconto > 0 ? 'border-blue-600' : 'border-red-600'}  p-4`}>
        <div>Produto: {props.produto}</div>

        {props.desconto > 0 ?
          (
            <>
              <div>Valor à vista com desconto de R${props.desconto.toFixed(2)} sem a taxa  : R${props.funcao(props.valor, props.desconto).toFixed(2)} com a taxa</div>

              <div>Valor à prazo: {props.valor.toFixed(2)}</div>
            </>
          )
            :
          (
            <>
              <div>Este produto não tem desconto.</div>
              <div>Valor à vista e à prazo: R${props.valor.toFixed(2)}</div>
            </>
          )
        }
    </div>
  );
};

export default Card;