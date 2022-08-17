// SPDX-license-Idnetifier: UNLICENSED

pragma solidity ^0.8.0;


contract Transactions {

    event Transfer(address from, address receiver, uint amount);

// object for each transactions:
    struct TransferStruct{
        address sender;
        address receiver;
        uint amount;
    }

// TransferStruct[] transactions;

function addToBlockchain(address payable receiver, uint amount) public {
    // transactions.push(TransferStruct(msg.sender, receiver, amount));

    emit Transfer(msg.sender, receiver, amount);
}

}