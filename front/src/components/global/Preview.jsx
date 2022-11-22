// import React, { useState } from "react";
// import Image from "./Image";
// import "./../statics/preview.css";
// import Button from "./Button";
// import CloseIcon from "@mui/icons-material/Close";

// function Preview({ onSelectFile, onDelete }) {
//   const [selectedImages, setSelectedImages] = useState([]);

//   return (
//     <section>
//       <label className='preview-label'>
//         + Add Images
//         <input
//           type='file'
//           name='images'
//           className='preview-input'
//           onChange={onSelectFile}
//           multiple
//           accept='image/png , image/jpeg'
//         />
//       </label>
//       <br />

//       {selectedImages.length > 0 &&
//         (selectedImages.length > 4 ? (
//           <p className='error'>
//             <span>At most 4 images</span>
//             <br />
//             <Button version='primary' isDisabled={true}>
//               Submit
//             </Button>
//           </p>
//         ) : (
//           <p className='error'>
//             <Button
//               version='primary'
//               isDisabled={false}
//               onClick={() => {
//                 console.log(selectedImages);
//               }}
//             >
//               Submit
//             </Button>
//           </p>
//         ))}

//       <div className='images'>
//         {selectedImages &&
//           selectedImages.map((image, index) => {
//             return (
//               <div key={image} className='image'>
//                 <Image src={image} addStyles='preview-img' alt='upload' />
//                 <Button version='tertiary' onClick={() => onDelete(image)}>
//                   <CloseIcon />
//                 </Button>
//                 <p>{index + 1}</p>
//               </div>
//             );
//           })}
//       </div>
//     </section>
//   );
// }

// export default Preview;
