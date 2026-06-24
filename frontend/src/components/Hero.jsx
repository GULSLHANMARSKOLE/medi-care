// personal
import mephoto from "../assets/myphoto.jpeg"
import {FaCalendarCheck,FaUserDoctor} from "react-icons/fa6";
function Hero(){
    return(
        <section className="bg-gradient-to-r from-blue-50 to-white dark:from-gray-950 dark:to-gray-900 min-h-[90vh] flex items-center">
            <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-12 item-center">
                {/* Left side */}
                <div>
                    <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full font-medium">Truested by 10,000+ Patients</span>
                    <h1 className="mt-6 text-5xl md:text-6xl font-bold  text-gray-800 dark:text-white leading light ">Your Health Is Our
                    <span className="text-blue-600">Top Priority</span>
                    </h1>
                    <p className="mt-6 text-gray-600 dark:text-gray-300 text-lg leading-8">Find experience doctors, book appointments instantly,and manage your healthcare seamlessly from anywhere.</p>
                    <div className="flex gap-4 mt-8">
                        <button className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition">Book Appointment</button>
                        <button className="border border-blue-600 text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50  dark:hover:bg-gray-800 transition">Find Doctors</button>
                    </div>
                    <div className="flex gap-10 mt-12">
                        <div>
                            <h2 className="text-3xl font-bold text-blue-600">
                                100+
                            </h2>
                            <p className="text-gray-500 dark:text-gray-300"> Doctors</p>
                        </div>
                        <div>
                            <h2 className="text=3xl font-bold text-blue-600">5K+</h2>
                            <p className="text-gray-500 dark:text-gray-300">Patients</p>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-blue-600">24/7</h2>
                            <p className="text-gray-500 dark:text-gray-300">Support</p>
                        </div>
                    </div>

                </div>
                <div className="relative">
                    <img src={mephoto} alt="Doctor" className=" w-40 h-40 object-cover rounded-3xl shadow-2xl" />
                    <div className="absolute bottom-8 -left-8 bg-white dark:bg-gray-700 shadow-xl p-5 rounded-2xl flex gap-4 items-center">
                        <FaUserDoctor className="text-3xl  text-blue-600"/>
                        <div>
                            <h3 className="font-semibold ">
                                Expert Doctors
                            </h3>
                            <p className="text-gray-500 dark:text-gray-300 text-sm">100+ Specialists</p>
                        </div>
                    </div>
                    <div className="absolute top-10 -right-5 bg-white  dark:bg-gray-800  shadow-xl p-5 rounded-2xl flex gap-4 items-center">
                        <FaCalendarCheck className="text-3xl text-green-600"/>
                        <div>
                            <h3 className="font-semibold">Easy Booking</h3>
                            <p className="text-gray-500 dark:text-gray-300 text-sm">
                                Anytime,Anywhere
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}
export default Hero;