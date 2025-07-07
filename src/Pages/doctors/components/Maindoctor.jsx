import maindoctor from "../../../assets/images/ourdoctors/maindoctor.webp";
import phoneIcon from "../../../assets/icons/phone.png";
import locationIcon from "../../../assets/icons/location.png";
import mailIcon from "../../../assets/icons/mail.png";
import instagramIcon from "../../../assets/icons/instagram.png";
import facebookIcon from "../../../assets/icons/facebook.png";
import youtubeIcon from "../../../assets/icons/youtube.png";

// Contact Information
const contactDetails = [
  {
    icon: phoneIcon,
    alt: "Phone",
    content: "+91 9047146123",
  },
  {
    icon: locationIcon,
    alt: "Location",
    content: `B 20, 2nd Cross Rd, Thillai Nagar (West),\nTrichy - 620018`,
  },
  {
    icon: mailIcon,
    alt: "Email",
    content: "sriramakrishnahr@gmail.com",
  },
];

// Social Media Links
const socialLinks = [
  {
    icon: instagramIcon,
    alt: "Instagram",
    url: "https://www.instagram.com/s_r_s_hospital/",
  },
  {
    icon: facebookIcon,
    alt: "Facebook",
    url: "https://www.facebook.com/profile.php?id=61554146246375",
  },
  {
    icon: youtubeIcon,
    alt: "YouTube",
    url: "https://www.youtube.com/@SRSHTrichy",
  },
];

const Maindoctor = () => {
  return (
    <div className="w-full flex justify-center shadow-lg bg-pink-100 py-8 sm:py-10 md:py-12 px-4 md:px-0">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row gap-10 md:gap-16">
        {/* Doctor Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={maindoctor}
            alt="Doctor"
            className="w-full max-w-md sm:max-w-sm md:max-w-full md:max-h-[80vh] object-contain rounded-xl md:rounded-3xl"
          />
        </div>

        {/* Info Section */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          {/* Title */}
          <div className="flex flex-col gap-3">
            <p className="text-lg sm:text-xl font-semibold">
              Sri Ramakrishna Specialty Hospital
            </p>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-800">
              Dr. M. S. VIJAYANAND
            </h1>
            <p className="text-sm sm:text-base md:text-lg mt-2 leading-relaxed text-gray-700">
              MBBS, MS (General Surgery), MCh (Surgical Gastroenterology/GI
              Surgery), F.M.A.S., F.A.L.S., trained in IVIS (Seoul)
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4 mt-4">
            {contactDetails.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <img
                  src={item.icon}
                  alt={item.alt}
                  className={`h-6 w-6 sm:h-7 sm:w-7 object-contain ${item.alt === "Location" ? "mt-1" : ""
                    }`}
                />
                <p className="text-sm sm:text-base md:text-lg whitespace-pre-line">
                  {item.content}
                </p>
              </div>
            ))}

            {/* Social Media */}
            <div className="flex md:justify-start justify-center pt-2">
              <div className="flex gap-5 items-center">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.alt}
                  >
                    <img
                      src={link.icon}
                      alt={link.alt}
                      className="h-8 w-8 sm:h-9 sm:w-9 hover:opacity-80 transition"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maindoctor;
