import maindoctor from "../../../assets/images/ourdoctors/maindoctor.webp";
import phone from "../../../assets/icons/phone.png";
import location from "../../../assets/icons/location.png";
import mail from "../../../assets/icons/mail.png";
import instagram from "../../../assets/icons/instagram.png";
import facebook from "../../../assets/icons/facebook.png";
import youtube from "../../../assets/icons/youtube.png";

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

        {/* Info */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <p className="text-lg sm:text-xl font-semibold">
              Sri Ramakrishna Specialty Hospital
            </p>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-800">
              DR.M.S.VIJAYANAND
            </h1>
            <p className="text-sm sm:text-base md:text-lg mt-2 leading-relaxed text-gray-700">
              MBBS, MS (General Surgery), MCh (Surgical Gastroenterology/GI
              Surgery) Memberships, F.M.A.S. (Fellowship in Minimal Access
              Surgery), F.A.L.S. (Fellowship in Advanced Laparoscopic Surgery),
              trained in IVIS (Seoul)
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4 mt-4">
            {["+91 9047146123", "+91 9087006067", "+91 9047041111"].map(
              (number, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 text-sm sm:text-base md:text-lg"
                >
                  <img
                    src={phone}
                    alt="Phone"
                    className="h-6 w-6 sm:h-7 sm:w-7 object-contain"
                  />
                  <span>{number}</span>
                </div>
              )
            )}

            <div className="flex items-start gap-3">
              <img
                src={location}
                alt="Location"
                className="h-7 w-7 object-contain mt-1"
              />
              <p className="text-sm sm:text-base md:text-lg whitespace-pre-line">
                B 20, 2nd Cross Rd, Thillai Nagar (West),
                {"\n"}Trichy - 620018
              </p>
            </div>

            <div className="flex items-start gap-3">
              <img src={mail} alt="mail" className="h-6 w-6 object-contain" />
              <p className="text-sm sm:text-base md:text-lg">
                sriramakrishnahr@gmail.com
              </p>
            </div>

            {/* Social Media */}
            <div className="flex md:justify-start justify-center pt-2">
              <div className="flex gap-5 items-center">
                <img src={instagram} className="h-8 w-8 sm:h-9 sm:w-9" />
                <img src={facebook} className="h-8 w-8 sm:h-9 sm:w-9" />
                <img src={youtube} className="h-8 w-8 sm:h-9 sm:w-9" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maindoctor;
