# De-Will

## What problem are we trying to solve

Refer this link to get a know-how of the problem we are trying to solve : : : : https://docs.google.com/document/d/1fQteovk-6yCp8EBWOEOU0lVGwIoC0gEQnG_Y_aqAKj4

## How are we planning to solve the problem aka the Implementation

The full-fledged complete final solution will be more towards the "completely decentralized" spectrum of Web3. 
We would be trying to make every aspect of the Stage-2 solution as decentralized and permissionless as possible.

### Stage1

After clicking on "Connect Metamask", our frontend will get a hold of User's account through the window.ethereum object.

Every user will run his own instance of the DeWill smart contract (check src/DeWill.sol). 
This smart contract will be deployed only during the first interaction of the user with our platform.

Our smart contract contains this bunch of functions :

1) function setDeadlock(  address receiver, address erc20, uint256 amount, uint256 interval ) ::
   This function accepts address of the beneficiary, address of the asset to be transferred,amount to be transferred to him and the interval of time
   after which if no activity is observed from the user, the amount will be transferred.
   
2) function giveApprovalToUs( address token ) ::
   This function accepts address of the token and calls the "approve" method of the token standard and gives approval of a threshold amount to
   address(this)

3) function updateDeadlock(address user) ::
   This function gives latest timestamp of activity of the user.
  
4) function checkIntervalGap() ::
   This function returns true if the the time interval gap has been exceed and would initiate the transfer through the transferAssets function
   
5) function transferAsset() ::
   This function when called by us/beneficiary will first check the checkIntervalGap function to return true and if thats done will initiate the transfer function
   logic.
  
 
 These are the core functions. A lot of helper accessory functions will be defined in a separate periphery contract.
 
## Some bullet points

1) Whatever asset transfer implementation we finally decide to go with, it is the trigger mechanism which matters a lot while designing a truly 
   permissionless protocol. Trigger mechanism to decide how to push checkIntervalData to the blockchain. Currently, there are no getLatestTransactionTimestamp function
   that I know of. Hopefully if something like exists within the blockchain, it would be the best. But if it does not, we might have to move to a less decentralized
   offchain solution. Maybe through Etherscan API? or a custom oracle solution? Need to put a lot of thinking around this.
   
2) If we resort to an offchain solution, Proof-of-Stake consensus on the data uploaded to the blockchain will be the optimal solution. To reward the third party to
   correct data, we might have to come up with a fees solution whereby we reward the Data provider with a less than 1% total asset transfer fees.
   
   
 
 
### Stage2

1) Issue of privacy arises when resorting to third party data service providers. Can we implement a Zero-Knowledge solution here?
2) What if we could convert this into a hyperstructure?
3) What if this becomes a standard and is something implemented on the blockchain from  the infrastructural layer?

