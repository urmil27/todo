import React ,{useRef} from "react";
import Card from "./Card";

function Foreground() {
  
  const ref = useRef (null) ;

  const data = [
    {
      desc: "Jay shree Krishna Jay khoodiyar maa Jay hanuman dada ",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: true, tagtitle : "Download Now" ,tagColor:"green" },
    },
    {
      desc: "Jay shree Krishna Jay khoodiyar maa Jay hanuman dada ",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: true, tagtitle : "Download Now" ,tagColor:"blue" },
    },
    {
      desc: "Jay shree Krishna Jay khoodiyar maa Jay hanuman dada ",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: true, tagtitle : "Upload" ,tagColor:"#622323" },
    }
  ];
  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-2 flex-wrap p-5">
      {data.map((item,index)=>(
        <Card data = {(item)} reference={ref}/>
      ))}
    </div>
  );
}

export default Foreground;
