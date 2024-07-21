import { FaGithub, FaWhatsapp, FaTelegramPlane, FaRegEnvelope } from 'react-icons/fa';
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
      id: '00002',
      name: 'whatsApp',
      icon: <FaWhatsapp fontSize="1.85rem" />,
      link: 'https://api.whatsapp.com/send?phone=79859374708',
   },
   {
      id: '00003',
      name: 'telegram',
      icon: <FaTelegramPlane fontSize="1.9rem" />,
      link: 'https://t.me/Vigonin83',
   },
   {
      id: '00004',
      name: 'email',
      icon: <FaRegEnvelope  fontSize="1.9rem" />,
      link: 'mailto:vigonin83@gmail.com',
   },
];
export default socialLink;