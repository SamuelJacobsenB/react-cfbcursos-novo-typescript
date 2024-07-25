const Card = (props: any) => {
  return (
    <div className="mr-10 border">
        <div>{props.produto}</div>
        <div>{props.valor}</div>
    </div>
  );
};

export default Card;