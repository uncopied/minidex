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
        name:`EPOCH, "REPLICANTS," 1/20`,
        unit:"EPOCH",
        url:"https://api.uncopied.art/c/v/R",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("ade0c8cffa3e9744d03f28bacbcad7fa")),
        decimals:0,
        note: new Uint8Array(Buffer.from( ""))
    },
    {
        name:'EPOCH, "REPLICANTS," 2/20',
        unit:"EPOCH",
        url:"https://api.uncopied.art/c/v/S",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("c2ee12c2130a1adb33fc9e6c5df2a6f9")),
        decimals:0,
        note: new Uint8Array(Buffer.from( ""))
    },
    {
        name:'EPOCH, "REPLICANTS," 3/20',
        unit:"EPOCH",
        url:"hhttps://api.uncopied.art/c/v/T",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("0df8673ca2baad10052770879f454182")),
        decimals:0,
        note: new Uint8Array(Buffer.from( ""))
    },
    {
        name:'EPOCH, "REPLICANTS," 4/20',
        unit:"EPOCH",
        url:"https://api.uncopied.art/c/v/U",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("a44b20ee6eadae2a8566c98646f8953d")),
        decimals:0,
        note: new Uint8Array(Buffer.from( ""))
    },
    {
        name:'EPOCH, "REPLICANTS," 5/20',
        unit:"EPOCH",
        url:"https://api.uncopied.art/c/v/V",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("493b944add91650c343c667da1d2778a")),
        decimals:0,
        note: new Uint8Array(Buffer.from( ""))
    },
    {
        name:'EPOCH, "REPLICANTS," 6/20',
        unit:"EPOCH",
        url:"https://api.uncopied.art/c/v/W",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("2774e1768a91295e5f4a2c4196552766")),
        decimals:0,
        note: new Uint8Array(Buffer.from( ""))
    },
    {
        name:'EPOCH, "REPLICANTS," 7/20',
        unit:"EPOCH",
        url:"https://api.uncopied.art/c/v/X",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("2dcdf8eea215622a3b3e3a57564a8e3f")),
        decimals:0,
        note: new Uint8Array(Buffer.from( ""))
    },
    {
        name:'EPOCH, "REPLICANTS," 8/20',
        unit:"EPOCH",
        url:"https://api.uncopied.art/c/v/Y",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("ce6dd633727e11f1d3dc11ec44200a4a")),
        decimals:0,
        note: new Uint8Array(Buffer.from( ""))
    },
    {
        name:'EPOCH, "REPLICANTS," 9/20',
        unit:"EPOCH",
        url:"https://api.uncopied.art/c/v/Z",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("57c5fb965fd5e75d4547096be05e62a5")),
        decimals:0,
        note: new Uint8Array(Buffer.from( ""))
    },
    {
        name:'EPOCH, "REPLICANTS," 10/20',
        unit:"EPOCH",
        url:"https://api.uncopied.art/c/v/a",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("193a34f7ef614104d0cc29e38317cadf")),
        decimals:0,
        note: new Uint8Array(Buffer.from( ""))
    },
    {
        name:'EPOCH, "REPLICANTS," 11/20',
        unit:"EPOCH",
        url:"https://api.uncopied.art/c/v/b",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("9800a1645372a1d00de5286bc92b3620")),
        decimals:0,
        note: new Uint8Array(Buffer.from( ""))
    },
    {
        name:'EPOCH, "REPLICANTS," 12/20',
        unit:"EPOCH",
        url:"https://api.uncopied.art/c/v/c",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("08239aa24a16d71e0cfcfea13ab78eb1")),
        decimals:0,
        note: new Uint8Array(Buffer.from( ""))
    },
    {
        name:'EPOCH, "REPLICANTS," 13/20',
        unit:"EPOCH",
        url:"https://api.uncopied.art/c/v/d",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("a069d6a47f72561e7e99394940eef53b")),
        decimals:0,
        note: new Uint8Array(Buffer.from( ""))
    },
    {
        name:'EPOCH, "REPLICANTS," 14/20',
        unit:"EPOCH",
        url:"https://api.uncopied.art/c/v/e",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("f1f63507e06a43f01d777d7dea867273")),
        decimals:0,
        note: new Uint8Array(Buffer.from( ""))

    },
    {
        name:'EPOCH, "REPLICANTS," 15/20',
        unit:"EPOCH",
        url:"https://api.uncopied.art/c/v/f",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("e893d6016514d054ba9f8d02f10617e0")),
        decimals:0,
        note: new Uint8Array(Buffer.from( ""))

    },
    {
        name:'EPOCH, "REPLICANTS," 16/20',
        unit:"EPOCH",
        url:"https://api.uncopied.art/c/v/g",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("df3cdeebfe1ef4306244dcad8a31bd17")),
        decimals:0,
        note: new Uint8Array(Buffer.from( ""))
    },
    {
        name:'EPOCH, "REPLICANTS," 17/20',
        unit:"EPOCH",
        url:"https://api.uncopied.art/c/v/h",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("c3cb26cc3a850343a7adf98d34cb2ebe")),
        decimals:0,
        note: new Uint8Array(Buffer.from( ""))
    },
    {
        name:'EPOCH, "REPLICANTS," 18/20',
        unit:"EPOCH",
        url:"https://api.uncopied.art/c/v/i",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("e2ab0dcc6dd7ed08702d7f99b43bfcfd")),
        decimals:0,
        note: new Uint8Array(Buffer.from( ""))
    },
    {
        name:'EPOCH, "REPLICANTS," 19/20' ,
        unit:"EPOCH",
        url:"https://api.uncopied.art/c/v/j",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("f30cf70d2f5f96fa66f9337674106c77")),
        decimals:0,
        note: new Uint8Array(Buffer.from( ""))
    },
    {
        name:'EPOCH, "REPLICANTS," 20/20',
        unit:"EPOCH",
        url:"https://api.uncopied.art/c/v/k",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("c06c6f36a68e6db14227e83d72a241f6")),
        decimals:0,
        note: new Uint8Array(Buffer.from( ""))
    },
    {
        name:'EPOCH, "REPLICANTS," 1/10 AP',
        unit:"EPOCH",
        url:"https://api.uncopied.art/c/v/l",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("68ee4013dd013439022559a56be3f258")),
        decimals:0,
        note: new Uint8Array(Buffer.from( ""))
    },  
    {
        name:'EPOCH, "REPLICANTS," 2/10 AP' ,
        unit:"EPOCH",
        url:"https://api.uncopied.art/c/v/m",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("b29804cf8204806934e996fba6163174")),
        decimals:0,
        note: new Uint8Array(Buffer.from( ""))
    },
    {
        name:'EPOCH, "REPLICANTS," 3/10 AP',
        unit:"EPOCH",
        url:"https://api.uncopied.art/c/v/n",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("26a7b7b04ae7d90de6bfb43bde23a34b")),
        decimals:0,
        note: new Uint8Array(Buffer.from( ""))
    },
    {
        name:'EPOCH, "REPLICANTS," 4/10 AP',
        unit:"EPOCH",
        url:"https://api.uncopied.art/c/v/o",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("720fea36a4928468c1964f7353ae17c7")),
        decimals:0,
        note: new Uint8Array(Buffer.from( ""))
    },  

    {
        name:'EPOCH, "REPLICANTS," 5/10 AP' ,
        unit:"EPOCH",
        url:"https://api.uncopied.art/c/v/p",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("759e329bf37330a58be15a90aa909136")),
        decimals:0,
        note: new Uint8Array(Buffer.from( ""))
    },
    {
        name:'EPOCH, "REPLICANTS," 6/10 AP',
        unit:"EPOCH",
        url:"https://api.uncopied.art/c/v/q",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("24f0b1122f8b7c3fb23c72120868f6fb")),
        decimals:0,
        note: new Uint8Array(Buffer.from( ""))
    },
    {
        name:'EPOCH, "REPLICANTS," 7/10 AP',
        unit:"EPOCH",
        url:"https://api.uncopied.art/c/v/r",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("6d02874a0dac7ca9f633156808b818f3")),
        decimals:0,
        note: new Uint8Array(Buffer.from( ""))
    },  
    {
        name:'EPOCH, "REPLICANTS," 8/10 AP' ,
        unit:"EPOCH",
        url:"https://api.uncopied.art/c/v/s",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("f1cde5d61ea606ccf3673eca97a47dc7")),
        decimals:0,
        note: new Uint8Array(Buffer.from( ""))
    },
    {
        name:'EPOCH, "REPLICANTS," 9/10 AP',
        unit:"EPOCH",
        url:"https://api.uncopied.art/c/v/t",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("2ebddddf90bc009250ce8404805033c1")),
        decimals:0,
        note: new Uint8Array(Buffer.from( ""))
    },
    {
        name:'EPOCH, "REPLICANTS," 10/10 AP',
        unit:"EPOCH",
        url:"https://api.uncopied.art/c/v/u",
        total:1,
        metadataHash:new Uint8Array(Buffer.from("ad73a489fe67dbf6ffb508f37ba9483d")),
        decimals:0,
        note: new Uint8Array(Buffer.from( ""))
    },  

]

