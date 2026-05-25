import { useNavigate } from "react-router-dom";
import { FaDroplet, FaUserGroup } from "react-icons/fa6";
import heroBg from "../assets/images/webpage-BG1.webp";
// 1. IMPORT YOUR MOBILE BACKGROUND IMAGE HERE:
// import heroBgMobile from "../assets/images/new_bg_home1.webp"; 

const heroBgMobile = "https://res.cloudinary.com/dep3ixqlu/image/upload/v1779700498/new_bg_home1_vpgw98.webp"; // Hosted version of the mobile background image for safe access 


const HeroSection = () => {

  const navigate = useNavigate();

  const handleExploreProducts = () => {
      navigate("/products");
    };

  const handleBecomeDistributor = () => {
      navigate("/distributor");
    };


  return (
    <section
      className="
        relative
        overflow-hidden
        w-full
        flex
        items-center

        /* 1. HEIGHT SETTINGS */
        min-h-[77vh]           /* Mobile */
        md:min-h-[80vh]        /* iPad / Tablet */
        lg:min-h-[82vh]        /* Desktop */

        /* 2. BACKGROUND SETTINGS */
        bg-[#07152e]
        bg-no-repeat

        /* 3. IMAGE SETTINGS */
        bg-contain     /* Mobile: shifts image over so text remains readable */
        md:bg-cover
        lg:bg-cover

        /* 3. IMAGE POSITIONING */
        
        bg-[bottom]    /* Mobile: shifts image over so text remains readable */
        md:bg-center           /* iPad: centers focal point */
        lg:bg-center           /* Desktop */

        
        


      "
      /* 2. DYNAMICALLY GENERATED RESPONSIVE BACKGROUND IMAGES */
      style={{
        '--bg-desktop': `url(${heroBg})`,
        '--bg-mobile': `url(${heroBgMobile})`,
      }}
    >
      
      {/* CSS Rule Injection to handle responsive background-images safely */}
      <style>{`
        section { background-image: var(--bg-mobile); }
        @media (min-width: 768px) { section { background-image: var(--bg-desktop); } }
      `}</style>

      {/* Background Tint Overlay */}
      <div className="absolute inset-0 bg-[#07152e]/0 z-0"></div>

      {/* Main Framework Container */}
      <div
        className="
          relative
          z-10
          w-full
          max-w-[1150px]
          mx-auto
          
          /* CONTAINER PADDING - CHANGED TO MOVE CONTENT MORE TO THE LEFT */
          px-6
          sm:px-8
          md:px-4                 /* Reduced from 12 to 4 to shift left on iPad */
          lg:px-0                 /* Reduced from 6 to 2 to shift left on Desktop */

          /* LAYOUT SWITCH: Stacked on mobile, side-by-side grid on larger devices */
          grid
          grid-cols-1
          md:grid-cols-12
          items-center
        "
      >
        {/* Content Box (Spans 7 columns on tablet, 6 on desktop) */}
        <div
          className="
            w-full
            col-span-1
            md:col-span-7
            lg:col-span-6

            /* CONTENT SPACING */
            py-46
            md:py-16
            lg:py-20

            /* ALIGNMENT: Centered on mobile, left-aligned on tablet/desktop */
            text-center
            md:text-left

            /* CONTENT POSITIONING ADJUSTMENT: Moves the block higher up */
            -mt-40                /* Shifts up slightly on Mobile */
            md:-mt-55             /* Shifts up perfectly on iPad / Tablet */
            lg:-mt-24             /* Shifts up beautifully on Desktop layout */
          "
        >
          {/* Main Typography Header */}
          <h1
            className="
              font-['Signika']
              text-[#0d3b8e]
              font-extrabold
              tracking-[2px]
              leading-[1.1]

              /* TYPOGRAPHY RESPONSIVENESS */
              text-6xl          /* Mobile */
              sm:text-6xl       /* Small devices */
              md:text-7xl       /* iPad / Tablet */
              lg:text-7xl       /* Large Desktop */
            "
          >
            Purity you trust
          </h1>

          {/* Accent Line Decorator */}
          <div
            className="
              bg-cyan-400
              rounded-full
              h-1

              /* ACCENT SIZE */
              w-16
              md:w-20

              /* SPACING & POSITIONING */
              my-5
              md:my-6
              mx-auto          /* Centers line on mobile */
              md:mx-0          /* Sticks line to left side on desktop */
            "
          ></div>

          {/* Paragraph Body Text */}
          <p
            className="
              text-slate-700
              leading-relaxed
              mx-auto
              md:mx-0

              /* WIDTH CONSTRAINTS */
              max-w-[300px]     /* Mobile width limits */
              md:max-w-[480px]  /* Tablet width limits */
              lg:max-w-[520px]  /* Desktop width limits */

              /* FONT SIZING */
              text-base
              sm:text-lg
              md:text-[19px]
              lg:text-[22px]

              /* BOTTOM GUTTER */
              mb-8
              md:mb-10
            "
          >
            Altair is committed to purity, quality, and refreshment in every drop.
          </p>

          {/* Interactive Action Hub (Buttons Container) */}
          <div
            className="
              flex
              flex-col
              sm:flex-row
              justify-center
              md:justify-start
              items-stretch
              sm:items-center
              gap-4
              
              /* OUTER WIDTH AT SMALL RESOLUTIONS */
              max-w-[320px]
              sm:max-w-none
              mx-auto
              md:mx-0
            "
          >
            {/* Primary Action Call */}
            <button
              onClick={handleExploreProducts} // Linked functional click handler
              className="
                group
                relative
                overflow-hidden
                bg-[#1558d6]
                text-white
                font-semibold
                flex
                items-center
                justify-center
                gap-3
                rounded-xl
                shadow-md
                transition-all
                duration-500
                hover:-translate-y-1
                hover:shadow-[0_12px_24px_rgba(21,88,214,0.35)]

                /* BUTTON DIMENSIONS BY BREAKPOINT */
                w-full
                sm:w-auto
                px-6 py-3.5
                md:px-6 md:py-3.5
                lg:px-8 lg:py-4

                /* ACTION FONT SIZING */
                text-base
                md:text-base
                lg:text-lg
              "
            >
              {/* Animation Layer */}
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

              <FaDroplet className="relative z-10 text-lg shrink-0" />
              <span className="relative z-10 whitespace-nowrap">Explore Products</span>
            </button>

            {/* Secondary Action Call */}
            <button
              onClick={handleBecomeDistributor} // Linked functional click handler
              className="
                group
                relative
                overflow-hidden
                border-2
                border-[#0d3b8e]
                bg-white/10
                backdrop-blur-sm
                text-[#0d3b8e]
                font-semibold
                flex
                items-center
                justify-center
                gap-3
                rounded-xl
                transition-all
                duration-500
                hover:bg-[#0d3b8e]
                hover:text-white
                hover:-translate-y-1
                hover:shadow-[0_12px_24px_rgba(13,59,142,0.25)]

                /* BUTTON DIMENSIONS BY BREAKPOINT */
                w-full
                sm:w-auto
                px-6 py-3.5
                md:px-6 md:py-3.5
                lg:px-8 lg:py-4

                /* ACTION FONT SIZING */
                text-base
                md:text-base
                lg:text-lg
              "
            >
              <FaUserGroup className="relative z-10 text-lg shrink-0" />
              <span className="relative z-10 whitespace-nowrap">Become Distributor</span>
            </button>
          </div>
        </div>

        {/* Empty Spacer Column for Desktop Layout Balance */}
        <div className="hidden md:block md:col-span-5 lg:col-span-6"></div>
      </div>
    </section>
  );
};

export default HeroSection;