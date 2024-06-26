import React, { useState } from "react";
import Childform from "../components/Childform";
const Childtoparent = () => {
    const[update_text,setupdate_text] = useState('Null');

    function updatenewtext(data){
        setupdate_text(data);
    }

    return(
        <>
        <section>
            <h5>update text in parent component here</h5>
            <h2>{update_text}</h2>
        </section>

        <Childform setupdate_text={setupdate_text}/>
        </>
    );

}
export default Childtoparent;