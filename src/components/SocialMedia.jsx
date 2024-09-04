import {
  BsTwitter,
  BsLinkedin,
  BsGithub,
  BsFileEarmarkPdfFill,
} from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { images } from "../constants";
import { SiHashnode } from "react-icons/si";

const SocialMedia = () => {
  return (
    <div className="app__social">
      {/* <a href='https://devdotun.hashnode.dev/' target='blank'>
            <SiHashnode />
            </a> */}
      <a href="https://x.com/chu_rill" target="blank">
        <BsTwitter />
      </a>
      <a
        href="https://www.linkedin.com/in/churchill-daniel-b66a752a7/"
        target="blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/Chu-rill" target="blank">
        <BsGithub />
      </a>
      <a href="mailto: churchilldaniel687@gmail.com">
        <MdEmail />
      </a>
      <a href={images.resume} target="_blank" rel="noreferrer">
        <BsFileEarmarkPdfFill />
      </a>
    </div>
  );
};

export default SocialMedia;
