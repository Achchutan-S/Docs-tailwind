import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { CgClose } from "react-icons/cg";

import PropTypes from "prop-types";

const Card = ({ data }) => {
  return (
    <div className="relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/70 text-white px-8 py-10 overflow-hidden">
      <FaRegFileAlt />

      <p className="text-sm mt-5 font-semibold leading-tight">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full left-0 ">
        <div className="flex items-center justify-between px-4 py-2">
          <h5 className="text-white">{data.fileSize}</h5>
          <span className="w-5 h-7 rounded-full flex items-center justify-center">
            {data.close ? (
              <CgClose size={".9rem"} color="#fff" />
            ) : (
              <LuDownload size={".9rem"} color="#fff" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag ${
              data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
            } w-full h-9 py-4 flex  items-center justify-center`}
          >
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.shape({
    desc: PropTypes.string.isRequired,
    fileSize: PropTypes.string.isRequired,
    close: PropTypes.bool.isRequired,
    tag: PropTypes.object.isRequired,

    // Add more PropTypes for other properties in data if needed
  }).isRequired,
};

export default Card;
