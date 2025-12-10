import React from 'react'

const Partner = () => {
  return (
    <div className="w-full py-16 px-4 bg-gray-50 flex flex-col items-center gap-10">

      {/* Title Section */}
      <div className="flex flex-col items-center text-center gap-3 max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold uppercase text-gray-800">
          Our Strategic Partners
        </h2>

        <p className="text-gray-600 text-base md:text-lg">
          VCloudMaster collaborates with industry leaders to deliver exceptional cloud solutions for your business.
        </p>
      </div>

      {/* Partner Card */}
      <div className="
        bg-white shadow-xl rounded-2xl p-8 w-full max-w-3xl
        flex flex-col items-center gap-8
        border border-gray-200 hover:shadow-2xl transition-all duration-300
      ">

        {/* Partner Logo + Title */}
        <div className="flex flex-col items-center gap-4">
          <img
            src="https://www.vcloudmaster.com/images/tierservices.png"
            alt="aws"
            className="w-40 drop-shadow-lg"
          />

          <h2 className="text-xl font-semibold text-gray-800">
            Amazon Web Services
          </h2>

          <button className="
            px-5 py-2 bg-slate-700 text-white rounded-full
            text-sm font-medium shadow-md hover:bg-slate-600 duration-300
          ">
            Advanced Tier Partner
          </button>
        </div>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed text-center text-base md:text-base px-2">
          As an AWS Advanced Tier Partner, VCloudMaster provides expert cloud consulting,
          migration services, DevSecOps, cloud adoption, disaster recovery, and managed solutions.
          Our certified professionals deliver customized AWS architectures that optimize performance,
          security, and cost-efficiency for businesses of all sizes.
        </p>

        {/* CTA Button */}
        <button className="
          px-5 py-2 bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%)] text-orange-500 rounded-lg shadow-md 
          hover:bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%)] duration-300 font-medium
        ">
          Explore Our Services
        </button>

      </div>
    </div>
  )
}

export default Partner
