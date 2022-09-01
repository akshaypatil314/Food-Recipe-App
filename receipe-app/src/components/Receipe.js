import React from "react";

function Receipe({ receipe }) {
    return (<div className="row">
        {receipe.map((receipe) => {
            return (
                <div className="col-md-3">
                    <div class="card py-2 text-center" >
                        <img src={receipe.image} className="img-fluid w-50 mx-auto rounded-circle" />
                        <div className="card-body py-2">
                            <h5>{receipe.name}</h5>
                            <div>
                                <p><span><b>Description : </b></span>{receipe.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )

        })
        }

    </div >

    )
}

export default Receipe;