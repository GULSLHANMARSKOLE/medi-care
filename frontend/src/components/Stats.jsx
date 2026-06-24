import {
  FaUserDoctor,
  FaUserGroup,
  FaCalendarCheck,
  FaAward,
} from "react-icons/fa6";

function Stats() {
  const stats = [
    {
      id: 1,
      number: "100+",
      title: "Expert Doctors",
      icon: <FaUserDoctor className="text-5xl text-blue-600" />,
    },
    {
      id: 2,
      number: "5000+",
      title: "Happy Patients",
      icon: <FaUserGroup className="text-5xl text-green-600" />,
    },
    {
      id: 3,
      number: "10K+",
      title: "Appointments",
      icon: <FaCalendarCheck className="text-5xl text-red-500" />,
    },
    {
      id: 4,
      number: "15+",
      title: "Years Experience",
      icon: <FaAward className="text-5xl text-yellow-500" />,
    },
  ];
  return (
    <section className="py-20 bg-blue-600 dark:bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-8">
            <div className="grid md:grid-cols-4 gap-10 text-center">
                {stats.map((stat)=>(
                    <div key={stat.id}>
                        <div className="flex justify-center mb-4">
                            {stat.icon}
                        </div>
                        <h2 className="text-4xl font-bold">
                            {stat.number}
                        </h2>
                        <p className="mt-2 text-lg">
                            {stat.title}
                        </p>

                    </div>
                ))}
            </div>
        </div>

    </section>
  );
}

export default Stats;