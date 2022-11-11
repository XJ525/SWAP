import Cherryswap from '../assets/images/swapLogo/Cherryswap.svg'
import Spooky from '../assets/images/swapLogo/Spooky.svg'
import Pangolin from '../assets/images/swapLogo/Pangolin.svg'
import Tomb from '../assets/images/swapLogo/Tomb.svg'
import Dfyn from '../assets/images/swapLogo/Dfyn_Network.svg'
import elk from '../assets/images/swapLogo/elk_color.svg'
import defiswap from '../assets/images/swapLogo/defiswap.svg'

interface CONTRACT {
  [key: string]: {
    name?: string
    FACTORY: string
    ROUTER: string
    INIT_CODE_HASH: string
    Icon: string
  }
}

export const BSC_AGGREGATION: CONTRACT = {
  Pancake: {
    FACTORY: '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73',
    ROUTER: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    INIT_CODE_HASH: '0x00fb7f630766e6a796048ea87d01acd3068e8ff67d078148a3fa3f4a84f69bd5',
    Icon: require('../assets/images/swapLogo/pancake.png')
  },
  Suhsi: {
    FACTORY: '0xc35dadb65012ec5796536bd9864ed8773abc74c4',
    ROUTER: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
    INIT_CODE_HASH: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
    Icon: require('../assets/images/swapLogo/sushi.png')
  },
  EOTC: {
    name: 'Eotcswap V2',
    FACTORY: '0x00877DA81120D37629F1eBce1A4cB8432bBD3788',
    ROUTER: '0xFC4B23ee03cb2947bF063d0CdcF21e25F23aa58D',
    INIT_CODE_HASH: '0x831202ecdb0b250291d1a60e015ef7606497321b8272abf8e3b438cdca2695e6',
    Icon: require('../assets/images/eotc.png')
  },
  Mdex: {
    FACTORY: '0x3CD1C46068dAEa5Ebb0d3f55F6915B10648062B8',
    ROUTER: '0x0384E9ad329396C3A6A401243Ca71633B2bC4333',
    INIT_CODE_HASH: '0x0d994d996174b05cfc7bed897dc1b20b4c458fc8d64fe98bc78b3c64a6b4d093',
    Icon: require('../assets/images/swapLogo/mdex.png')
  },
  Julswap: {
    FACTORY: '0x553990F2CBA90272390f62C5BDb1681fFc899675',
    ROUTER: '0xbd67d157502A23309Db761c41965600c2Ec788b2',
    INIT_CODE_HASH: '0xb1e98e21a5335633815a8cfb3b580071c2e4561c50afd57a8746def9ed890b18',
    Icon: require('../assets/images/swapLogo/Jul.png')
  },
  BakerySwap: {
    FACTORY: '0x01bF7C66c6BD861915CdaaE475042d3c4BaE16A7',
    ROUTER: '0xCDe540d7eAFE93aC5fE6233Bee57E1270D3E330F',
    INIT_CODE_HASH: '0xe2e87433120e32c4738a7d8f3271f3d872cbe16241d67537139158d90bac61d3',
    Icon: require('../assets/images/swapLogo/Bakery.png')
  },
  ApeSwap: {
    FACTORY: '0x0841BD0B734E4F5853f0dD8d7Ea041c241fb0Da6',
    ROUTER: '0xcF0feBd3f17CEf5b47b0cD257aCf6025c5BFf3b7',
    INIT_CODE_HASH: '0xf4ccce374816856d11f00e4069e7cada164065686fbef53c6167a63ec2fd8c5b',
    Icon: require('../assets/images/swapLogo/Ape.png')
  },
  BabySwap: {
    FACTORY: '0x86407bEa2078ea5f5EB5A52B2caA963bC1F889Da',
    ROUTER: '0x8317c460C22A9958c27b4B6403b98d2Ef4E2ad32',
    INIT_CODE_HASH: '0x48c8bec5512d397a5d512fbb7d83d515e7b6d91e9838730bd1aa1b16575da7f5',
    Icon: require('../assets/images/swapLogo/baby.png')
  }
}
export const POLYGON_AGGREGATION: CONTRACT = {
  ApeSwap: {
    FACTORY: '0xCf083Be4164828f00cAE704EC15a36D711491284',
    ROUTER: '0xC0788A3aD43d79aa53B09c2EaCc313A787d1d607',
    INIT_CODE_HASH: '0x511f0f358fe530cda0859ec20becf391718fdf5a329be02f4c95361f3d6a42d8',
    Icon: require('../assets/images/swapLogo/Ape.png')
  },
  QuickSwap: {
    FACTORY: '0x5757371414417b8c6caad45baef941abc7d3ab32',
    ROUTER: '0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff',
    INIT_CODE_HASH: '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f',
    Icon: require('../assets/images/swapLogo/quickswap.png')
  },
  Suhsi: {
    FACTORY: '0xc35dadb65012ec5796536bd9864ed8773abc74c4',
    ROUTER: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
    INIT_CODE_HASH: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
    Icon: require('../assets/images/swapLogo/sushi.png')
  },
  EOTC: {
    name: 'Eotcswap V2',
    FACTORY: '0x015151d9779c07A8E5039F02d6a23186EA4876Bb',
    ROUTER: '0xa47c718E7e3405a852C3759224F8edA88E20018B',
    INIT_CODE_HASH: '0x8f5b0de3ff77e3f4d6539cd371233f258e01de85ec54335eee38954af1d8bec3',
    Icon: require('../assets/images/eotc.png')
  },
  Aura: {
    FACTORY: '0x015DE3ec460869eb5ceAe4224Dc7112ac0a39303',
    ROUTER: '0x09Fd8B8ed6E30e583379Dc73b9261dF5E1A28b6F',
    INIT_CODE_HASH: '0x95fdd2079c005e7643dcf9411501657242ed5023f2115be16f29fbfa7894adb5',
    Icon: require('../assets/images/swapLogo/Aura.png')
  },
  RadioShack: {
    FACTORY: '0xB581D0A3b7Ea5cDc029260e989f768Ae167Ef39B',
    ROUTER: '0xAf877420786516FC6692372c209e0056169eebAf',
    INIT_CODE_HASH: '0x3eef69365a159891ca18b545ccaf0d6aca9b22c988b8deb7a3e4fa2fc2418596',
    Icon: require('../assets/images/swapLogo/RadioShack.png')
  },
  BakerySwap: {
    FACTORY: '0x01bF7C66c6BD861915CdaaE475042d3c4BaE16A7',
    ROUTER: '0xCDe540d7eAFE93aC5fE6233Bee57E1270D3E330F',
    INIT_CODE_HASH: '0xe2e87433120e32c4738a7d8f3271f3d872cbe16241d67537139158d90bac61d3',
    Icon: require('../assets/images/swapLogo/Bakery.png')
  },
  ELK: {
    FACTORY: '0xE3BD06c7ac7E1CeB17BdD2E5BA83E40D1515AF2a',
    ROUTER: '0xf38a7A7Ac2D745E2204c13F824c00139DF831FFf',
    INIT_CODE_HASH: '0x84845e7ccb283dec564acfcd3d9287a491dec6d675705545a2ab8be22ad78f31',
    Icon: elk
  }
}
export const MAINNET_AGGREGATION: CONTRACT = {
  Uniswap: {
    FACTORY: '0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f',
    ROUTER: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
    INIT_CODE_HASH: '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f',
    Icon: require('../assets/images/swapLogo/Uniswap.png')
  },
  Suhsi: {
    FACTORY: '0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac',
    ROUTER: '0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F',
    INIT_CODE_HASH: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
    Icon: require('../assets/images/swapLogo/sushi.png')
  },
  EOTC: {
    FACTORY: '0xDd2Ee85837B2A87a2F518Cd75A59b1548CD6D574',
    ROUTER: '0x8A42df1C1c6adef6cef7cea8BF3eD85B32891F30',
    INIT_CODE_HASH: '0x831202ecdb0b250291d1a60e015ef7606497321b8272abf8e3b438cdca2695e6',
    Icon: require('../assets/images/eotc.png'),
    name: 'Eotcswap V2'
  },
  DefiSwap: {
    FACTORY: '0x9DEB29c9a4c7A88a3C0257393b7f3335338D9A9D',
    ROUTER: '0xCeB90E4C17d626BE0fACd78b79c9c87d7ca181b3',
    INIT_CODE_HASH: '0x69d637e77615df9f235f642acebbdad8963ef35c5523142078c9b8f9d0ceba7e',
    Icon: defiswap
  },
  Julswap: {
    FACTORY: '0x553990F2CBA90272390f62C5BDb1681fFc899675',
    ROUTER: '0xbd67d157502A23309Db761c41965600c2Ec788b2',
    INIT_CODE_HASH: '0xb1e98e21a5335633815a8cfb3b580071c2e4561c50afd57a8746def9ed890b18',
    Icon: require('../assets/images/swapLogo/Jul.png')
  },
  BakerySwap: {
    FACTORY: '0x01bF7C66c6BD861915CdaaE475042d3c4BaE16A7',
    ROUTER: '0xCDe540d7eAFE93aC5fE6233Bee57E1270D3E330F',
    INIT_CODE_HASH: '0xe2e87433120e32c4738a7d8f3271f3d872cbe16241d67537139158d90bac61d3',
    Icon: require('../assets/images/swapLogo/Bakery.png')
  },
  ApeSwap: {
    FACTORY: '0x0841BD0B734E4F5853f0dD8d7Ea041c241fb0Da6',
    ROUTER: '0xcF0feBd3f17CEf5b47b0cD257aCf6025c5BFf3b7',
    INIT_CODE_HASH: '0xf4ccce374816856d11f00e4069e7cada164065686fbef53c6167a63ec2fd8c5b',
    Icon: require('../assets/images/swapLogo/Ape.png')
  },
  BabySwap: {
    FACTORY: '0x86407bEa2078ea5f5EB5A52B2caA963bC1F889Da',
    ROUTER: '0x8317c460C22A9958c27b4B6403b98d2Ef4E2ad32',
    INIT_CODE_HASH: '0x48c8bec5512d397a5d512fbb7d83d515e7b6d91e9838730bd1aa1b16575da7f5',
    Icon: require('../assets/images/swapLogo/baby.png')
  }
}
export const OKE_AGGREGATION: CONTRACT = {
  Pancake: {
    FACTORY: '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73',
    ROUTER: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    INIT_CODE_HASH: '0x00fb7f630766e6a796048ea87d01acd3068e8ff67d078148a3fa3f4a84f69bd5',
    Icon: require('../assets/images/swapLogo/pancake.png')
  },
  Suhsi: {
    FACTORY: '0xc35dadb65012ec5796536bd9864ed8773abc74c4',
    ROUTER: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
    INIT_CODE_HASH: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
    Icon: require('../assets/images/swapLogo/sushi.png')
  },
  EOTC: {
    name: 'Eotcswap V2',
    FACTORY: '0x0f298F5dAF0fE2C4817C6F51CA7Cd56aaD308a05',
    ROUTER: '0x77958baf64Eb730b9C2CC18c1c66c69d42A45f7A',
    INIT_CODE_HASH: '0x831202ecdb0b250291d1a60e015ef7606497321b8272abf8e3b438cdca2695e6',
    Icon: require('../assets/images/eotc.png')
  },
  Mdex: {
    FACTORY: '0x1116f8B82028324f2065078b4ff6b47F1Cc22B97',
    ROUTER: '0x4652ab8e8821F234407b1f1cB0ac8dD7E617BfF8',
    INIT_CODE_HASH: '0x0d994d996174b05cfc7bed897dc1b20b4c458fc8d64fe98bc78b3c64a6b4d093',
    Icon: require('../assets/images/swapLogo/mdex.png')
  },
  Julswap: {
    FACTORY: '0x553990F2CBA90272390f62C5BDb1681fFc899675',
    ROUTER: '0xbd67d157502A23309Db761c41965600c2Ec788b2',
    INIT_CODE_HASH: '0xb1e98e21a5335633815a8cfb3b580071c2e4561c50afd57a8746def9ed890b18',
    Icon: require('../assets/images/swapLogo/Jul.png')
  },
  BakerySwap: {
    FACTORY: '0x01bF7C66c6BD861915CdaaE475042d3c4BaE16A7',
    ROUTER: '0xCDe540d7eAFE93aC5fE6233Bee57E1270D3E330F',
    INIT_CODE_HASH: '0xe2e87433120e32c4738a7d8f3271f3d872cbe16241d67537139158d90bac61d3',
    Icon: require('../assets/images/swapLogo/Bakery.png')
  },
  Dfyn: {
    FACTORY: '0xE7Fb3e833eFE5F9c441105EB65Ef8b261266423B',
    ROUTER: '0x34686CBF7229ed0bff2Fbe7ED2CFC916317764f6',
    INIT_CODE_HASH: '0xd9fecb0a9f5bfd6ce2daf90b441ed5860c3fed2fcde57ba9819eb98d2422e418',
    Icon: Dfyn
  },
  CherrySwap: {
    FACTORY: '0x709102921812b3276a65092fe79edfc76c4d4afe',
    ROUTER: '0x865bfde337C8aFBffF144Ff4C29f9404EBb22b15',
    INIT_CODE_HASH: '0xe3ae0327539fda6ee87492b9ce166b7419808c231acd1fe54dd3fbf7754704f5',
    Icon: Cherryswap
  }
}
export const HUIBO_AGGREGATION: CONTRACT = {
  Pancake: {
    FACTORY: '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73',
    ROUTER: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    INIT_CODE_HASH: '0x00fb7f630766e6a796048ea87d01acd3068e8ff67d078148a3fa3f4a84f69bd5',
    Icon: require('../assets/images/swapLogo/pancake.png')
  },
  Suhsi: {
    FACTORY: '0xc35dadb65012ec5796536bd9864ed8773abc74c4',
    ROUTER: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
    INIT_CODE_HASH: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
    Icon: require('../assets/images/swapLogo/sushi.png')
  },
  EOTC: {
    name: 'Eotcswap V2',
    FACTORY: '0x70dD64b802230d583938c6944F06D17c39d60fA9',
    ROUTER: '0x8582A7396C55D006a8F7b8bC553E63e26A8d5E9a',
    INIT_CODE_HASH: '0x831202ecdb0b250291d1a60e015ef7606497321b8272abf8e3b438cdca2695e6',
    Icon: require('../assets/images/eotc.png')
  },
  Mdex: {
    FACTORY: '0xb0b670fc1F7724119963018DB0BfA86aDb22d941',
    ROUTER: '0x0f1c2d1fdd202768a4bda7a38eb0377bd58d278e',
    INIT_CODE_HASH: '0x2ad889f82040abccb2649ea6a874796c1601fb67f91a747a80e08860c73ddf24',
    Icon: require('../assets/images/swapLogo/mdex.png')
  },
  Julswap: {
    FACTORY: '0x553990F2CBA90272390f62C5BDb1681fFc899675',
    ROUTER: '0xbd67d157502A23309Db761c41965600c2Ec788b2',
    INIT_CODE_HASH: '0xb1e98e21a5335633815a8cfb3b580071c2e4561c50afd57a8746def9ed890b18',
    Icon: require('../assets/images/swapLogo/Jul.png')
  },
  BakerySwap: {
    FACTORY: '0x01bF7C66c6BD861915CdaaE475042d3c4BaE16A7',
    ROUTER: '0xCDe540d7eAFE93aC5fE6233Bee57E1270D3E330F',
    INIT_CODE_HASH: '0xe2e87433120e32c4738a7d8f3271f3d872cbe16241d67537139158d90bac61d3',
    Icon: require('../assets/images/swapLogo/Bakery.png')
  },
  ApeSwap: {
    FACTORY: '0x0841BD0B734E4F5853f0dD8d7Ea041c241fb0Da6',
    ROUTER: '0xcF0feBd3f17CEf5b47b0cD257aCf6025c5BFf3b7',
    INIT_CODE_HASH: '0xf4ccce374816856d11f00e4069e7cada164065686fbef53c6167a63ec2fd8c5b',
    Icon: require('../assets/images/swapLogo/Ape.png')
  },
  BabySwap: {
    FACTORY: '0x86407bEa2078ea5f5EB5A52B2caA963bC1F889Da',
    ROUTER: '0x8317c460C22A9958c27b4B6403b98d2Ef4E2ad32',
    INIT_CODE_HASH: '0x48c8bec5512d397a5d512fbb7d83d515e7b6d91e9838730bd1aa1b16575da7f5',
    Icon: require('../assets/images/swapLogo/baby.png')
  }
}
export const OPTIMISM_AGGREGATION: CONTRACT = {
  Uniswap: {
    FACTORY: '0x25CbdDb98b35ab1FF77413456B31EC81A6B6B746',
    ROUTER: '0x9c12939390052919aF3155f41Bf4160Fd3666A6f',
    INIT_CODE_HASH: '0xc1ac28b1c4ebe53c0cff67bab5878c4eb68759bb1e9f73977cd266b247d149f0',
    Icon: require('../assets/images/swapLogo/Uniswap.png')
  },
  Suhsi: {
    FACTORY: '0xc35dadb65012ec5796536bd9864ed8773abc74c4',
    ROUTER: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
    INIT_CODE_HASH: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
    Icon: require('../assets/images/swapLogo/sushi.png')
  },
  EOTC: {
    FACTORY: '0x73857Fa9a849Cd6DC8387C37f54Ad0F56B575eA2',
    ROUTER: '0xbD537A5afBB63295F1cab9A7A670415e153a91B9',
    INIT_CODE_HASH: '0xa9fbfced95fed0f4cbe56a6f056f7f895c31bee594b6a273f043d2ae917102e3',
    Icon: require('../assets/images/eotc.png')
  },
  Mdex: {
    FACTORY: '0x3CD1C46068dAEa5Ebb0d3f55F6915B10648062B8',
    ROUTER: '0x0384E9ad329396C3A6A401243Ca71633B2bC4333',
    INIT_CODE_HASH: '0x0d994d996174b05cfc7bed897dc1b20b4c458fc8d64fe98bc78b3c64a6b4d093',
    Icon: require('../assets/images/swapLogo/mdex.png')
  },
  Julswap: {
    FACTORY: '0x553990F2CBA90272390f62C5BDb1681fFc899675',
    ROUTER: '0xbd67d157502A23309Db761c41965600c2Ec788b2',
    INIT_CODE_HASH: '0xb1e98e21a5335633815a8cfb3b580071c2e4561c50afd57a8746def9ed890b18',
    Icon: require('../assets/images/swapLogo/Jul.png')
  },
  BakerySwap: {
    FACTORY: '0x01bF7C66c6BD861915CdaaE475042d3c4BaE16A7',
    ROUTER: '0xCDe540d7eAFE93aC5fE6233Bee57E1270D3E330F',
    INIT_CODE_HASH: '0xe2e87433120e32c4738a7d8f3271f3d872cbe16241d67537139158d90bac61d3',
    Icon: require('../assets/images/swapLogo/Bakery.png')
  },
  ApeSwap: {
    FACTORY: '0x0841BD0B734E4F5853f0dD8d7Ea041c241fb0Da6',
    ROUTER: '0xcF0feBd3f17CEf5b47b0cD257aCf6025c5BFf3b7',
    INIT_CODE_HASH: '0xf4ccce374816856d11f00e4069e7cada164065686fbef53c6167a63ec2fd8c5b',
    Icon: require('../assets/images/swapLogo/Ape.png')
  },
  BabySwap: {
    FACTORY: '0x86407bEa2078ea5f5EB5A52B2caA963bC1F889Da',
    ROUTER: '0x8317c460C22A9958c27b4B6403b98d2Ef4E2ad32',
    INIT_CODE_HASH: '0x48c8bec5512d397a5d512fbb7d83d515e7b6d91e9838730bd1aa1b16575da7f5',
    Icon: require('../assets/images/swapLogo/baby.png')
  }
}
export const GNOSIS_AGGREGATION: CONTRACT = {
  BaoSwap: {
    FACTORY: '0x45DE240fbE2077dd3e711299538A09854FAE9c9b',
    ROUTER: '0x6093AeBAC87d62b1A5a4cEec91204e35020E38bE',
    INIT_CODE_HASH: '0x0bae3ead48c325ce433426d2e8e6b07dac10835baec21e163760682ea3d3520d',
    Icon: require('../assets/images/swapLogo/BaoSwap.png')
  },
  Suhsi: {
    FACTORY: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
    ROUTER: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
    INIT_CODE_HASH: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
    Icon: require('../assets/images/swapLogo/sushi.png')
  },
  EOTC: {
    FACTORY: '0x73857Fa9a849Cd6DC8387C37f54Ad0F56B575eA2',
    ROUTER: '0xbD537A5afBB63295F1cab9A7A670415e153a91B9',
    INIT_CODE_HASH: '0xa9fbfced95fed0f4cbe56a6f056f7f895c31bee594b6a273f043d2ae917102e3',
    Icon: require('../assets/images/eotc.png')
  },
  Mdex: {
    FACTORY: '0x3CD1C46068dAEa5Ebb0d3f55F6915B10648062B8',
    ROUTER: '0x0384E9ad329396C3A6A401243Ca71633B2bC4333',
    INIT_CODE_HASH: '0x0d994d996174b05cfc7bed897dc1b20b4c458fc8d64fe98bc78b3c64a6b4d093',
    Icon: require('../assets/images/swapLogo/mdex.png')
  },
  Julswap: {
    FACTORY: '0x553990F2CBA90272390f62C5BDb1681fFc899675',
    ROUTER: '0xbd67d157502A23309Db761c41965600c2Ec788b2',
    INIT_CODE_HASH: '0xb1e98e21a5335633815a8cfb3b580071c2e4561c50afd57a8746def9ed890b18',
    Icon: require('../assets/images/swapLogo/Jul.png')
  },
  BakerySwap: {
    FACTORY: '0x01bF7C66c6BD861915CdaaE475042d3c4BaE16A7',
    ROUTER: '0xCDe540d7eAFE93aC5fE6233Bee57E1270D3E330F',
    INIT_CODE_HASH: '0xe2e87433120e32c4738a7d8f3271f3d872cbe16241d67537139158d90bac61d3',
    Icon: require('../assets/images/swapLogo/Bakery.png')
  },
  ApeSwap: {
    FACTORY: '0x0841BD0B734E4F5853f0dD8d7Ea041c241fb0Da6',
    ROUTER: '0xcF0feBd3f17CEf5b47b0cD257aCf6025c5BFf3b7',
    INIT_CODE_HASH: '0xf4ccce374816856d11f00e4069e7cada164065686fbef53c6167a63ec2fd8c5b',
    Icon: require('../assets/images/swapLogo/Ape.png')
  },
  BabySwap: {
    FACTORY: '0x86407bEa2078ea5f5EB5A52B2caA963bC1F889Da',
    ROUTER: '0x8317c460C22A9958c27b4B6403b98d2Ef4E2ad32',
    INIT_CODE_HASH: '0x48c8bec5512d397a5d512fbb7d83d515e7b6d91e9838730bd1aa1b16575da7f5',
    Icon: require('../assets/images/swapLogo/baby.png')
  }
}
export const AVALANCHE_AGGREGATION: CONTRACT = {
  TraderJoe: {
    FACTORY: '0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10',
    ROUTER: '0x60aE616a2155Ee3d9A68541Ba4544862310933d4',
    INIT_CODE_HASH: '0x0bbca9af0511ad1a1da383135cf3a8d2ac620e549ef9f6ae3a4c33c2fed0af91',
    Icon: require('../assets/images/swapLogo/TraderJoe.png')
  },
  Suhsi: {
    FACTORY: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
    ROUTER: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
    INIT_CODE_HASH: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
    Icon: require('../assets/images/swapLogo/sushi.png')
  },
  EOTC: {
    FACTORY: '0x73857Fa9a849Cd6DC8387C37f54Ad0F56B575eA2',
    ROUTER: '0xbD537A5afBB63295F1cab9A7A670415e153a91B9',
    INIT_CODE_HASH: '0xa9fbfced95fed0f4cbe56a6f056f7f895c31bee594b6a273f043d2ae917102e3',
    Icon: require('../assets/images/eotc.png')
  },
  Mdex: {
    FACTORY: '0x3CD1C46068dAEa5Ebb0d3f55F6915B10648062B8',
    ROUTER: '0x0384E9ad329396C3A6A401243Ca71633B2bC4333',
    INIT_CODE_HASH: '0x0d994d996174b05cfc7bed897dc1b20b4c458fc8d64fe98bc78b3c64a6b4d093',
    Icon: require('../assets/images/swapLogo/mdex.png')
  },
  Pangolin: {
    FACTORY: '0xefa94DE7a4656D787667C749f7E1223D71E9FD88',
    ROUTER: '0xE54Ca86531e17Ef3616d22Ca28b0D458b6C89106',
    INIT_CODE_HASH: '0x40231f6b438bce0797c9ada29b718a87ea0a5cea3fe9a771abdd76bd41a3e545',
    Icon: Pangolin
  },
  BakerySwap: {
    FACTORY: '0x01bF7C66c6BD861915CdaaE475042d3c4BaE16A7',
    ROUTER: '0xCDe540d7eAFE93aC5fE6233Bee57E1270D3E330F',
    INIT_CODE_HASH: '0xe2e87433120e32c4738a7d8f3271f3d872cbe16241d67537139158d90bac61d3',
    Icon: require('../assets/images/swapLogo/Bakery.png')
  },
  ApeSwap: {
    FACTORY: '0x0841BD0B734E4F5853f0dD8d7Ea041c241fb0Da6',
    ROUTER: '0xcF0feBd3f17CEf5b47b0cD257aCf6025c5BFf3b7',
    INIT_CODE_HASH: '0xf4ccce374816856d11f00e4069e7cada164065686fbef53c6167a63ec2fd8c5b',
    Icon: require('../assets/images/swapLogo/Ape.png')
  },
  BabySwap: {
    FACTORY: '0x86407bEa2078ea5f5EB5A52B2caA963bC1F889Da',
    ROUTER: '0x8317c460C22A9958c27b4B6403b98d2Ef4E2ad32',
    INIT_CODE_HASH: '0x48c8bec5512d397a5d512fbb7d83d515e7b6d91e9838730bd1aa1b16575da7f5',
    Icon: require('../assets/images/swapLogo/baby.png')
  }
}
export const FANTOM_AGGREGATION: CONTRACT = {
  Uniswap: {
    FACTORY: '0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f',
    ROUTER: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
    INIT_CODE_HASH: '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f',
    Icon: require('../assets/images/swapLogo/Uniswap.png')
  },
  Suhsi: {
    FACTORY: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
    ROUTER: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
    INIT_CODE_HASH: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
    Icon: require('../assets/images/swapLogo/sushi.png')
  },
  EOTC: {
    FACTORY: '0x73857Fa9a849Cd6DC8387C37f54Ad0F56B575eA2',
    ROUTER: '0xbD537A5afBB63295F1cab9A7A670415e153a91B9',
    INIT_CODE_HASH: '0xa9fbfced95fed0f4cbe56a6f056f7f895c31bee594b6a273f043d2ae917102e3',
    Icon: require('../assets/images/eotc.png')
  },
  Spooky: {
    FACTORY: '0x152eE697f2E276fA89E96742e9bB9aB1F2E61bE3',
    ROUTER: '0xF491e7B69E4244ad4002BC14e878a34207E38c29',
    INIT_CODE_HASH: '0xcdf2deca40a0bd56de8e3ce5c7df6727e5b1bf2ac96f283fa9c4b3e6b42ea9d2',
    Icon: Spooky
  },
  SpiritSwap: {
    FACTORY: '0x9d3591719038752db0c8bEEe2040FfcC3B2c6B9c',
    ROUTER: '0x09855B4ef0b9df961ED097EF50172be3e6F13665',
    INIT_CODE_HASH: '0x5442fb448d86f32a7d2a9dc1a457e64bf5a6c77415d98802aac4fb5a9dc5ecd9',
    Icon: require('../assets/images/swapLogo/spiritswap_logo.png')
  },
  TombSwap: {
    FACTORY: '0xE236f6890F1824fa0a7ffc39b1597A5A6077Cfe9',
    ROUTER: '0x6D0176C5ea1e44b08D3dd001b0784cE42F47a3A7',
    INIT_CODE_HASH: '0x2dfbcf1b907f911bc66d083d103a1d7de0b8b21a6cb2a66a78d1f1559018fba4',
    Icon: Tomb
  },
  ApeSwap: {
    FACTORY: '0x0841BD0B734E4F5853f0dD8d7Ea041c241fb0Da6',
    ROUTER: '0xcF0feBd3f17CEf5b47b0cD257aCf6025c5BFf3b7',
    INIT_CODE_HASH: '0xf4ccce374816856d11f00e4069e7cada164065686fbef53c6167a63ec2fd8c5b',
    Icon: require('../assets/images/swapLogo/Ape.png')
  },
  BabySwap: {
    FACTORY: '0x86407bEa2078ea5f5EB5A52B2caA963bC1F889Da',
    ROUTER: '0x8317c460C22A9958c27b4B6403b98d2Ef4E2ad32',
    INIT_CODE_HASH: '0x48c8bec5512d397a5d512fbb7d83d515e7b6d91e9838730bd1aa1b16575da7f5',
    Icon: require('../assets/images/swapLogo/baby.png')
  }
}
export const ARBITRUM_ONE: CONTRACT = {
  Uniswap: {
    FACTORY: '0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f',
    ROUTER: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
    INIT_CODE_HASH: '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f',
    Icon: require('../assets/images/swapLogo/Uniswap.png')
  },
  Suhsi: {
    FACTORY: '0xc35dadb65012ec5796536bd9864ed8773abc74c4',
    ROUTER: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
    INIT_CODE_HASH: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
    Icon: require('../assets/images/swapLogo/sushi.png')
  },
  EOTC: {
    FACTORY: '0x73857Fa9a849Cd6DC8387C37f54Ad0F56B575eA2',
    ROUTER: '0xbD537A5afBB63295F1cab9A7A670415e153a91B9',
    INIT_CODE_HASH: '0xa9fbfced95fed0f4cbe56a6f056f7f895c31bee594b6a273f043d2ae917102e3',
    Icon: require('../assets/images/eotc.png')
  },
  Mdex: {
    FACTORY: '0x3CD1C46068dAEa5Ebb0d3f55F6915B10648062B8',
    ROUTER: '0x0384E9ad329396C3A6A401243Ca71633B2bC4333',
    INIT_CODE_HASH: '0x0d994d996174b05cfc7bed897dc1b20b4c458fc8d64fe98bc78b3c64a6b4d093',
    Icon: require('../assets/images/swapLogo/mdex.png')
  },
  Julswap: {
    FACTORY: '0x553990F2CBA90272390f62C5BDb1681fFc899675',
    ROUTER: '0xbd67d157502A23309Db761c41965600c2Ec788b2',
    INIT_CODE_HASH: '0xb1e98e21a5335633815a8cfb3b580071c2e4561c50afd57a8746def9ed890b18',
    Icon: require('../assets/images/swapLogo/Jul.png')
  },
  BakerySwap: {
    FACTORY: '0x01bF7C66c6BD861915CdaaE475042d3c4BaE16A7',
    ROUTER: '0xCDe540d7eAFE93aC5fE6233Bee57E1270D3E330F',
    INIT_CODE_HASH: '0xe2e87433120e32c4738a7d8f3271f3d872cbe16241d67537139158d90bac61d3',
    Icon: require('../assets/images/swapLogo/Bakery.png')
  },
  ApeSwap: {
    FACTORY: '0x0841BD0B734E4F5853f0dD8d7Ea041c241fb0Da6',
    ROUTER: '0xcF0feBd3f17CEf5b47b0cD257aCf6025c5BFf3b7',
    INIT_CODE_HASH: '0xf4ccce374816856d11f00e4069e7cada164065686fbef53c6167a63ec2fd8c5b',
    Icon: require('../assets/images/swapLogo/Ape.png')
  },
  BabySwap: {
    FACTORY: '0x86407bEa2078ea5f5EB5A52B2caA963bC1F889Da',
    ROUTER: '0x8317c460C22A9958c27b4B6403b98d2Ef4E2ad32',
    INIT_CODE_HASH: '0x48c8bec5512d397a5d512fbb7d83d515e7b6d91e9838730bd1aa1b16575da7f5',
    Icon: require('../assets/images/swapLogo/baby.png')
  }
}
