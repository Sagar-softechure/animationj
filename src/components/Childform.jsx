import React, { useState } from "react";
const Childform = ({setupdate_text}) => {

    function handleformSubmit(e){
        e.preventDefault();
        setupdate_text(e.target.update_text.value);
    }

    return(
        <>
            <section>
                <form onSubmit={handleformSubmit}>
                    <input type="text" name="update_text" placeholder="update text" />
                    <input type="submit" value={'submit'}/>
                </form>
            </section>
        </>
    )

}
export default Childform;