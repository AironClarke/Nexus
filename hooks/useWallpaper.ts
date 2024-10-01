// import React, { useState, useEffect, RefObject } from 'react'
// import * as THREE from 'three'
// import BIRDS from 'libs/vanta.waves.min'

// const useWallpaper = (refElement: RefObject<HTMLElement>) => {
//   const [vantaEffect, setVantaEffect] = useState(0)

//   useEffect(() => {
//     if (!vantaEffect) {
//       setVantaEffect(BIRDS({
//         el: refElement.current,
//         THREE
//       }))
//     }
//     return () => {
//       if (vantaEffect) vantaEffect.destroy()
//     }
//   }, [vantaEffect])
//   return <div ref={myRef}>
//     Foreground content goes here
//   </div>
// }

// export default useWallpaper
