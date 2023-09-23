import { MdLocationOn } from "react-icons/md";
import { AiOutlineDollarCircle } from "react-icons/ai";



const Job = ({ job }) => {
  const { logo, job_title,company_name,remote_or_onsite,location,job_type, salary, } = job;
  return (
    <div className="card card-compact  bg-base-100 shadow-xl border border-[#7E90FE]">
      <figure >
        <img
          src={logo}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p className="text-xl">{company_name}</p>
        <div>
            <button className="px-5 py-2 font-extrabold rounded border text-[#7E90FE] border-[#7E90FE] mr-4">{remote_or_onsite}</button>
            <button className="px-5 py-2 font-extrabold rounded border text-[#7E90FE] border-[#7E90FE] mr-4">{job_type}</button>
        </div>
        <div className="mt-4 flex items-center gap-5">
            <h2 className="flex items-center"><MdLocationOn className="text-2xl mr-2"></MdLocationOn>{location}</h2>
            <p className="flex items-center"><AiOutlineDollarCircle className="text-2xl mr-2"></AiOutlineDollarCircle>{salary}</p>
        </div>
        <div className="card-actions ">
          <button className="btn btn-primary bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Job;