export function getAsaToClawbackInfo(params,sender, assetFreeze,assetManager,assetReserve,assetClawback){
    const asaArray = [41244654, 41244655, 41244656, 41244657, 41244658, 41244659, 41244660, 41244661, 41244662, 41244663, 41244664, 41244665, 41244666, 41244667, 41244668, 41244669, 41244708, 41244709, 41244710, 41244711, 41244712, 41244713, 41244714, 41244715, 41244716, 41244717, 41244718, 41244719, 41244720, 41244721];
    let assetClawbackAddresses =   ['XIV2MYR3MPKO346B3LWXJHDFQRFOSBOAQC4WKLODF6DF33BYTSHPCEDNGE', 'IQEEPJ5UO66REKTSGWRVSTVQRDFUKP6FQW3CZBWAHP6J6ICPMBTDC6LWI4', 'P3NCD6EMLW7JV6YTDWGXMNEUEXMYVD3LWC6EMBQ3ADGUGI7HFH2JYOGUKU', 'EWF7RGM4HQYVKR5WTMEMD24WSYWSATJAALG2ZOWMFPCAJERTOCEV37IJQM','CMKJH5QXHDQC4I55UQYF6W4GMZMR2IX5OIW2OCZFOMFJMUOTMO5IYAGFQI','ACZXIMY43MUSFV5RLBD2GZ3YCAZ6NO4664UEEUMGEKKETJBBYYRT5C66OA','UIGQTAQN7NEM6DSH4KFF67B7MV4FVBBZIJV35YDX27DULDWUC3RECSZE54','FCQA4YVNR7GCJTFVTWTVW7B5XS6VWJYGBVUBYR2XD7XBMLCMY6FOYP3ZVY','CKZUKBGBRVFUUILHC4FOYFHWON5NJXBD4DSVKORWNGK7C3ZICAU4EHSHMY','BIT2DUNAUEMFFXDNDLJSEHKIPPU4CORYCWXR5RJIEF4AYN3WVXDRGEVEWQ'  ]
// ['BDEgMgMSMQkyAxIQMRGB7q/VExIQMwEYga6l1hMSEEM=','BDEgMgMSMQkyAxIQMRGB76/VExIQMwEYgZew1RMSEEM=', 'BDEgMgMSMQkyAxIQMRGB8K/VExIQMwEYgbCl1hMSEEM=', 'BDEgMgMSMQkyAxIQMRGB8a/VExIQMwEYgbGl1hMSEEM=', 'BDEgMgMSMQkyAxIQMRGB8q/VExIQMwEYgbKl1hMSEEM=','BDEgMgMSMQkyAxIQMRGB86/VExIQMwEYgbOl1hMSEEM=','BDEgMgMSMQkyAxIQMRGB9K/VExIQMwEYgbSl1hMSEEM=','BDEgMgMSMQkyAxIQMRGB9a/VExIQMwEYgbWl1hMSEEM=','BDEgMgMSMQkyAxIQMRGB9q/VExIQMwEYgbal1hMSEEM=','BDEgMgMSMQkyAxIQMRGB96/VExIQMwEYgbel1hMSEEM=' ]
    let asaInfos = asaArray.map((el, index) => {
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
            assetClawback:assetClawbackAddresses[index]
          };
    });
    return asaInfos;
} 
