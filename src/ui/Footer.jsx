import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

function Footer() {
  return (
    <footer className="bg-[rgb(1,6,10)] px-10">
      <div className="flex flex-col sm:flex-row justify-between items-center min-h-[80px] py-8 md:max-w-[1220px] mx-auto  mt-36 gap-8">
        <p className="text-white uppercase text-[12.5px] font-semibold tracking-[2px] ">
          &copy; {new Date().getFullYear()} Lawal Ridwan{" "}
        </p>

        <div className="text-white flex flex-col sm:flex-row gap-5 ">
          <p className="text-[13px] font-medium">Connect with me:</p>
          <ul className="flex items-center gap-4 ">
            <li>
              <a
                href="https://github.com/Ridwan-Lawal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="footer-icon" />
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/ridwan-lawal-162284257/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="footer-icon" />
              </a>
            </li>

            <li>
              <a
                href="https://x.com/Ridwan_evd"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter className="footer-icon" />
              </a>
            </li>

            <li>
              <a href="mailto:lawaridwan507@gmail.com">
                <SiGmail className="footer-icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
