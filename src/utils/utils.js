export function createAsa(params,from,assetName, assetUnitName,assetDecimals,assetTotal,assetUrl,assetFreeze,assetManager,assetReserve,assetDefaultFrozen,assetMetadataHash,note){
    let  txn = {
       ...params,
       fee: 1000,
       flatFee: true,
       type: 'acfg',
       from: from,
       assetName: assetName,
       assetUnitName: assetUnitName,
       assetDecimals: assetDecimals,
       assetTotal: assetTotal,
       assetURL: assetUrl,
       assetFreeze: assetFreeze,
       assetManager: assetManager,
       assetReserve: assetReserve,
       assetDefaultFrozen: assetDefaultFrozen,
       assetClawback:from,
       assetMetadataHash,
       note
     };
   return txn;
 }
 export function clawbackAsa(params,sender,assetIndex,assetFreeze,assetManager,assetReserve,assetClawback){
    let  txn = {
         ...params,
         fee: 1000,
         flatFee: true,
         type: 'acfg',
         from: sender,
         assetIndex: assetIndex,
         assetFreeze: assetFreeze,
         assetManager: assetManager,
         assetReserve: assetReserve,
         assetClawback:assetClawback
       };
 
       return txn;
 }
 export function connectToWallet(myalgoconnect){
    return new Promise(async(resolve,reject)=>{
        let addresses;
        try{
            addresses = await myalgoconnect.connect();
            resolve(addresses)
        }catch(error){
            reject(error);
        }       
    });
}

export async function isConnected(addresses,myalgoconnect){
    return new Promise(async(resolve,reject)=>{
        if(addresses.length==0){
            try{
               let addr =  await connectToWallet(myalgoconnect)
               addresses= addr;
               console.log(addr);
               resolve(addresses);
            }catch(error){
             console.error(error);
              reject(false);    
            } 
         }else{
              resolve(true);
         }
    })
}

