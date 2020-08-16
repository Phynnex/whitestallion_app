import React from 'react';
import { Card } from 'semantic-ui-react';
import {Link } from 'react-router-dom';


const News = () => {
  return (
    <>
      <section classname='news-continer'>
        <h1 className='news-header'>Latest News and Trends</h1>
        <section className='news-card'>
        <section className='news-card-1'>
        
        <Link to= "/faqs">
        <Card 
          header='High Fees Make BTC Less Appealing for Remittances in Africa'
          meta='Bitcoin'
          description='Bitcoin trading volumes are on the rise on the African continent despite the ongoing concerns about the high network fees. Data shows peer to peer bitcoin trading platforms recorded spiked growth in volumes starting in April. This was the same time as many countries implemented lockdown measures.

          Anecdotal evidence seems to suggest that Covid-19 related regulations are the reason for the volume growth. This “evidence” is observed in Nigeria, already one of the biggest cryptocurrency markets in the world. Some observers from the country say the struggling economy, as well as the volatile currency, are helping to build momentum.'
        />
        </Link>
        </section>

        <section className='news-card-2'>
        <Link to= "/faqs">
        <Card 
          header='The Onecoin Debacle: Indictments Unsealed, 2 Dead in Mexico, Story Gets Darker'
          meta='ICO'
         description='The Onecoin fiasco is still making headlines these days as a number of alleged money laundering companies were exposed on July 25, two Onecoin leaders were recently killed in Mexico, and the British author Jamie Bartlett revealed a new “Missing Cryptoqueen” episode is coming soon.

          The Bulgaria-based Ponzi scheme Onecoin is making headlines again as a number of new revelations have come to light. The twisted tale continues with a man named Gilbert Armenta who has been accused of co-conspiring with the lawyer Mark Scott to launder hundreds of millions of Onecoin proceeds. Basically, Scott said that he wasn’t aware of the Onecoin funds'
        />
        </Link>
        </section>

        <section className='news-card-3'>
        <Link to= "/faqs">
        <Card 
          header='Russia Developing AI System to Monitor Cryptocurrency Transactions'
          meta='Cryptocurrency'
          description='Russia is reportedly developing a system using artificial intelligence to track and analyze transactions involving cryptocurrencies, such as bitcoin, dash, and monero. The system prototype has already been created and is currently being tested. This news followed the signing of crypto regulation into law by President Vladimir Putin.  
          
          The Russian government is planning a new system to track bitcoin transactions, local media RBC reported Monday, citing a letter to Parshin Maxim Viktorovich, Deputy Minister of Russia’s Digital Development, Communications and Mass Media. The letter, describes a plan for (Rosfinmonitoring) to monitor ccrimes.'
        />
        </Link>
        </section>

        <section className='news-card-4'>
        <Link to="/faqs">
        <Card 
          header='20 Blockchain Surveillance Firms Monitor Crypto Networks'
          meta='Blockchain'
          description='In the early days before 2013-14, bitcoiners and cryptocurrency users didn’t really hear about blockchain surveillance. Nowadays, there’s a large slew of companies offering services like analytics, monitoring, and identifying blockchain codebase vulnerabilities. A number of firms have worked with law enforcement in the U.S. and also have contracts with groups like Europol as well. At the time of publication, there are more than 20 different blockchain intelligence businesses that work within the cryptocurrency ecosystem. Some of them are well known firms like Cyphertrace, Chainalysis, and Elliptic. Other platforms are offered by Alethio, Bison Trails, Blockpit, Blockmonitor, etc.' 
        />
        </Link>
        </section>
      </section>
      </section>
    </>
  );
}

export default News;


