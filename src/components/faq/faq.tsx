
import React from 'react';
import type { CollapseProps } from 'antd';
import { Collapse, ConfigProvider, theme } from 'antd';
import type { CSSProperties } from 'react';
import bg from "/public/bg/dark-bg.webp";

// Define AccordionProps interface
interface AccordionProps {
  label: string;
  children: string;
  link?: string;
}


const items:(panelStyle: CSSProperties) => CollapseProps['items'] = (panelStyle) => [
  {
    key: '1',
    label: "What is Gamic and how does the app work?",
    children: "Gamic is a community chat app for individuals, gamers, creators, and blockchain enthusiasts. The app works in a lot of ways, it allows you to organize and curate conversations in a community and it has a cryptocurrency wallet for securely storing your crypto. To find out all the magical things about Gamic, check out the Gamic Twitter page here.",
    style: panelStyle,


  },
{
  key: '2',

    label: "What are GG Points and how do I get them?",
    children: "GG points are experience points awarded to you for daily usage of the app, you get rewarded GG points for multiple activities. To know how to earn GG points, go to the \"GG Reward\" section on your profile.",
    style: panelStyle,

  },
{
  key: '3',
    label: "When will I be able to withdraw my GG Points?",
    children: "In the question of withdrawal, Let it be known that  GG points are for use in the Gamic ecosystem and if there will be any conversion it will be announced in the future, follow us on Twitter for such updates in the future.\n",
    style: panelStyle,

  },
{
  key: '4',
    label: "Why don't I receive my daily login rewards?",
    children: "The daily login rewards have been updated to only be available on the app which you can now download from your phone's app store.",
    style: panelStyle,

  },
{
  key: '5',
    label: "Is my Gamic username different from my Gamic ID?",
    children: "Yes, your \"Gamic username\" is the preferred moniker you chose to be seen as on the app whereas your \"Gamic ID\" is your unique user identification number.",
    style: panelStyle,

},
{
  key: '6',
    label: "Why didn't I receive the GG points for referrals?\n",
    children: "After sharing your referral link, you get rewarded GG points when your friends verify their registered email addresses.\n",
    style: panelStyle,

},
{
  key: '7',
    label: "How can I download the Gamic App?",
    children: "The Gamic mobile app is available for download for both Android and iOS, stay connected on the Go",
    style: panelStyle,

},
{
  key: '8',
    label: "How do I get my referral link?",
    children: "Your referral link is generated when you click the invite button in any space you are in on the Gamic app.",
    style: panelStyle,

},
{
  key: '9',
    label: "Why didn't I receive the GG points for referrals?\n",
    children: "After sharing your referral link, you get rewarded GG points when your friends verify their registered email addresses.\n",
    style: panelStyle,

},
{
  key: '10',
    label: "How do I get access to community rooms?\n",
    children: "Once you join a community, you might be required to visit the access channel to get roles that give access to rooms. You can also message the admins of the community to manually add you to rooms.\n",
    style: panelStyle,

},
{
  key: '11',
    label: "Is the Gamic wallet safe for transactions?",
    children: "The Gamic wallet is a non-custodial MPC wallet which makes it impossible for anyone to access your wallet. The wallet is also secured with your password.",
    style: panelStyle,
},
{
  key: '12',
    label: "Is the platform available in all countries?\n",
    children: "Yes, the Gamic app is available in all countries, stay connected with your friends no matter where they are in the world.\n",
    style: panelStyle,

},
{
  key: '13',
    label: "How do I report bugs on the app?.\n",
    children: "To report bugs found on the app, join the GamicHQ Support community. Send full description of bug to the bug channel as our admins are readily available to respond.\n",
    style: panelStyle,

}
];
const panelStyle: React.CSSProperties = {
  marginBottom: 24,
  padding:4,
  color: 'white',
  borderRadius: 10,
  border: 'none',
  WebkitTextFillColor: 'white',
  backgroundColor: "rgba(24, 24, 24, 0.5)",
  fontSize: 18,
  fontFamily:"Avenir-Medium",

};

const Faq: React.FC = () => (

  <div>
    <div  style={{
       backgroundImage: `url(${bg.src})`,
       backgroundPosition: "center",
       backgroundRepeat: "no-repeat",
       backgroundSize: "cover",
      }} className='pt-40  h-96 relative p-6'>
      <h1 className='text-3xl font-bold text-center mb-10 font-[Avenir-Heavy]'>Top Questions About Gamic</h1>
      <p className='text-xl font-bold text-center mb-10  text-gray-400'>Need something cleared up? Here are most of our frequently asked questions</p>
    </div>
  <div className='w-full lg:w-1/2 m-auto text-white py-8 p-4 lg:p-0 '>
   
   <Collapse accordion items={items(panelStyle)} ghost style={{ color:'white'}}  />
  </div>
  </div>
);

export default Faq;