// import React from "react";
// import { FaTasks } from "react-icons/fa";
// import { IoMdCodeDownload } from "react-icons/io";
// import { RiGitClosePullRequestFill } from "react-icons/ri";
// import { motion } from "framer-motion";

// function card({ data, reference }) {
//   return (
//     <motion.div drag dragConstraints={reference} whileDrag={{ scale: 1.1 }} dragElastic={1.0} dragTransition={{ bounceStiffness: 100 ,bounceDamping:200}}>
//       <section id="card">
//         <div className="relative w-60 flex-shrink-0 h-72 rounded-[50px] bg-zinc-900/90 p-5 text-white overflow-hidden px-8 py-10">
//           <FaTasks />
//           <p className="text-sm mt-5 leading-tight font-semibold">
//             {data.desc}
//           </p>
//           <div className="footer absolute bottom-0 left-0 w-full ">
//             <div className="flex justify-between px-8 mb-2 py-3">
//               <h5>{data.filesize}</h5>
//               <span className="w-10 h-8 bg-zinc-800 rounded-full flex justify-center items-center py-0.5">
//                 {data.close ? (
//                   <RiGitClosePullRequestFill />
//                 ) : (
//                   <IoMdCodeDownload size="1.8em" />
//                 )}
//               </span>
//             </div>
//             {data.tag.isOpen && (
//               <div
//                 className={`tag w-full py-4 flex items-center justify-center ${
//                   data.tag.tagColor === "green" ? "bg-red-900" : "bg-green-900"
//                 }`}
//               >
//                 <h3 className="text-sm font-semibold">{data.tag.tagtitle}</h3>
//               </div>
//             )}
//           </div>
//         </div>
//       </section>
//     </motion.div>
//   );
// }

// export default card;


import React, { useState } from "react";
import { FaTasks } from "react-icons/fa";
import { IoMdCodeDownload } from "react-icons/io";
import { RiGitClosePullRequestFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { MdDeleteSweep, MdAddCircleOutline } from "react-icons/md";


function Card({ data, reference, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [desc, setDesc] = useState(data.desc);
  const [tagTitle, setTagTitle] = useState(data.tag.tagtitle);

  const handleUpdate = () => {
    onUpdate(data.id, { desc, tag: { ...data.tag, tagtitle: tagTitle } });
    setIsEditing(false);
  };

  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragElastic={1.0}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 200 }}
    >
      <section id="card" className="relative w-60 flex-shrink-0 h-72 rounded-[50px] bg-zinc-900/90 p-5 text-white overflow-hidden px-8 py-10">
        <FaTasks />
        {isEditing ? (
          <div>
            <textarea
              className="text-sm mt-5 leading-tight font-semibold w-full bg-zinc-800 p-2 rounded"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
            <input
              className="text-sm mt-2 leading-tight font-semibold w-full bg-zinc-800 p-2 rounded"
              value={tagTitle}
              onChange={(e) => setTagTitle(e.target.value)}
            />
            <button
              className="mt-2 bg-green-600 p-2 rounded"
              onClick={handleUpdate}
            >
              Save
            </button>
          </div>
        ) : (
          <>
            <p className="text-sm mt-5 leading-tight font-semibold">
              {data.desc}
            </p>
            <div className="footer absolute bottom-0 left-0 w-full ">
              <div className="flex justify-between px-8 mb-2 py-3">
                <h5>{data.filesize}</h5>
                <span className="w-10 h-8 bg-zinc-800 rounded-full flex justify-center items-center py-0.5">
                  {data.close ? (
                    <RiGitClosePullRequestFill />
                  ) : (
                    <IoMdCodeDownload size="1.8em" />
                  )}
                </span>
              </div>
              {data.tag.isOpen && (
                <div
                  className={`tag w-full py-4 flex items-center justify-center ${
                    data.tag.tagColor === "green" ? "bg-red-900" : "bg-green-900"
                  }`}
                >
                  <h3 className="text-sm font-semibold">{data.tag.tagtitle}</h3>
                </div>
              )}
            </div>
          </>
        )}
        <div className="absolute top-2 right-2 cursor-pointer" onClick={() => setIsEditing(!isEditing)}>
          ✏️
        </div>
        <div className="absolute bottom-2 right-2 cursor-pointer hover:scale-125 transition-transform duration-200" onClick={() => onDelete(data.id)}>
          <MdDeleteSweep size="1.8em" />
        </div>
      </section>
    </motion.div>
  );
}

export default Card;
