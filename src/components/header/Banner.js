import React from "react";
import * as data from "../../data";
// export default function Banner() {
//   return (
//     <div>
//       <h1>Hello From banner {name}</h1>
//     </div>
//   );
// }

function Banner() {
  return (
    <div>
      <h1>Hello From banner {data.name}</h1>
    </div>
  );
}

export default Banner;
