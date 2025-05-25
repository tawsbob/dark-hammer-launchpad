
export const SocialProofSection = () => {
  const testimonials = [
    "Cut my upload time by 40% in the first week",
    "Finally, one dashboard for all my channels",
    "Dark Hammer saved my sanity and my schedule",
    "Best creator tool I've used in 5 years",
    "Wish I had this when I started YouTube",
    "Game changer for multi-channel creators"
  ];

  return (
    <section className="py-12 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <h3 className="text-title-medium text-center text-gray-600 dark:text-gray-400 mb-8">
          What Early Beta Users Are Saying
        </h3>
        
        <div className="relative">
          <div className="flex animate-slide-left">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-4 px-6 py-3 bg-green-100 dark:bg-green-900 rounded-full whitespace-nowrap"
              >
                <span className="text-sm text-green-800 dark:text-green-200 font-medium">
                  "{testimonial}"
                </span>
              </div>
            ))}
          </div>
          
          {/* Gradient fade effects */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white dark:from-gray-900 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white dark:from-gray-900 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};
