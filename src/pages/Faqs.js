import React, { Component } from 'react'
import Navbar from '../components/Navbar';
import News from '../components/News';
import Footer from '../components/Footer';

import { Accordion, Icon } from 'semantic-ui-react'

export default class Faqs extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <>
        <section className="faqs-container">
        <section className="faqs-header">
        <Navbar />
        <section>
          <h1>Frequently Asked Questions</h1>
          <p>Lets help you get a full understanging of digital currency and current trends</p>
        </section>
        </section>
        
        <section className="accordion-container">
        <section >
        <h2>General Cryptocurrency Questions</h2>
        </section>
        <Accordion fluid styled>
          <Accordion.Title className="general-faqs-container"
            active={activeIndex === 0}
            index={0}
            onClick={this.handleClick}
          >
            <Icon name='dropdown' />
            What is blockchain technology?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <p>
              The Bitcoin Network is the first successful implementation of blockchain technology.
            </p>   
            <p>
              The term "blockchain technology" typically refers to the transparent, trustless, publicly accessible ledger that allows us to securely transfer the ownership of units of value using public key encryption and proof of work methods.
            </p>
            <p>
              The technology uses decentralized consensus to maintain the network, which means it is not centrally controlled by a bank, corporation, or government. In fact, the larger the network grows and becomes increasingly decentralized, the more secure it becomes. 
            </p>
            <p>
              The potential for blockchain technology is not limited to bitcoin. As such, it has gained a lot of attention in a variety of industries including: financial services, charities and nonprofits, the arts, and e-commerce.
            </p>
          </Accordion.Content>

          <Accordion.Title
            active={activeIndex === 1}
            index={1}
            onClick={this.handleClick}
          >
            <Icon name='dropdown' />
            Your Wallet & Its Master Seed
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
            <p>
              Our wallet is built on an HD (or hierarchical deterministic) framework, which is the industry standard for bitcoin address generation and management. Each public address your wallet generates stems from your wallet's xPub (or Extended Public Key). Once your public address receives an incoming payment, a new address will automatically be generated and display when you click on receive.
            </p>
            <p>
              If you use the same address each time you receive funds, it becomes easy for anyone to track your entire payment history. This method of address generation improves privacy by automatically presenting you with a new address when you’re expecting payment.
            </p>
            <p>
              Advanced Users: Our wallet implements BIP44 to generate accounts and addresses, and the recovery mnemonic/seed (present in legacy wallets created in 2016 and prior) implements BIP39. The seed is compatible with other BIP44/BIP39 bitcoin wallets.
            </p>
          </Accordion.Content>

          <Accordion.Title
            active={activeIndex === 2}
            index={2}
            onClick={this.handleClick}
          >
            <Icon name='dropdown' />
            Transaction fees
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 2}>
            <p>
              Every cryptocurrency transaction must be added to the blockchain, the official public ledger of all completed transactions, in order to be considered a successful and valid transfer. The work of validating transactions and adding them to the blockchain is done by miners, which are powerful computers that make up a portion of the network and confirm its transactions. Miners spend vast amounts of computing power and energy doing this for a financial reward: with every block (a collection of transactions) added to the blockchain comes a bounty called a block reward, as well as all fees sent with the transactions that were confirmed and included in the block.
            </p>
            <p>
              For this reason, miners have a financial incentive to prioritize the validation of transactions that include a higher fee. For someone looking to send funds and get a quick confirmation, the appropriate fee to include depends on the cryptocurrency being sent and can vary greatly, depending on a number of factors, such as transaction size and network conditions.
            </p>
            <p>
              Your Blockchain wallet will automatically calculate the appropriate fee for sending your chosen cryptocurrency. The fee for sending ether is static (you can view the fee for sending ether by clicking “Send” and selecting Ether as the currency), while the fees for sending bitcoin, bitcoin cash, and stellar are dynamic and will be calculated by your wallet after you input the amount you want to send.
            </p>
          </Accordion.Content>


          <Accordion.Title
            active={activeIndex === 3}
            index={3}
            onClick={this.handleClick}
          >
            <Icon name='dropdown' />
            Understanding the xPub and address generation
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 3}>
            <p>
              For maximum privacy, our wallet generates new bitcoin and bitcoin cash addresses every time funds are received. Our wallet is built on an HD (or hierarchical deterministic) framework, a privacy-centered method for address generation and management. Each public address your wallet generates stems from your wallet's xPub (or Extended Public Key). Each time you receive funds, your wallet will use the xPub to generate a new receiving address.*
            </p>

            <p>
              When you create a new sub-wallet (or wallet category) in the Addresses section of your wallet Settings, you generate a new xPub for your wallet to use for address generation. By default, clicking Request will fetch a new address from the xPub of your default sub-wallet (for all new wallets, this is My Bitcoin Wallet, but this can be changed within Settings/Addresses). When you choose a different sub-wallet from the Receive To: dropdown menu, your wallet will generate a new address from the xPub of that sub-wallet.
            </p>

            <p>
              You only need to back up your wallet once; all of your sub-wallets are backed up by a single 12-word recovery phrase. Since the recovery phrase is the seed from which every xPub’s corresponding xPriv (extended private key) is derived, all of the private keys of all addresses derived within the wallet are contained within it. Read more about public and private keys here.
            </p>

            <p>
              We strongly advise against showing your xPub to third parties. Knowledge of the xPub can enable someone to track your wallet’s entire payment history and possibly disrupt access to your funds. If you are having an issue and reach out to us by submitting a ticket, on rare occasion, our support team may ask for your xPub in order to diagnose your issue. Please note that this is the only channel by which we would ask for this information. We strongly recommend never revealing your xPub on any public channel, including social media, or to anyone else.
            </p>        

            <p>
              While bitcoin and bitcoin cash addresses, once generated, never become invalid and can be used to receive multiple payments, we recommend using a new address for each transaction. If you use the same address each time you receive funds, it becomes easy for anyone to track your entire payment history.
            </p>
          </Accordion.Content>

          <Accordion.Title
            active={activeIndex === 4}
            index={4}
            onClick={this.handleClick}
          >
            <Icon name='dropdown' />
            Public and private keys
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 4}>
            <p>
             Bitcoin, as well as all other major cryptocurrencies that came after it, is built upon public-key cryptography, a cryptographic system that uses pairs of keys: public keys, which are publicly known and essential for identification, and private keys, which are kept secret and are used for authentication and encryption.
            </p> 

            <p>
              Major cryptocurrencies like Bitcoin, Ethereum, and Bitcoin Cash function using three fundamental pieces of information: the address, associated with a balance and used for sending and receiving funds, and the address’ corresponding public and private keys. The generation of a bitcoin address begins with the generation of a private key. From there, its corresponding public key can be derived using a known algorithm. The address, which can then be used in transactions, is a shorter, representative form of the public key.
            </p>

            <p>
              The private key is what grants a cryptocurrency user ownership of the funds on a given address. The Blockchain wallet automatically generates and stores private keys for you. When you send from a Blockchain wallet, the software signs the transaction with your private key (without actually disclosing it), which indicates to the entire network that you have the authority to transfer the funds on the address you’re sending from.
            </p>

            <p>
              The security of this system comes from the one-way street that is getting from the private key to the public address. It is not possible to derive the public key from the address; likewise, it is impossible to derive the private key from the public key. In the Blockchain.com Wallet, your 12-word recovery phrase is a seed of all the private keys of all the addresses generated within the wallet. This is what allows you to restore access to your funds even if you lose access to your original wallet. Using the backup phrase will copy over your private keys to a new wallet, essentially creating an exact replica of your original wallet, complete with used addresses and transaction history.
            </p>
          </Accordion.Content>

          <Accordion.Title
            active={activeIndex === 5}
            index={5}
            onClick={this.handleClick}
          >
            <Icon name='dropdown' />
            Change addresses
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 5}>
            <p>
             When you view your expanded transaction details, you may see addresses under “Received By” called Change Addresses. To understand change addresses, first we’ll need to explain how cryptocurrency transactions work. Then, we’ll get into change addresses and their role in the transaction process.
            </p>

            <p>
              Every cryptocurrency transaction is made up of at least one input and output. Inputs and outputs are how the breakdown or denomination of cryptocurrency happens as funds are transacted across the network. Inputs are the existing funds you use when sending a transaction. When those funds come out on the receiving end of a transaction, they are now called outputs. From one transaction to the next, each input is the output of a previous transaction.
            </p>

            <p>
              To explain inputs and outputs a bit more, let’s use a currency like US dollars as an example. Say you buy something for $20 and pay the the seller with a $20 bill. Later that day, the seller who accepted your $20 leaves work to go buy some dinner. He pays the restaurant with the same $20 that you gave him. Going back to your transaction, the $20 was your output and the seller’s input. In the dinner transaction, the $20 was the merchant’s output and the restaurant’s input.
            </p>

            <p>
              Now, what if your purchase doesn’t cost $20, but it costs $15? Since all you have is one $20 bill, you can’t pay exactly $15, right? In that case, you’d pay with the $20 bill, and the seller will give you a $5 bill as your change.
            </p>

            <p>
              Switching gears back to cryptocurrency, change plays a similar role like we explained with the $20 used for a $15 purchase. When you use an input that is worth more than the transaction cost, the extra funds are sent back to you as change through a newly generated address (as opposed to you receiving it to the same address you sent from). This is called your change address.
            </p>

            <p>
              When you send funds, your change addresses are generated by your wallet, but you won’t see separate transactions in your transaction history for receiving your change; it’s included in the original sending transactions as a second output. You can view your change address for any given outgoing transaction by clicking on your transaction history. Then, expand the specific transaction to view extra details.
            </p>

            <p>
              Of course, there are times when your transaction may not need a change address. If you end up spending the exact balance of an input, then you won’t need change (just like how, if you bought something from a seller for $20, then the seller wouldn’t have to give you change for your $20 bill).
            </p>

            <p>
              To sum all of this up, change addresses are an aspect of cryptocurrency that allow users to transact using exact amounts, even if the transaction isn't the total amount of the output being spent. It's similar to when people transact with cash. If the buyer pays with a $50 bill, but the transaction cost $35, they would receive $15 in change back. In cryptocurrency, the difference between the total amount paid and the total transaction cost is sent back to the user as change using a change address. 
            </p>
          </Accordion.Content>

        <section>
          <h2>Questions About Bitcoin</h2>
        

        <Accordion.Title
            active={activeIndex === 6}
            index={6}
            onClick={this.handleClick}
          >
            <Icon name='dropdown' />
            What is Bitcoin?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 6}>
            <p>
             Bitcoin can often refer to two things. First, the Bitcoin network that keeps track of our transactions and balances, and second, the currency that we use as the unit of value when we transact. We'll cover both here.
            </p> 

              <h3>The Bitcoin Network</h3>

            <p>
              Bitcoin's payment network (also called the bitcoin blockchain) is what makes it possible for us to transact with one another. The network uses distributed consensus to verify and confirm transactions, and consensus is reached via a large global network of high-performance computers (called miners) running the bitcoin software.
            </p>

            <p>
              Whenever someone sends a transaction it is broadcast instantly to the network and verified by the miners. Miners are constantly working to confirm individual transactions and include them in the next block of transactions in the chain. Once a new block is verified, all the transactions within it are permanently recorded on the blockchain. Rewards are paid out in bitcoin to miners who confirm transactions and verify the next block as a way to incentivize productivity on the network.
            </p> 

            <p>
              Each party who participates in the mining process has an identical up-to-date copy of the blockchain or public ledger, which is a record of all the transactions in bitcoin history. Each party's copy of the ledger is updated every time a new block is found.
            </p>  

              <h3>The Currency</h3>

            <p>
              The unit of value that we send and receive on the Bitcoin network is also referred to as bitcoin, or bitcoins. Bitcoin is completely digital, meaning we can't physically hold it in our hand. It's also portable, divisible, fungible, and irreversible.
            </p>
          </Accordion.Content>

        <Accordion.Title
            active={activeIndex === 7}
            index={7}
            onClick={this.handleClick}
          >
            <Icon name='dropdown' />
            How can I look up a transaction on the blockchain? 
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 7}>
            <p>
             Block Explorers provide a visually appealing and intuitive way to navigate a  cryptocurrency's blockchain. Our Block Explorer launched in August 2011. It began as a way for anyone to study bitcoin transactions, along with a variety of helpful charts and statistics about activity on the network. 
            </p>

            <p>
             To look up a bitcoin transaction, users can visit https://www.blockchain.com/explorer and use the search bar on the upper right to learn more about a particular bitcoin address, transaction hash, or block number by entering it in the search field.
            </p>
          </Accordion.Content>

          <Accordion.Title
            active={activeIndex === 8}
            index={8}
            onClick={this.handleClick}
          >
            <Icon name='dropdown' />
            Anatomy of a Bitcoin Transaction
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 8}>
            <p>
              Transactions are the most important aspect of the Bitcoin network. Everything else is built and designed to ensure transactions can be effectively broadcast, validated, and confirmed. Transactions are made up of inputs and outputs; inputs are what go into a transaction (roughly speaking, inputs make up what is being sent), and outputs are what come out (making up what is being received). The outputs of one transaction can then be spent as the inputs of another one. To read a more in-depth explanation of inputs and outputs, visit our article on change addresses.
            </p>

            <p>
              Nodes track spendable transaction outputs, or outputs that have not yet been used in another, subsequent transaction. These are known as unspent transaction outputs (UTXOs). When you view your transaction on the Blockchain.com Explorer, you will see the transaction inputs on the left and the outputs on the right. Each output will have either a red or a green icon next to it. Red means the output has already been spent in a subsequent transaction, and cannot be spent again. Green means the output is a UTXO, and is available for spending. Hover over the icon to see if an output is spent or unspent.
            </p>

            <p>
              The only exception to the output and input chain is the coinbase transaction, which is the first transaction in every block. This transaction creates brand-new bitcoin by paying out the block reward to the miner that added the block to the blockchain. The input of this transaction is not a UTXO from a previous transaction, but rather a special type of input called the coinbase. This is also the process by which the bitcoin money supply increases until it hits the cap of 21 million bitcoin.
            </p>

            <p>
              Although most transactions are structured as payments to addresses (based on a script called Pay-to-Public-Key-Hash, or P2PKH), bitcoin transactions can use other types of scripts as well, and include additional data besides addresses and amounts. On the Blockchain.com Explorer, these will be listed at the bottom of the transaction page under the Outputs header.
            </p>
          </Accordion.Content>

          <Accordion.Title
            active={activeIndex === 9}
            index={9}
            onClick={this.handleClick}
          >
            <Icon name='dropdown' />
            Your Recovery Phrase - The Failsafe
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 9}>
            <p>
              Bitcoin is an open source project, so anyone can submit changes to the protocol via a Bitcoin Improvement Proposal, or simply BIP. BIPs are numbered, and each BIP represents a proposed change to the bitcoin protocol.
            </p>

            <p>
              When it comes to creating and backing up your wallet, Blockchain uses the current industry standard. Our wallet implements BIP44 to generate accounts and addresses, and BIP39 to generate the recovery mnemonic phrase (or seed, as it is also called). The mnemonic phrase generated in your Blockchain wallet is compatible with other bitcoin wallets that implement BIP44/BIP39. Because of the way these BIPs work you only need to backup your wallet once. Once the wallet is backed up it is backed up forever, regardless of how many funds you send or receive over time.
            </p>

            <p>
              If you are interested in learning more about each of these BIPs then we encourage you to read the formal documentation available on Github:<br/>

              BIP44<br/>

              BIP39
              
            </p>
            
            <p>
              Our Security Walkthrough covers the backup process in more detail with step-by-step directions. If you ever need to restore access to your wallet, click here to use your Backup (recovery) Phrase. 
            </p>
          </Accordion.Content>
          </section>



          <section>
          <h2>Questions About Etherium</h2>
        

        <Accordion.Title
            active={activeIndex === 10}
            index={10}
            onClick={this.handleClick}
          >
            <Icon name='dropdown' />
            How is it different than bitcoin?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 10}>
            <p>
             Bitcoin was a pioneer in the blockchain revolution by establishing a public, permissionless, distributed ledger system to validate, store, and replicate transaction data on computers all over the world. Ethereum expands these concepts by harnessing that same block chain capability for computer code. While Bitcoin offers one particular application of block chain technology, a peer-to-peer electronic cash system, Ethereum allows for scripts of code to be run as a global computational network. This concept has a wide range of potential applications such as voting, global supply chains, medical records, the financial system -- the opportunities are endless.
            </p>
          </Accordion.Content>

          <Accordion.Title
            active={activeIndex === 11}
            index={11}
            onClick={this.handleClick}
          >
            <Icon name='dropdown' />
            What is Ethereum?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 11}>
            <p>
             Ethereum is a distributed public blockchain network that focuses on running the programming code of any decentralized application. More simply, it is a platform for sharing information across the globe that cannot be manipulated or changed.
            </p>
          </Accordion.Content>

          <Accordion.Title
            active={activeIndex === 12}
            index={12}
            onClick={this.handleClick}
          >
            <Icon name='dropdown' />
            What is ether?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 12}>
            <p>
             Ether is a decentralized digital currency, also known as ETH. In addition to being a tradeable cryptocurrency, ether powers the Ethereum network by paying for transaction fees and computational services. Ether is paving the way for a more intelligent financial platform.
            </p>
          </Accordion.Content>

          <Accordion.Title
            active={activeIndex === 13}
            index={13}
            onClick={this.handleClick}
          >
            <Icon name='dropdown' />
            Where is the value in Ethereum derived from?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 13}>
            <p>
             Ethereum is useful and valuable because of its ability to have a wide variety of intelligent applications built on top of it, including anything from financial contracts to voting and governance applications. Today, the authentication for these processes can take days or even weeks. With Ethereum, verification is almost instant. As the platform grows, it could continue to change the way we do business and transact on a daily basis. We want to give you the opportunity to start using ether on the Ethereum blockchain now, so you'll be ready for what the future brings.
            </p>
          </Accordion.Content>

          <Accordion.Title
            active={activeIndex === 14}
            index={14}
            onClick={this.handleClick}
          >
            <Icon name='dropdown' />
            What are the fees for sending ether?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 14} container >
            <p>
             While our wallet is entirely free to use, the small fee included in your transaction goes to the miners, who help power the flow of transactions on the Ethereum network. To ensure your transactions confirm consistently and reliably, our wallet will automatically include an appropriate fee based on the level of network traffic at the time. 
            </p>
          </Accordion.Content>
          </section>
        </Accordion>
        </section>
        <News />
        </section>
        <section><Footer /></section>
      </>
    )
  }
}





























