![JavaScript](https://img.shields.io/badge/JavaScript-ffd60a?style=for-the-badge&logo=JavaScript&logoColor=white)
![NodeJs](https://img.shields.io/badge/NodeJs-008000?style=for-the-badge&logo=Node.Js&logoColor=white)
![MongoDBl](https://img.shields.io/badge/MongoDB-38B000?style=for-the-badge&logo=MongoDb&logoColor=white)
![ReactJs](https://img.shields.io/badge/rEACTjs-0fa3b1?style=for-the-badge&logo=React&logoColor=white)
![SocketIO](https://img.shields.io/badge/SocketIO-353535?style=for-the-badge&logo=Socket.IO&logoColor=white)

# Instant Messaging Application
- An instant messaging web application where users can speak to each other privately with real time messages deliveries.
 
# Overview

- Real time messages deliveries.
- Private messages between users , you can only view messages between yourself and another user.
- Provides online flags for any user who is online/logged in.

# Requirements

- Node 16 and later
- MongoDb server running on port 27017

# Set-up

- Clone this repository:
 
         

            git clone https://github.com/yourusername/ChatApp


- **NB** make sure no application is running on ports 3000, 3500 and 3800 otherwise change ports before running the application
- Open three terminal windows and run the following on each.           

            cd ChatApp/socketIo
            npm install
            node index.js

            d ChatApp/chat
            npm install
            npm start

            d ChatApp/backEnd
            npm install
            node server.js
            
- The application will start at http://localhost:3000
  

# License
 Licensed under the MIT License.
