import { BsTwitter, BsLinkedin, BsGithub, BsFileEarmarkPdfFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { images } from '../constants'
import { SiHashnode } from "react-icons/si";

const SocialMedia = () => {
    return (
        <div className='app__social'>
            <a href='https://devdotun.hashnode.dev/' target='blank'>
            <SiHashnode />
            </a>
            <a href='https://x.com/Devdotun' target='blank'>
                <BsTwitter />
            </a>
            <a href='https://www.linkedin.com/in/abdul-qawi-laniyan-173355248/' target='blank'>
                <BsLinkedin />
            </a>
            <a href='https://github.com/Oladotunlaniyan' target='blank'>
                <BsGithub />
            </a>
            <a href="mailto: oladotunlaniyan@gmail.com">
                <MdEmail />
            </a>
            <a href={images.resume} target='_blank' rel="noreferrer">
                <BsFileEarmarkPdfFill />
            </a>
        </div>
    )
}

export default SocialMedia