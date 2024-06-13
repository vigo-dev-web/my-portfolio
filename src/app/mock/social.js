import { FaGithub, FaTwitter, FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';
// import SlSocialVkontakte from 'react-icons/sl';
const socialLink = [
   {
      id: '00001',
      name: 'github',
      icon: <FaGithub fontSize="1.7rem" />,
      link: 'https://github.com/vigonin83',
   },
   // {
   //    id: '00003',
   //    name: 'vk',
   //    icon: SlSocialVkontakte,
   //    link: 'https://vk.com/',
   // },
   {
      id: '00004',
      name: 'whatsApp',
      icon: <FaWhatsapp fontSize="1.7rem" />,
      link: 'https://api.whatsapp.com/send?phone=79859374708',
   },
   {
      id: '00005',
      name: 'telegram',
      icon: <FaTelegramPlane fontSize="1.7rem" />,
      link: 'https://t.me/Vigonin83',
   },
];
export default socialLink;