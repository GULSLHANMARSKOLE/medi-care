function Testimonials(){
    const reviews=[
        {
            id:1,
            name:"Mohit Vishwakarma",
            review:"Excellent Service! Booking appointement was very easy and the doctors were highly professional.",
        }
        ,
        {
            id:2,
            name:"Rinkesh Dhurvey",
            review:"The platform made healthcare accessible and convenient. Highly recommended",
        },
        {
            id:3,
            name:"Ajay Kumar",
            review:"Very satisfied with the treatment and the smooth appointment process.",
        },
        {
            id:4,
            name:"Shashank jaiswal",
            review:"The medical facilities are excellent",
        }
    ];
    return (
        <section className="bg-gray-50 dark:bg-gray-900  py-20">
            <div className="max-w-7xl mx-auto px-8">
                <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white">
                    What Our Patients Say
                </h2>
                <p className="text-center text-gray-500 mt-4 mb-12 dark:text-white">
                    Trusted by thousands of happy patients
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review)=>(
                        <div key={review.id}
                        className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition duration-300">
                            <div className="text-yellow-400 text-2xl mb-4">
                                ⭐⭐⭐⭐⭐
                            </div>
                            <p className="text-gray-600 dark:text-white mb-6">"{review.review}"</p>
                            <h3 className="font-bold dark:text-white text-lg">{review.name}</h3>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}

export default Testimonials;