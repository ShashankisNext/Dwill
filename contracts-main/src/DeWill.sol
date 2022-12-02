// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "./Ownable.sol";
import "./ERC20/ERC20.sol";

contract DeWill is Ownable, ERC20 {

    
    
    error CanNotSend(address indexed receiver);

    mapping(address=>mapping(address=>bool)) beneficiary;
    mapping(address=>uint256) userNonce;
    mapping(address=>uint256) tempNonce;


    constructor(){}


    function addRelationStatus(address _adr, bool _bool) public onlyOwner{
        beneficiary[msg.sender][_adr] = _bool;
    }

    function setDeadlock(  address receiver, uint256 amount, uint256 deadline ){} // This function stores amount and address of the receiver 

    
    function giveApprovalToThisSmartContract() onlyOwner {}      // This function gives approval to address(this) to carry on future transactions is deadlock is triggered

    function updateDeadlock(address _user) public onlyOwner {}                    // This function is called whenever we get the info that the user has done a transaction
    

    function transferAsset()        // This function is exercised whenever deadlock mechanism is triggered
                                    



    



    

}
