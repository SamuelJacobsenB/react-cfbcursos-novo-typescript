import Link from "next/link";

const Topo = () => {
    return (
        <div className="flex justify-between items-center bg-slate-400 h-[100px]">
          <div className="title">Logo</div>
          <div className="flex flex-col ">
              <nav className="flex flex-col to-white">

                <Link href={'/'}>
                    Home
                </Link>

                <Link href={
                    {
                        pathname: '/produtos/Produtos',
                        query:{nome: 'Samuel',curso: 'React Next'}
                    }
                }>
                    Produtos
                </Link>

                <Link href={'/teste/Teste'}>
                    Teste
                </Link>
              </nav>
          </div>
        </div>
    ); 
};


export default Topo;