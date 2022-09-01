// import React, { useEffect, useState } from "react";
// import "./ReceipeImage.css";

// function ReceipeImage({ model }) {
//     return (<div className="row">
//         {model.map((recipe) => {
//             return (
//                 <div>
//                     < div className="col-12 col-md-4" >
//                         <img src={recipe.image} className="img-fluid sticky-top" style="top: 20px;" alt="{recipe.name}" loading="lazy"></img>
//                     </div >

//                     < div className="col-12 col-md-8" >
//                         <div className="row">
//                             <div className="col-12"><h1>{recipe.name}</h1></div>
//                             <div className="col-12 mb-4"><i className="bi bi-tag"></i>{recipe.category}</div>
//                             <div className="col-12" style="white-space: pre-line;">
//                                 <h4>Cooking Instructions</h4>
//                                 {recipe.description}
//                             </div>
//                         </div>
//                     </div>
//                     < div className="row pt-4" >
//                         <div className="col-12">
//                             <h4>Ingredients</h4>
//                             <ul className="list-group list-group-flush">
//                                 {recipe.ingredients.forEach(function (ingredients, index) {
//                                     <li className="list-group-item">{ingredients}</li>
//                                 })}
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             )


//         })}
//     </div>)
// }




// export default ReceipeImage;



