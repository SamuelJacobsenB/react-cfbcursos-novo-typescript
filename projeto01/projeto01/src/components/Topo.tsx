const Topo = () => {
    return (
        <div className="flex justify-between items-center bg-slate-600 h-[100px]">
          <div className="title">Logo</div>
          <div className="flex flex-col ">
            <div className="padDiv">React Next</div>
            <div className="padDiv">Samuel</div>
            <div style={teste}>Menu</div>
          </div>
        </div>
    ); 
};

const teste: object = {
    backgroundColor: 'white',
    color: 'black'
};  

export default Topo;