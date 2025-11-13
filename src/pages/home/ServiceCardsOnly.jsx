import { useEffect, useState } from "react";
import ServiceCard from "../../components/ServiceCard";

export default function ServiceCardsOnly() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/pets-data.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, []);

  if (services.length === 0) return <p>Loading services...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10">
      {services.map((service) => (
        <div key={service.serviceId} data-aos="fade-up">
          <ServiceCard service={service} />
        </div>
      ))}
    </div>
  );
}
