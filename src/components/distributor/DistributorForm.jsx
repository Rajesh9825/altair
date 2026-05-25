import { FaPaperPlane } from "react-icons/fa6";

const DistributorForm = () => {
  return (
    <div
      className="
        relative
        overflow-hidden

        rounded-[28px]

        border
        border-[#dbeeff]

        bg-white/70
        backdrop-blur-xl

        shadow-[0_20px_60px_rgba(13,59,142,0.08)]

        p-6
        md:p-8
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          top-[-120px]
          right-[-120px]
          w-[260px]
          h-[260px]
          rounded-full
          bg-cyan-100/40
          blur-3xl
        "
      ></div>

      {/* Heading */}
      <div className="relative z-10 mb-8">
        
        <span
          className="
            inline-block
            px-4
            py-1.5
            rounded-full
            bg-[#eef7ff]
            text-[#1558d6]
            text-sm
            font-semibold
            mb-4
          "
        >
          Distributor Enquiry
        </span>

        <h2
          className="
            text-[#0d3b8e]
            text-3xl
            md:text-4xl
            font-extrabold
            tracking-[-2px]
            leading-tight
            mb-4
          "
        >
          Let’s Grow Together
        </h2>

        <p
          className="
            text-slate-600
            text-base
            md:text-lg
            leading-relaxed
            max-w-[550px]
          "
        >
          Fill in your details and our team will
          connect with you shortly.
        </p>
      </div>

      {/* Form */}
      <form className="relative z-10 space-y-5">
        
        {/* Row 1 */}
        <div className="grid md:grid-cols-2 gap-5">
          <InputField
            label="Full Name"
            placeholder="Enter your full name"
          />

          <InputField
            label="Mobile Number"
            placeholder="Enter mobile number"
          />
        </div>

        {/* Row 2 */}
        <div className="grid md:grid-cols-2 gap-5">
          <InputField
            label="Email Address"
            placeholder="Enter email address"
          />

          <InputField
            label="State"
            placeholder="Select your state"
          />
        </div>

        {/* Row 3 */}
        <div className="grid md:grid-cols-2 gap-5">
          <InputField
            label="City"
            placeholder="Enter your city"
          />

          <InputField
            label="Business Name"
            placeholder="Enter business name"
          />
        </div>

        {/* Experience */}
        <InputField
          label="Industry Experience"
          placeholder="Enter your experience"
        />

        {/* Message */}
        <div>
          
          <label
            className="
              block
              text-[#0d3b8e]
              font-semibold
              mb-2
            "
          >
            Message
          </label>

          <textarea
            rows="4"
            placeholder="Tell us more about your requirement"
            className="
              w-full

              rounded-2xl

              border
              border-[#dbeeff]

              bg-[#f8fcff]

              px-4
              py-3

              text-slate-700

              outline-none

              focus:border-[#1558d6]
              focus:ring-4
              focus:ring-[#1558d6]/10

              transition-all
              duration-300

              resize-none

              hover:border-[#b8d9ff]
            "
          ></textarea>
        </div>

        {/* Checkbox */}
        <div className="flex items-start gap-3 pt-2">
          
          <input
            type="checkbox"
            className="
              mt-1
              accent-[#1558d6]
            "
          />

          <p className="text-slate-600 text-sm leading-relaxed">
            I agree to the terms and privacy policy.
          </p>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="
            group
            relative
            overflow-hidden

            w-full

            rounded-2xl

            bg-gradient-to-r
            from-[#1558d6]
            to-[#0d3b8e]

            text-white

            py-4

            font-semibold
            text-lg

            flex
            items-center
            justify-center
            gap-3

            shadow-lg

            hover:-translate-y-1
            hover:shadow-[0_18px_40px_rgba(21,88,214,0.25)]

            transition-all
            duration-500
          "
        >
          {/* Shine */}
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
      
      <label
        className="
          block
          text-[#0d3b8e]
          font-semibold
          mb-2
        "
      >
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

          px-4
          py-3

          text-slate-700

          outline-none

          focus:border-[#1558d6]
          focus:ring-4
          focus:ring-[#1558d6]/10

          transition-all
          duration-300

          hover:border-[#b8d9ff]
        "
      />
    </div>
  );
};

export default DistributorForm;