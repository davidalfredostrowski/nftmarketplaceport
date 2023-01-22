import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navigation from './Navbar';
//import Home from './Home.js'
//import Create from './Create.js'
//import MyListedItems from './MyListedItems.js'
//import MyPurchases from './MyPurchases.js'
//import MarketplaceAbi from '../contractsData/Marketplace.json'
//import MarketplaceAddress from '../contractsData/Marketplace-address.json'
import React, { Component } from 'react'
import Web3 from 'web3'
//import NFTAbi from '../contractsData/NFT.json'
import NFTAbi from './NFT.json'
//import NFTAddress from '../contractsData/NFT-address.json'
import { useState } from 'react'
import { ethers } from "ethers"
import { Spinner } from 'react-bootstrap'

import { create } from "ipfs-http-client";
import './App.css';
import { Buffer } from 'buffer';
//");

const XXXXXXXXI = 'XXXXXXXXXX';   //(Step 3. Place the
const XXXXXXXXXx = 'XXXXXXXXXX';  //(Step 4. Place the 

const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');


//const ipfsClient = require("ipfs-http-client")
const client  = create({
  host: "ipfs.infura.io",
   port: 5001,
   protocol: "https",
   apiPath: "/api/v0",
   headers: {
     authorization: auth,
   },
  });

//  const [fileUrl, updateFileUrl] = useState(``)
class App extends Component {

function App() {
  const [fileUrl, updateFileUrl] = useState(``)

        state = { votes: '' }
    componentWillMount(){
        this.loadBlockchainData()
    }

    async loadBlockchainData(){

        const web3 = new Web3(new Web3.providers.HttpProvider("http://ec2-35-83-252-109.us-west-2.compute.amazonaws.com::8545"))

        this.setState( { web3 } )

      const accounts  = await web3.eth.getAccounts()
        console.log(accounts)

        web3.eth.getAccounts().then((f) => {
            account = f[0];
        })
        console.log("account")
        console.log(account)
        const networkId = await web3.eth.net.getId();
        console.log("networkId");
        console.log(networkId);
        this.setState( { account : account })
        let jsonData = require('./NFT.json');
        var networkKey =  Object.keys(jsonData['networks'])[Object.keys(jsonData.networks).length-1]
        console.log(networkKey)
        console.log(jsonData['networks'][networkKey]["address"] )
        console.log("get ID based solution")
        console.log(networkId)
        // error ? copy over the updated Voting.json from bulid/contract
        console.log(jsonData['networks'][networkId]["address"] )
        //const contract = new web3.eth.Contract(VOTING_ABI);

        contract.options.address = jsonData['networks'][networkId]["address"]
        this.setState( { contract })
// mint here


            const candidates = {"Johnny": "candidate-1", "Amber": "candidate-2"}
        await contract.methods.totalVotesFor(web3.utils.asciiToHex('Johnny')).call(console.log)

        }

    constructor(props){
        super(props)
        this.state = {
            account: '',
            loading: true
        }

            console.log("constructor")
    }

  async uploadToIPFS(event) {




//        setImage(`https://ipfs.infura.io/ipfs/${result.path}`)
      } catch (error){
        console.log("ipfs image upload error: ", error)
      }
}}

  async createNFT()  {
 var image = "daveo"
var price = 1
          var name = "david"
          var description = "a test"


          if (!image || !price || !name || !description) return
    try{
      const result = await client.add(JSON.stringify({image, price, name, description}))
      mintThenList(result)
    } catch(error) {
      console.log("ipfs uri upload error: ", error)
    }
  }


  async mintThenList(result){
    const uri = `https://ipfs.infura.io/ipfs/${result.path}`
    // mint nft
    await(await nft.mint(uri)).wait()
    // get tokenId of new nft
//    const id = await nft.tokenCount()
    // approve marketplace to spend nft


   await(await nft.setApprovalForAll(marketplace.address, true)).wait()
    // add nft to marketplace
//    const listingPrice = ethers.utils.parseEther(price.toString())
//    await(await marketplace.makeItem(nft.address, id, listingPrice)).wait()
  }



render(){
  return (
        <>
                <div>
                    <button onClick={this.uploadToIPFS}> uploadToIPFS </button>
                    <button onClick={this.createNFT}> createNFT</button>
                </div>
        </>
  );
}


}
      
export default App;
~
            
