import heroBg from "../../assets/images/Web-Page-About-Section.webp";
// 1. IMPORT YOUR PRODUCTS MOBILE BACKGROUND IMAGE HERE:
import heroBgMobile from "../../assets/images/Mobile-Web-BG.webp"; 

const ProductsHero = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        w-full
        flex
        items-center

        /* 1. HEIGHT SETTINGS */
        min-h-[100vh]           /* Mobile */
        md:min-h-[80vh]        /* iPad / Tablet */
        lg:min-h-[82vh]        /* Desktop */

        /* 2. BACKGROUND SETTINGS */
        bg-[#88cafb]
        bg-cover
        bg-no-repeat

        /* 3. IMAGE POSITIONING */
        bg-[center_40%]    /* Mobile: shifts image over so text remains readable */
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
      <div className="absolute inset-0 bg-[#88cafb]/15 z-0"></div>

      {/* Main Framework Container */}
      <div
        className="
          relative
          z-10
          w-full
          max-w-[1150px]
          mx-auto
          
          /* CONTAINER PADDING */
          px-6
          sm:px-8
          md:px-4
          lg:px-0

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
            py-12
            md:py-16
            lg:py-20

            /* ALIGNMENT: Centered on mobile, left-aligned on tablet/desktop */
            text-center
            md:text-left

            /* CONTENT POSITIONING ADJUSTMENT */
            -mt-110                /* Shifts up on Mobile */
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
            Our Products
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
              max-w-[280px]     /* Mobile width limits */
              md:max-w-[480px]  /* Tablet width limits */
              lg:max-w-[520px]  /* Desktop width limits */

              /* FONT SIZING */
              text-base         /* Mobile font size */
              sm:text-lg       
              md:text-[19px]    /* iPad font size */
              lg:text-[22px]    /* Desktop font size */
            "
          >
            At Altair, we deliver purity and freshness in every bottle using 
            advanced purification technology and uncompromising quality standards.
          </p>
        </div>

        {/* Empty Spacer Column for Desktop Layout Balance */}
        <div className="hidden md:block md:col-span-5 lg:col-span-6"></div>
      </div>
    </section>
  );
};

export default ProductsHero;