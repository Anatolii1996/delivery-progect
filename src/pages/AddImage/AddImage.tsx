// import { useState } from "react";

// const AddImage = () => {
//   const [image, setImage]: any = useState("");
//   const [name, setName]: any = useState("");

//   const convertToBase64 = (e: any) => {
//     // console.log(e);
//     const reader = new FileReader();
//     reader.readAsDataURL(e.target.files[0]);
//     reader.onload = () => {
//       // console.log(reader.result);
//       setImage(reader.result);
//     };
//     reader.onerror = (error) => {
//       console.log("Error: " + error);
//     };
//   };

//   const upladImage = () => {
  
//     console.log(name)
//     console.log(image)
//     try {
//       fetch("http://localhost:3002/upload-image", {
//         method: "POST",
//         // mode: "no-cors",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//           "Access-Control-Allow-Origin": "*",
//         },
//         body: JSON.stringify({
//           base64: image,
//           name,
//         }),

//         // .then((res:any)=>res.json()).then((data:any) => console.log(data))
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="image_wrap">
//       <input type="text" name="" onChange={(e) => setName(e.target.value)} />
//       <input type="file" name="" onChange={convertToBase64} />
//       {image ? <img src={image} width={100} height={100} /> : ""}
//       <button onClick={upladImage}>Upload</button>
//     </div>
//   );
// };

// export default AddImage;
