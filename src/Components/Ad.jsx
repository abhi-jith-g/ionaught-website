// import React from 'react'
// const button=({title})=>{
//   return(
//     // <div>
//     //   <button>{title}</button>
//     // </div>
//   )
// }
// export default comp({})
import React from 'react'


const Ad = ({product,cost,icon}) => {
    return(
    <div className={'box'}>
     <img src={icon} alt="Product" height={"200px"}></img>   
       
        <div className="pro">{product}</div>
        <div className="price">{cost}</div>
        <button>Buy Now</button>

        </div>
 
    )
}
 export default Ad


  

