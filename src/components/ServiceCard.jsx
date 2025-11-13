import { Link } from "react-router-dom";

export default function ServiceCard({ service }) {
  return (
    <div className="border rounded p-4 shadow hover:shadow-lg transition">
      <img src={service.image} alt={service.serviceName} className="w-full h-40 object-cover rounded" />
      <h3 className="font-bold mt-2">{service.serviceName}</h3>
      <p>Provider: {service.providerName}</p>
      <p>Price: ${service.price}</p>
      <p>Rating: {service.rating}</p>
      <Link
        to={`/service/${service.serviceId}`}
        className="btn btn-primary mt-2 w-full text-center block"
      >
        View Details
      </Link>
    </div>
  );
}
