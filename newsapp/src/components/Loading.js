// import React, { Component } from 'react'
import gif from './loading.gif'

// export class Loading extends Component {
//     render() {
//         return (
//             <div className="text-center">
//                 <img src={gif} alt="" />
//             </div>
//         )
//     }
// }

// export default Loading


import React from 'react'

export default function Loading() {
  return (
    <div className="text-center">
                <img src={gif} alt="" />
            </div>
  )
}
