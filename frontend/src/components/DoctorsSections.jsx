import DrNareshTrehan from "../assets/DrnareshTrehan.jpg";
import DrPraveenGupta from "../assets/neuropraveen.jpg";
import DrRashmiShetty from "../assets/darmatorashmi.jpg";
function DoctorsSection(){
    const doctors=[
        {
            id:1,
            name:"Dr. Naresh Trehan",
            speciality:"Cardiologist",
            image:DrNareshTrehan
        },
        {
            id:2,
            name:"Dr. Praveen Gupta",
            speciality:"Neurologist",
            image:DrPraveenGupta
        },
         {
            id:3,
            name:"Dr. Rashmi Shetty",
            speciality:"Darmatologist",
            image:DrRashmiShetty
        }
         
    ];
    return (
        <section className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white">
          Featured Doctors
        </h2>

        <p className="text-center text-gray-500 dark:text-gray-300 mt-4 mb-12">
          Meet our experienced specialists
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-gray-50  dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden  hover:-translate-y-2 transition duration-300"
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-72 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl dark:text-white font-semibold">
                  {doctor.name}
                </h3>

                <p className="text-blue-600 mt-2">
                  {doctor.specialty}
                </p>

                <button className="mt-5 w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700">
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
}

export default DoctorsSection;