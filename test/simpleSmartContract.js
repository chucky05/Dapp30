const SimpleSmartContract = artifacts.require('SimpleSmartContract');  

contract('SimpleSmartContract', () => {   
	it('Should be deployed', async () => {     
		const simpleSmartContract = await SimpleSmartContract.deployed();     
		assert(simpleSmartContract.address !== '');  
	}); 
}); 
