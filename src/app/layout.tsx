import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "hover.css/css/hover-min.css"; // Add this line to import hover.css from node_modules
import Head from 'next/head';



export const metadata: Metadata = {
  title: "Gamic - Decentralised Community. Chat, Airdrop & Wallet",
  description: "Gamic is a decentralized community chat application for friends, gamers, creators, and blockchain enthusiasts.",
  keywords: "Gamic, Web3, Web2, AI, Community, ethereum, Wallet, messaging, Gaming, HangOut, Threads, Plat To Earn, NFT Gaming, Earn money playing games, make money online, Rewards, Guild, Africa Gaming, Blockchain Gaming, Cryptocurrency Wallet, Metaverse, clan, MPC, non-custodial, decentralized, swap, tokens, Roles, chat, decentralized social media, Airdrop, Smart Contracts, DeFi,Cryptocurrency Exchange,Gaming Community,Crypto Gaming,Play-to-Earn Gaming,Crypto Rewards,Crypto Tokens,Blockchain Technology,Crypto Investment,Crypto Trading, Crypto Mining,Cryptocurrency Investment, Digital Assets, Crypto Wallets, Social Networking, Community Building, Community Management, Community Engagement, Online Communities, Social Media Marketing, User Engagement, User Acquisition, User Retention, In-Game Economy, Virtual Currency, NFT Marketplace, Digital Collectibles, Digital Art, Crypto Art, Online Marketplaces, Blockchain-based Marketplaces, Decentralized Marketplaces,P2P Trading, Open-Source, Web3 Integration, Tokenization, DApps, Decentralized Applications, DAOs, Decentralized Autonomous Organizations"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
          <Head>
        <link rel="preload" as="image" href="/icons/play.svg" />
        <link rel="preload" as="image" href="/icons/ios.svg" />

      </Head>
      <body >
        <div className="overflow-x-hidden">
          <Header />
       
        <div>{children}</div>
        <Footer/> 
        </div>
      </body>
    </html>
  );
}
