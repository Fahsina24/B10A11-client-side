const Services = ({ service }) => {
  //   console.log(service);
  return (
    <div className="card bg-base-100 card-sm shadow-sm border-1 border-gray-100">
      <div className="card-body">
        <div className="flex justify-center items-center ">
          <h2 className="card-title flex justify-center items-center text-xl font-extrabold ">
            <p>{service.icon}</p>
            <p>{service.title}</p>
          </h2>
        </div>
        <p className="text-gray-600 text-lg">{service.description}</p>
      </div>
    </div>
  );
};

export default Services;
