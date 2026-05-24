import { FaPaperPlane } from "react-icons/fa6";

const DistributorForm = () => {
  return (
    <div
      className="
        bg-white
        rounded-[32px]
        border
        border-[#dbeeff]
        shadow-lg
        p-8
        md:p-10
      "
    >
      
      {/* Heading */}
      <div className="mb-10">
        
        <h2
          className="
            text-[#0d3b8e]
            text-4xl
            font-bold
            mb-4
          "
        >
          Enquiry Form
        </h2>

        <p className="text-slate-700 text-lg">
          Please fill in your details and our team
          will get in touch with you.
        </p>
      </div>

      {/* Form */}
      <form className="space-y-6">
        
        {/* Row 1 */}
        <div className="grid md:grid-cols-2 gap-6">
          
          <InputField label="Full Name" placeholder="Enter your full name" />

          <InputField label="Mobile Number" placeholder="Enter your mobile number" />
        </div>

        {/* Row 2 */}
        <div className="grid md:grid-cols-2 gap-6">
          
          <InputField label="Email Address" placeholder="Enter your email address" />

          <InputField label="State" placeholder="Select your state" />
        </div>

        {/* Row 3 */}
        <InputField label="City" placeholder="Enter your city" />

        {/* Row 4 */}
        <InputField
          label="Business / Company Name"
          placeholder="Enter your business name"
        />

        {/* Row 5 */}
        <InputField
          label="Experience in This Industry"
          placeholder="Enter your experience"
        />

        {/* Message */}
        <div>
          
          <label className="block text-[#0d3b8e] font-semibold mb-3">
            Message / Additional Information
          </label>

          <textarea
            rows="5"
            placeholder="Tell us more about your requirement"
            className="
              w-full
              rounded-2xl
              border
              border-[#dbeeff]
              bg-[#f8fcff]
              px-5
              py-4
              outline-none
              focus:border-[#1558d6]
              focus:ring-4
              focus:ring-[#1558d6]/15
              transition-all
              resize-none
            "
          ></textarea>
        </div>

        {/* Checkbox */}
        <div className="flex items-start gap-3">
          
          <input type="checkbox" className="mt-1" />

          <p className="text-slate-700 text-sm">
            I agree to the terms and privacy policy.
          </p>
        </div>

        {/* Submit */}
        <button
          className="
            group
            relative
            overflow-hidden
            w-full
            bg-[#1558d6]
            text-white
            font-semibold
            text-lg
            rounded-2xl
            py-4
            flex
            items-center
            justify-center
            gap-3
            hover:-translate-y-1
            hover:shadow-[0_15px_35px_rgba(21,88,214,0.3)]
            transition-all
            duration-500
          "
        >
          <span
            className="
              absolute
              top-0
              -left-full
              w-full
              h-full
              bg-white/20
              skew-x-12
              transition-all
              duration-700
              group-hover:left-full
            "
          ></span>

          <FaPaperPlane className="relative z-10" />

          <span className="relative z-10">
            Submit Enquiry
          </span>
        </button>
      </form>
    </div>
  );
};

const InputField = ({ label, placeholder }) => {
  return (
    <div>
      
      <label className="block text-[#0d3b8e] font-semibold mb-3">
        {label}
      </label>

      <input
        type="text"
        placeholder={placeholder}
        className="
          w-full
          rounded-2xl
          border
          border-[#dbeeff]
          bg-[#f8fcff]
          px-5
          py-4
          outline-none
          focus:border-[#1558d6]
          focus:ring-4
          focus:ring-[#1558d6]/15
          transition-all
        "
      />
    </div>
  );
};

export default DistributorForm;