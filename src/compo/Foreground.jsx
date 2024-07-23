// import React ,{useRef} from "react";
// import { MdDeleteSweep } from "react-icons/md";
// import Card from "./Card";

// function Foreground() {
  
//   const ref = useRef (null) ;

//   const data = [
//     {
//       desc: "Jay shree Krishna Jay khoodiyar maa Jay hanuman dada ",
//       filesize: ".9mb",
//       close: false,
//       tag: { isOpen: true, tagtitle : "Download Now" ,tagColor:"green" },
//     },
//     {
//       desc: "Jay shree Krishna Jay khoodiyar maa Jay hanuman dada ",
//       filesize: ".9mb",
//       close: false,
//       tag: { isOpen: true, tagtitle : "Download Now" ,tagColor:"blue" },
//     },
//     {
//       desc: "Jay shree Krishna Jay khoodiyar maa Jay hanuman dada ",
//       filesize: ".9mb",
//       close: false,
//       tag: { isOpen: true, tagtitle : "Upload" ,tagColor:"#622323" },
//     }
//     ,
//     {
//       desc: "Jay shree Krishna Jay khoodiyar maa Jay hanuman dada ",
//       filesize: ".9mb",
//       close: false,
//       tag: { isOpen: true, tagtitle : "Upload" ,tagColor:"#622323" },
//     }
//   ];
//   return (
//     <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-2 flex-wrap p-5">
//       {data.map((item,index)=>(
//         <Card data = {(item)} reference={ref}/>
//       ))}
//       <div className="fixed bottom-2 right-2 z-50 fixed bottom-2 right-2 z-50 transform transition-transform duration-200 hover:scale-150 p-10  bg-zinc-700 rounded-[50px] ">
//       <MdDeleteSweep size="1.8em"  />
//       </div>
      
//     </div>
//   );
// // }

// export default Foreground;

import React, { useRef, useState } from "react";
import { MdAddCircleOutline } from "react-icons/md";
import Card from "./Card";

function Foreground() {
  const ref = useRef(null);
  const [cards, setCards] = useState([
    {
      id: 1,
      desc: "Jay shree Krishna Jay khoodiyar maa Jay hanuman dada",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: true, tagtitle: "Download Now", tagColor: "green" },
    },
    {
      id: 2,
      desc: "Jay shree Krishna Jay khoodiyar maa Jay hanuman dada",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: true, tagtitle: "Download Now", tagColor: "blue" },
    },
    {
      id: 3,
      desc: "Jay shree Krishna Jay khoodiyar maa Jay hanuman dada",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: true, tagtitle: "Upload", tagColor: "#622323" },
    },
    {
      id: 4,
      desc: "Jay shree Krishna Jay khoodiyar maa Jay hanuman dada",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: true, tagtitle: "Upload", tagColor: "#622323" },
    },
  ]);

  const addCard = () => {
    const newCard = {
      id: cards.length + 1,
      desc: "New Card Description",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: true, tagtitle: "New Tag", tagColor: "green" },
    };
    setCards([...cards, newCard]);
  };

  const deleteCard = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  const updateCard = (id, updatedData) => {
    setCards(cards.map((card) => (card.id === id ? { ...card, ...updatedData } : card)));
  };

  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-2 flex-wrap p-5">
      {cards.map((item) => (
        <Card key={item.id} data={item} reference={ref} onDelete={deleteCard} onUpdate={updateCard} />
      ))}
      <div className="fixed bottom-2 right-2 z-50 flex space-x-4">
        <div
          onClick={addCard}
          className="transform transition-transform duration-200 hover:scale-125 p-5 bg-green-600 rounded-full flex items-center justify-center cursor-pointer"
        >
          <MdAddCircleOutline size="2em" color="white" />
        </div>
      </div>
    </div>
  );
}

export default Foreground;
