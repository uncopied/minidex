import React, { useState } from 'react';
import replicantImage from '../assets/images/replicantImage.jpeg'
import {Button,Typography,CircularProgress,LinearProgress} from '@material-ui/core';
import {Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { useTheme } from '@material-ui/core/styles';
import algosdk from 'algosdk';
import MyAlgoConnect from '@randlabs/myalgo-connect';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Buffer } from 'buffer';
import Home from './Home';
import {createAsa,clawbackAsa,connectToWallet,isConnected,replicantAsaInfo,getAsaToClawbackInfo} from '../utils/utils';


function ReplicantNftCreation(){
    let signerAddress = []
    let epochAddress = "VTAUB5LOVTWKXICWEDBO5UG2JNNGEW7ULRB4PQB23DGRKSAXDVPORQNZJE";
    const token = { 'X-API-Key':'QIbtJ2qVvz8IUKIJiprmm2pRf2yutg14eOS98d15'};
    const server = "https://testnet-algorand.api.purestake.io/ps2";
    const baseServer = "https://testnet-algorand.api.purestake.io/idx2";
    const port = '';
    const client = new algosdk.Algodv2(token, server, port);
    let indexerClient = new algosdk.Indexer(token, baseServer, port);
    const classes = useStyles();
    const [loading,setLoading] = useState(false);
    const [dialogVisible, controlDialog] = useState(false);
    const [dialogTitle, setDialogTitle] = useState("");
    const [dialogDescription, setDialogDescription] = useState("")
    return (<div className = {classes.root}>
                <Grid container spacing = {2}>
                    {/* <Paper elevation = {3}><CircularProgress color="primary" className={classes.progress}/></Paper> */}
                    <Grid item xs = {12}>
                        <Paper elevation = {3} className = {classes.paper}>
                            { loading? <CircularProgress color="secondary" className={classes.progress}/>: null}
                            <Dialog
                            open={dialogVisible}
                            onClose={() => controlDialog(false)}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description">

                            <DialogTitle id="alert-dialog-title">{dialogTitle}</DialogTitle>
                            <DialogContent>
                            <DialogContentText id="alert-dialog-description">{dialogDescription}</DialogContentText>
                            </DialogContent>
                            <DialogActions>
                            <Button onClick={() => controlDialog(false)} color="primary">
                                Cancel
                            </Button>
                            <Button onClick={() => controlDialog(false)} color="primary" autoFocus>
                                Ok
                            </Button>
                            </DialogActions>
                        </Dialog>
                        <h1 className ={classes.itemTitle}>Create and Configure Replicant NFTS</h1>
                            <img src = {replicantImage} className = {classes.replicantImage}/>
                            <h1 className ={classes.itemTitle}>Kindly click on the respective buttons to create completely the Replicant Nfts</h1>
                        </Paper>
                    </Grid>
                    <Grid item xs = {6} className = {classes.centerGridItem}>
                    <Button onClick = {create16OfReplicantNFTs} variant ="contained" color="primary"  className = {classes.itemButton}>
                            Create 16 of the Replicant Nfts
                    </Button>
                    </Grid>
                    <Grid item xs = {6}  className = {classes.centerGridItem}>
                    <Button onClick = {createRemaining4OfReplicantNFTs} variant ="contained" color="primary"  className = {classes.itemButton}>
                            Create the remaining 4 of the Replicant Nfts
                    </Button>
                    </Grid>
                    

                    <Grid item xs = {6} className = {classes.centerGridItem}>
                    <Button onClick = {clawback16OfReplicantNFTs} variant ="contained" color="primary"  className = {classes.itemButton}>
                            Clawback 16 of the Replicant Nfts
                    </Button>
                    </Grid>
                    <Grid item xs = {6}  className = {classes.centerGridItem}>
                    <Button onClick = {clawbackRemaining4OfReplicantNFTs} variant ="contained" color="primary"  className = {classes.itemButton}>
                            Clawback the remaining 4 of the Replicant Nfts
                    </Button>
                    </Grid>
                </Grid>
            </div>);


   async function create16OfReplicantNFTs(){
        let myalgoconnect = new MyAlgoConnect();
        if(signerAddress.length == 0){
            setLoading(true)
            try{
                signerAddress = await isConnected(signerAddress,myalgoconnect);
            }catch(error){
                setLoading(false);
                controlDialog(true);
                setDialogTitle("Error");
                setDialogDescription(JSON.stringify(error));
                return;
            }
        }
        // if(signerAddress[0] != epochAddress){
        //     alert(`The address ${signerAddress[0].address} does not match the epoch address`);
        //     console.log(signerAddress[0])
        //     return;
        // }
        epochAddress = signerAddress[0].address;
        let params = {}
        try{
            params = await client.getTransactionParams().do();
        }catch(error){
            controlDialog(true);
            setDialogTitle("Error");
            setDialogDescription(JSON.stringify(error));
            setLoading(false);
        } 
        console.log(params);
        let txnsToSign = [];
        replicantAsaInfo.map((el,index) => {
            if(index<8){
                txnsToSign.push(createAsa(params, epochAddress, el.name, el.unit ,el.decimals, el.total, el.url, epochAddress, epochAddress, epochAddress, true, el.metadataHash, el.note))
            }  
        })
       console.log(txnsToSign.length);
       console.log(txnsToSign);

       let groupId = algosdk.computeGroupID(txnsToSign);
       txnsToSign = txnsToSign.map((el) => {
                el.group=groupId;
                return el;
                });
        let signedTxns = {};
        try{
            signedTxns =  await myalgoconnect.signTransaction(txnsToSign);
        }catch(error){
            console.error("Error ocurred ", error);
            alert(error)
            setLoading(false);
        }
        let blobs = signedTxns.map((el,index)=>{
            return el.blob
        })
        console.log(blobs);
       
        let txTest={};
        try{
            txTest=(await client.sendRawTransaction(blobs).do());
            console.log(txTest);
            setLoading(false);
            controlDialog(true);
            setDialogTitle("Transaction Success");
            setDialogDescription(JSON.stringify(`Transaction successful with transaction id: ${txTest.txId}`));
          }catch(error){
            console.error("Error ocurred ", error);
            controlDialog(true);
            setDialogTitle("Error");
            setDialogDescription(JSON.stringify(error));
            setLoading(false);
            return;
            }     
        
    }
    async function createRemaining4OfReplicantNFTs(){
        let myalgoconnect = new MyAlgoConnect();
        if(signerAddress.length == 0){
            setLoading(true)
            try{
                signerAddress = await isConnected(signerAddress,myalgoconnect);
            }catch(error){
                setLoading(false);
                controlDialog(true);
                setDialogTitle("Error");
                setDialogDescription(JSON.stringify(error));
                return;
            }
        }
        // if(signerAddress[0] != epochAddress){
        //     alert(`The address ${signerAddress[0].address} does not match the epoch address`);
        //     console.log(signerAddress[0])
        //     return;
        // }
        epochAddress = signerAddress[0].address;
        let params = {}
        try{
            params = await client.getTransactionParams().do();
        }catch(error){
            controlDialog(true);
            setDialogTitle("Error");
            setDialogDescription(JSON.stringify(error));
            setLoading(false);
        } 
        console.log(params);
        let txnsToSign = [];
        replicantAsaInfo.map((el,index) => {
            if(index >= 16 && index < 20){
                txnsToSign.push(createAsa(params, epochAddress, el.name, el.unit ,el.decimals, el.total, el.url, epochAddress, epochAddress, epochAddress, true, el.metadataHash, el.note))
            }  
        })
       console.log(txnsToSign.length);
       console.log(txnsToSign);

       let groupId = algosdk.computeGroupID(txnsToSign);
       txnsToSign = txnsToSign.map((el) => {
                el.group=groupId;
                return el;
                });
        let signedTxns = {};
        try{
            signedTxns =  await myalgoconnect.signTransaction(txnsToSign);
        }catch(error){
            console.error("Error ocurred ", error);
            alert(error)
            setLoading(false);
        }
        let blobs = signedTxns.map((el,index)=>{
            return el.blob
        })
        console.log(blobs);
       
        let txTest={};
        try{
            txTest=(await client.sendRawTransaction(blobs).do());
            console.log(txTest);
            setLoading(false);
            controlDialog(true);
            setDialogTitle("Transaction Success");
            setDialogDescription(JSON.stringify(`Transaction successful with transaction id: ${txTest.txId}`));
          }catch(error){
            console.error("Error ocurred ", error);
            controlDialog(true);
            setDialogTitle("Error");
            setDialogDescription(JSON.stringify(error));
            setLoading(false);
            return;
            }    
    }

    async function clawback16OfReplicantNFTs(){
        let myalgoconnect = new MyAlgoConnect();
        if(signerAddress.length == 0){
            setLoading(true)
            try{
                signerAddress = await isConnected(signerAddress,myalgoconnect);
            }catch(error){
                setLoading(false);
                controlDialog(true);
                setDialogTitle("Error");
                setDialogDescription(JSON.stringify(error));
                return;
            }
        }
        // if(signerAddress[0] != epochAddress){
        //     alert(`The address ${signerAddress[0].address} does not match the epoch address`);
        //     console.log(signerAddress[0])
        //     return;
        // }
        epochAddress = signerAddress[0].address;
        let params = {}
        try{
            params = await client.getTransactionParams().do();
        }catch(error){
            controlDialog(true);
            setDialogTitle("Error");
            setDialogDescription(JSON.stringify(error));
            setLoading(false);
        } 
        let txnsToSign = getAsaToClawbackInfo(params,epochAddress,epochAddress,epochAddress,epochAddress,epochAddress).map((el,index) => {
            if(index < 16){
                return el;
            }
        });
        console.log(txnsToSign.length);
        console.log(txnsToSign);
 
        let groupId = algosdk.computeGroupID(txnsToSign);
        txnsToSign = txnsToSign.map((el) => {
                 el.group=groupId;
                 return el;
                 });
         let signedTxns = {};
         try{
             signedTxns =  await myalgoconnect.signTransaction(txnsToSign);
         }catch(error){
             console.error("Error ocurred ", error);
             alert(error)
             setLoading(false);
         }
         let blobs = signedTxns.map((el,index)=>{
             return el.blob
         })
         console.log(blobs);
        
         let txTest={};
         try{
             txTest=(await client.sendRawTransaction(blobs).do());
             console.log(txTest);
             setLoading(false);
             controlDialog(true);
             setDialogTitle("Transaction Success");
             setDialogDescription(JSON.stringify(`Transaction successful with transaction id: ${txTest.txId}`));
           }catch(error){
             console.error("Error ocurred ", error);
             controlDialog(true);
             setDialogTitle("Error");
             setDialogDescription(JSON.stringify(error));
             setLoading(false);
             return;
             }    

    }
   async function clawbackRemaining4OfReplicantNFTs(){
        let myalgoconnect = new MyAlgoConnect();
        if(signerAddress.length == 0){
            setLoading(true)
            try{
                signerAddress = await isConnected(signerAddress,myalgoconnect);
            }catch(error){
                setLoading(false);
                controlDialog(true);
                setDialogTitle("Error");
                setDialogDescription(JSON.stringify(error));
                return;
            }
        }
        // if(signerAddress[0] != epochAddress){
        //     alert(`The address ${signerAddress[0].address} does not match the epoch address`);
        //     console.log(signerAddress[0])
        //     return;
        // }
        epochAddress = signerAddress[0].address;
        let params = {}
        try{
            params = await client.getTransactionParams().do();
        }catch(error){
            controlDialog(true);
            setDialogTitle("Error");
            setDialogDescription(JSON.stringify(error));
            setLoading(false);
        } 
        let txnsToSign = getAsaToClawbackInfo(params,epochAddress,epochAddress,epochAddress,epochAddress,epochAddress).map((el,index) => {
            if(index >= 16 && index < 20){
                return el;
            }
        });
        console.log(txnsToSign.length);
        console.log(txnsToSign);
 
        let groupId = algosdk.computeGroupID(txnsToSign);
        txnsToSign = txnsToSign.map((el) => {
                 el.group=groupId;
                 return el;
                 });
         let signedTxns = {};
         try{
             signedTxns =  await myalgoconnect.signTransaction(txnsToSign);
         }catch(error){
             console.error("Error ocurred ", error);
             alert(error)
             setLoading(false);
         }
         let blobs = signedTxns.map((el,index)=>{
             return el.blob
         })
         console.log(blobs);
        
         let txTest={};
         try{
             txTest=(await client.sendRawTransaction(blobs).do());
             console.log(txTest);
             setLoading(false);
             controlDialog(true);
             setDialogTitle("Transaction Success");
             setDialogDescription(JSON.stringify(`Transaction successful with transaction id: ${txTest.txId}`));
           }catch(error){
             console.error("Error ocurred ", error);
             controlDialog(true);
             setDialogTitle("Error");
             setDialogDescription(JSON.stringify(error));
             setLoading(false);
             return;
             }    
    }

}
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop:20,
      marginLeft:15,
      marginRight:15
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      height:390,
      display:"flex",
      flexDirection:"column",
      alignItems:'flex-start',
      position:'relative'
    },
    typohraphy:{
        fontSize:"1",
        color:"#000",
        textAlign:'start',
        marginTop:"15px"
    },
    horDiv:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center'
    },
    buttonDiv:{
        // border:"solid 2px #000",
        width: "100%",
        marginTop:"20px"
    },
    progress:{
        display:'flex',
        position:'absolute',
        top:"50%",
        left:'50%'

    },
    replicantImage: {
        width: '80%',
        height: '340px',
        borderRadius:'5px',
        marginTop: '0px',
        border: '5px',
        textAlign: 'center',
        borderColor: '#ff0000',
        marginLeft:'auto',
        marginRight:'auto'
    },
    itemTitle:{
        borderColor: '#ff0000',
        width:'80%',
        fontSize: '16px',
        marginTop: '8px',
        textAlign: 'center',
        color:theme.palette.primary.main,
        marginLeft:'auto',
        marginRight:'auto'
    },
    centerGridItem:{
        textAlign: 'center',
    },
    itemButton:{
        marginLeft:'auto',
        marginRight:'auto',
        width:'60%'
    }
  }));


export default ReplicantNftCreation;