export const replicantAsaInfo =[
    {
        name:"TEST, \"test\", 2021; 1/5",
        unit:"TEST",
        url:"https://test.text.test/c/v/C",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("73cd943cc7ef72d65d754662985412a4")),
        decimals:0,
        note: new Uint8Array(Buffer.from( "TEST_ASA=243599509"))
    },
    {
        name:"TEST, \"test\", 2021; 2/5",
        unit:"TEST",
        url:"https://test.text.test/c/v/D",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("ddea2b97093aeff0f5c2b262eb562322")),
        decimals:0,
        note: new Uint8Array(Buffer.from( "TEST_ASA=243599550"))
    },
    {
        name:"TEST, \"test\", 2021; 3/5",
        unit:"TEST",
        url:"https://test.text.test/c/v/E",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("aaede09d0799f5693e9dd627a0e22ec4")),
        decimals:0,
        note: new Uint8Array(Buffer.from( "UNCOPIED_ASA=243599602"))
    },
    {
        name:"TEST, \"test\", 2021; 4/5",
        unit:"TEST",
        url:"https://test.text.test/c/v/F",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("bd2964d746eda8f42da3cdf21883bef3")),
        decimals:0,
        note: new Uint8Array(Buffer.from( "UNCOPIED_ASA=243599627"))
    },
    {
        name:"TEST, \"test\", 2021; 5/5",
        unit:"TEST",
        url:"https://test.text.test/c/v/G",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("2cfc7e5bcb47fa235c1480c0b991fa76")),
        decimals:0,
        note: new Uint8Array(Buffer.from( "UNCOPIED_ASA=243599673"))
    },
    {
        name:"TEST, \"test\", 2021; 1/8 TP",
        unit:"TEST",
        url:"https://test.text.test/c/v/H",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("6099c8bd6d3e9db82a72cbd40c8a1771")),
        decimals:0,
        note: new Uint8Array(Buffer.from( "UNCOPIED_ASA=243599716"))

    },
    {
        name:"TEST, \"test\", 2021; 2/8 TP",
        unit:"TEST",
        url:"https://test.text.test/c/v/I",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("4bb069bf9c6bcc6b728217d9b2851926")),
        decimals:0,
        note: new Uint8Array(Buffer.from( "UNCOPIED_ASA=243599759"))

    },
    {
        name:"TEST, \"test\", 2021; 3/8 TP",
        unit:"TEST",
        url:"https://test.text.test/c/v/J",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("afabe9c45b609bcf4382f8e624174ebb")),
        decimals:0,
        note: new Uint8Array(Buffer.from( "UNCOPIED_ASA=243599805"))
    },
    {
        name:"TEST, \"test\", 2021; 4/8 TP",
        unit:"TEST",
        url:"https://test.text.test/c/v/K",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("d457a5ba58fb2e6cb09ab76dee991165")),
        decimals:0,
        note: new Uint8Array(Buffer.from( "UNCOPIED_ASA=243599860"))
    },
    {
        name:"TEST, \"test\", 2021; 5/8 TP",
        unit:"TEST",
        url:"https://test.text.test/c/v/L",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("0bff9605a2874529628bfa681a8dc586")),
        decimals:0,
        note: new Uint8Array(Buffer.from( "TEST_ASA=243599905"))
    },
    {
        name:"TEST, \"test\", 2021; 6/8 TP" ,
        unit:"TEST",
        url:"https://test.text.test/c/v/M",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("603dbf8fff0239be23d3984e0bb152d5")),
        decimals:0,
        note: new Uint8Array(Buffer.from( "TEST_ASA=243599951"))
    },
    {
        name:"TEST, \"test\", 2021; 7/8 TP",
        unit:"TEST",
        url:"https://test.text.test/c/v/N",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("b13f3cd280641cbe6055ab33341aef2e")),
        decimals:0,
        note: new Uint8Array(Buffer.from( "TEST_ASA=243599983"))
    },
    {
        name:"TEST, \"test\", 2021; 8/8 TP",
        unit:"TEST",
        url:"https://test.text.test/c/v/O",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("41bd0ef4a8589852c83f2ca5d2e39da1")),
        decimals:0,
        note: new Uint8Array(Buffer.from( "TEST_ASA=243600015"))
    },  
    {
        name:"TEST, \"test\", 2021; 6/8 TP" ,
        unit:"TEST",
        url:"https://test.text.test/c/v/M",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("603dbf8fff0239be23d3984e0bb152d5")),
        decimals:0,
        note: new Uint8Array(Buffer.from( "TEST_ASA=243599951"))
    },
    {
        name:"TEST, \"test\", 2021; 7/8 TP",
        unit:"TEST",
        url:"https://test.text.test/c/v/N",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("b13f3cd280641cbe6055ab33341aef2e")),
        decimals:0,
        note: new Uint8Array(Buffer.from( "TEST_ASA=243599983"))
    },
    {
        name:"TEST, \"test\", 2021; 8/8 TP",
        unit:"TEST",
        url:"https://test.text.test/c/v/O",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("41bd0ef4a8589852c83f2ca5d2e39da1")),
        decimals:0,
        note: new Uint8Array(Buffer.from( "TEST_ASA=243600015"))
    },  

    {
        name:"TEST, \"test\", 2021; 6/8 TP" ,
        unit:"TEST",
        url:"https://test.text.test/c/v/M",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("603dbf8fff0239be23d3984e0bb152d5")),
        decimals:0,
        note: new Uint8Array(Buffer.from( "TEST_ASA=243599951"))
    },
    {
        name:"TEST, \"test\", 2021; 7/8 TP",
        unit:"TEST",
        url:"https://test.text.test/c/v/N",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("b13f3cd280641cbe6055ab33341aef2e")),
        decimals:0,
        note: new Uint8Array(Buffer.from( "TEST_ASA=243599983"))
    },
    {
        name:"TEST, \"test\", 2021; 8/8 TP",
        unit:"TEST",
        url:"https://test.text.test/c/v/O",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("41bd0ef4a8589852c83f2ca5d2e39da1")),
        decimals:0,
        note: new Uint8Array(Buffer.from( "TEST_ASA=243600015"))
    },  
    {
        name:"TEST, \"test\", 2021; 6/8 TP" ,
        unit:"TEST",
        url:"https://test.text.test/c/v/M",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("603dbf8fff0239be23d3984e0bb152d5")),
        decimals:0,
        note: new Uint8Array(Buffer.from( "TEST_ASA=243599951"))
    },
    {
        name:"TEST, \"test\", 2021; 7/8 TP",
        unit:"TEST",
        url:"https://test.text.test/c/v/N",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("b13f3cd280641cbe6055ab33341aef2e")),
        decimals:0,
        note: new Uint8Array(Buffer.from( "TEST_ASA=243599983"))
    },
    {
        name:"TEST, \"test\", 2021; 8/8 TP",
        unit:"TEST",
        url:"https://test.text.test/c/v/O",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("41bd0ef4a8589852c83f2ca5d2e39da1")),
        decimals:0,
        note: new Uint8Array(Buffer.from( "TEST_ASA=243600015"))
    },  

]

export function getAsaToClawbackInfo(params,sender, assetFreeze,assetManager,assetReserve,assetClawback){
    const asaArray = [41175594,41175593,41175592,41175591,41175590,41175589,41175588
        ,41175587]
    let asaInfos = asaArray.map(el => {
        return {
            ...params,
            fee: 1000,
            flatFee: true,
            type: 'acfg',
            from: sender,
            assetIndex: el,
            assetFreeze: assetFreeze,
            assetManager: assetManager,
            assetReserve: assetReserve,
            assetClawback:assetClawback
          };
    });
    return asaInfos;
} 
