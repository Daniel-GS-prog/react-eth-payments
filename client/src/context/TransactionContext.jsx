import React, {useEffect, useState} from 'react';
// const ethers = require('ethers');
// import {ethers} from 'ethers';



import {contractABI, contractAddress} from '../utils/constants';

export const TransactionContext = React.createContext();

const {ethereum} = window;

const getEthereumContract = () => {
    // const ethers = require('ethers');
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);

    return transactionContract;
}

// to pass all infomration inside this function to all other elements
// of the application.. Implementation in the main.jsx
export const TransactionProvider = ({children}) => {

        //states:
        // passing the current account to the components.
        const [currentAccount, setCurrentAccount] = useState([]);

        //getting the data from the transactions.jsx.
        const [formData, setFormData] = useState({addressTo: '', amount: ''});

        // loggin to console the state of the transaction.
        const [isLoading, setIsLoading] = useState(false);

        const handleChange = (e, name) => {
            setFormData((prevState) => ({ ...prevState, [name]: e.target.value}));
        }


    const checkIfWalletIsConnected = async () => {

        try {
             if(!ethereum) return alert("Install Metamask");

            const accounts = await ethereum.request({method: 'eth_accounts'});

            if(accounts.length){
                setCurrentAccount(accounts[0]);
            }else{
                console.log('No accounts found');
            }
        } catch (error) {

            console.log(error);
            
        }

    }

    // function to request accountand set the first account as the one to 
     // perform operations with
    const connectWallet = async () => {
        try {
            if(!ethereum) return alert('Install Metamask');
            
            const accounts = await ethereum.request({method: 'eth_requestAccounts'});

            setCurrentAccount(accounts[0]);
        } catch (error) {
            console.log(error);
            
            
        }
    }
    // function to send transaction with out smart contract.
    // getting data from Transactions.jsx
    const sendTransaction = async () => {
        try {
            if(!ethereum) return alert('Install Metamask');

            const {addressTo, amount} = formData;

            // getting the contract information
            const transactionContract = getEthereumContract();

            const parsedAmount = ethers.utils.parseEther(amount);

            await ethereum.request({
                method: 'eth_sendTransaction',
                    params: [{
                        from: currentAccount,
                        to:addressTo,
                        gas:'0x5208',
                        value: parsedAmount._hex,
                    }]
            });
            // calling our contract
            const transactionHash = await transactionContract.addToBlockchain(addressTo, parsedAmount);
           
            // loading the transaction hash and the state of the transaction to the console.
           setIsLoading (true);
           console.log(`Loading - ${transactionHash.hash}`);
           await transactionHash.wait();
           setIsLoading(false);
           console.log(`Success - ${transactionHash.hash}`);
            
        } catch (error) {
            console.log(error);
            
            
        
    }}

    useEffect(() => {
        checkIfWalletIsConnected();
    }, []);


    return (
        <TransactionContext.Provider value={{connectWallet, currentAccount, formData, setFormData, handleChange, sendTransaction, isLoading}}>
            {children}
        </TransactionContext.Provider>
    )
}