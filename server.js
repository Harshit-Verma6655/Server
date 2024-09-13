




const express = require('express');
const cluster = require('cluster');
const os = require('os');


const numCPUs = os.cpus().length;

if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);

    // Fork workers for each CPU core
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    
    // cluster.on('exit', (worker, code, signal) => {
    //     console.log(`Worker ${worker.process.pid} died`);
    //     console.log('Starting a new worker...');
    //     cluster.fork();
    // });

} else {
    // Workers share the same TCP connection and create an express server
    const app=require('./app');

 
    // Start the server
  
    app.listen(process.env.PORT, () => {
        console.log(`Worker ${process.pid} started on port ${process.env.PORT}`);
    });
}
