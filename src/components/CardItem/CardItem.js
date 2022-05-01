// import React from 'react';
// import { Link } from 'react-router-dom';

// function SwipecardsContent(props) {
//   return (
//     <>
//       <li className='sc-item'>
//         <Link className='sc-item-link' to={props.path}>
//           <figure className='sc-item-pic-wrap' data-category={props.label}>
//             <img
//               className='sc-item-img'
//               alt=''
//               src={props.src}
//             />
//           </figure>
//           <div className='sc-item-info'>
//             <h5 className='sc-item-text'>{props.text}</h5>
//           </div>
//         </Link>
//       </li>
//     </>
//   );
// }

// export default SwipecardsContent;
import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" to={props.path}>
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img
              className="cards__item__img"
              alt="This cannot be viewed at this time"
              src={props.src}
            />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;