import React, { useEffect, useState } from "react";

const Hooks = () => {
    const[update_state,set_update_state] = useState([{text:'text'}]);
    const[count_mouseover,set_count_mouseover] = useState(0);
    useEffect(()=>{
        document.title = count_mouseover;
        });

    return(<>
    <section className="mt-12 p-5">
        <span>useState</span>
        <h1>Text get updated through useState here: <span>{update_state[0].text}</span></h1>
    </section>
    <section className="flex space-y-6 flex-col">
        <form>
            <div className="group/item flex flex-col space-between items-start max-w-xs rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-4 hover:bg-sky-500 hover:ring-sky-500">
                <span className="group/title">useState</span>
                <input className="group/input right-1 group-hover/input:ring-1 m-0 rounded group-hover/item:bg-green-50 focus-visible:bg-green-50" type="text" placeholder="Update useState" onChange={(e)=>{set_update_state([{text:e.target.value}])}}/>
            </div>
        </form>
        <form>
            <div className="group-effect flex flex-col space-between items-start max-w-xs rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-4 hover:bg-sky-500 hover:ring-sky-500"
             onMouseEnter={()=>{
                set_count_mouseover(count_mouseover+1);
             }}
            >
                <span className="group/title">useEffect count hovered : {count_mouseover}</span>
            </div>
        </form>
    </section>
    </>);

}

export default Hooks;