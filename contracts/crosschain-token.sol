// SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.0;

/*
    // https://layerzero.gitbook.io/docs/technical-reference/testnet/testnet-addresses
    Klaytn Baobab   lzEndpointAddress = 0x6aB5Ae6822647046626e83ee6dB8187151E1d5ab
    chainId: 10150  deploymentAddress = 0xe759369136b5103ed21E2Ce618094071bE0cC3D4
 
    Mumbai lzEndpointAddress = 0xf69186dfBa60DdB133E91E9A4B5673624293d8F8
    chainId: 10109  deploymentAddress = 0x389EF6D563036Fe3C88d9aa33876224afE262A75
*/
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@layerzerolabs/solidity-examples/contracts/token/oft/v1/OFTCore.sol";
import "@layerzerolabs/solidity-examples/contracts/token/oft/v1/interfaces/IOFT.sol";

contract CrossChainToken is OFTCore, ERC20, IOFT {

    constructor(address _lzEndpointAddress) ERC20("CrossChainTokens", "CCT") OFTCore(_lzEndpointAddress) Ownable(msg.sender) {
        if (block.chainid == 1001) { // Only mint initial supply on Baobab
            _mint(msg.sender, 1_000_000 * 10 ** decimals());
        }
    }

    function supportsInterface(bytes4 interfaceId) public view virtual override(OFTCore, IERC165) returns (bool) {
        return interfaceId == type(IOFT).interfaceId || interfaceId == type(IERC20).interfaceId || super.supportsInterface(interfaceId);
    }

    function token() public view virtual override returns (address) {
        return address(this);
    }

    function circulatingSupply() public view virtual override returns (uint) {
        return totalSupply();
    }

    function _debitFrom(address _from, uint16, bytes memory, uint _amount) internal virtual override returns(uint) {
        address spender = _msgSender();
        if (_from != spender) _spendAllowance(_from, spender, _amount);
        _burn(_from, _amount);
        return _amount;
    }

    function _creditTo(uint16, address _toAddress, uint _amount) internal virtual override returns(uint) {
        _mint(_toAddress, _amount);
        return _amount;
    }
}