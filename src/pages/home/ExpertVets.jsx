const experts = [
    { name: "Dr. Muhammad Raihan", photo: "https://i.postimg.cc/3x7t3z7F/vet1.jpg", specialty: "Small Pets" },
    { name: "Imtiyaz Fayaj", photo: "https://i.postimg.cc/QC3n2H4q/vet2.jpg", specialty: "Dogs & Cats" },
    { name: "Dr.Lily Mily", photo: "https://i.postimg.cc/2yG6HhkK/vet3.jpg", specialty: "Nutrition" },
];

export default function ExpertVets() {
    return (
        <div className="mt-10">
            <h2 className="text-2xl font-bold mb-4">Meet Our Expert Vets</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {experts.map((vet, i) => (
                    // 👇 Line 12 (updated)
                    <div key={i} className="border rounded-lg p-4 text-center shadow" data-aos="zoom-in">
                        <img src={vet.photo} alt={vet.name} className="w-32 h-32 object-cover mx-auto rounded-full mb-2" />
                        <h3 className="font-bold">{vet.name}</h3>
                        <p>{vet.specialty}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}