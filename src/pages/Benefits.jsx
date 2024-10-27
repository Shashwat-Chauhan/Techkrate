
const Benefits = () => {
  return (
    <section className="bg-white py-16 px-4 lg:px-0">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        
        {/* Left Graphic Section */}
        <div className="w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0">
          <div className="relative bg-gray-100 p-8 rounded-xl shadow-lg">
            <div className="absolute -top-4 -right-4 bg-white p-4 rounded-lg shadow-md text-center">
              <p className="text-lg font-semibold">Total Projects</p>
              <p className="text-2xl font-bold">1951+</p>
              <p className="text-green-500 text-sm mt-1">Increased by 20% this month</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold mb-2">Total Projects</p>
              <p className="text-3xl font-bold mb-4">1476</p>
              <div className="space-y-2">
                <div className="flex justify-between text-gray-600">
                  <span>Project A</span>
                  <span>85%</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Project B</span>
                  <span>90%</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Project C</span>
                  <span>75%</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Project D</span>
                  <span>95%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Benefits Section */}
        <div className="w-full lg:w-1/2 px-6">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">Key Benefits of Our System for Your Business Efficiency</h3>
          <p className="text-gray-600 mb-6">Our systems boost productivity, cut costs, and drive business growth.</p>
          <ul className="space-y-6">
            <li className="flex items-start">
              <span className="bg-green-500 w-4 h-4 rounded-full mr-4 mt-1"></span>
              <div>
                <h4 className="text-lg font-semibold">Boosting Quality with Tech</h4>
                <p className="text-gray-600">With advanced technology, we help you achieve top product quality. Discover how we can enhance your standards.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-green-500 w-4 h-4 rounded-full mr-4 mt-1"></span>
              <div>
                <h4 className="text-lg font-semibold">Optimization Production Process</h4>
                <p className="text-gray-600">Boost factory efficiency and productivity with our innovative solutions. See how the latest technologies can maximize your output.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-green-500 w-4 h-4 rounded-full mr-4 mt-1"></span>
              <div>
                <h4 className="text-lg font-semibold">AI-Driven Production</h4>
                <p className="text-gray-600">Leveraging the power of AI to transform your manufacturing processes, achieving faster and more effective results.</p>
              </div>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Benefits;
