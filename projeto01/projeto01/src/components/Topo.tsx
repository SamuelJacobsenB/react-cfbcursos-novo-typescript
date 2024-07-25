import Link from "next/link";

const Topo = () => {
    return (
        <div className="flex justify-between items-center bg-slate-600 h-[100px]">
          <div className="title">Logo</div>
          <div className="flex flex-col ">
              <nav className="flex flex-col to-white">
                  <Link href={'/'}>Home</Link>
                  <Link href={'/produtos/Produtos'}>Produtos</Link>
                  <Link href={'test/teste'}>Teste</Link>
              </nav>
          </div>
        </div>
    ); 
};


export default Topo;