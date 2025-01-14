# System Design

System design is designing application before developement process which can handle millions of user & transactions and scalable to massive amounts of traffic.

### Scalability

Scalability is the ability of system to scale as more traffic & users increases by adding servers into it.

**Terminologies :-**

- **Single server design :-** 
  
    <img src="./assets/single-server.png">

    In the single server design there is only single server which communicates through http & might have local database on it & it might go down when traffic comes to our website, if it goes down we need to setup new server with dns & etc and by recovering data from the preivous server which takes a long time.
  
- **Single server design with seprated database :-** 

  <img src="./assets/single-server-seprated-db.png">

  In this server design there is only single server but we have seprated database which is quite better than previous server design, atleast we will not use all the data, pages & etc at the same time, we can scale the database & server independently. 

  Even in this design when our database will go down our server will go down & also our application will go down eventually due to server.

**Types of server scalaings :-**

- **Vertical Scalaing :-**
    
    <img src="./assets/vertical-scaling.png">

    Instead of adding more servers, we add bigger server or bigger or virtual machine & database with more ram & space and it can go expensive very quickly but in simple way we are throwing more hardware to solve problem.

    **Pros :-**

    - Less Maintanance
    - We need to take care of only 2 things, server & db easy.

    **Cons :-**
    - When db or server goes dow we need to replace the host with something else.
    - Till the replacement of db or new server website will be down.
  
- **Horizontal Scaling with single db :-**
    
    <img src="./assets/horizontal-scaling.png">

    Instead of throwing throwing bigger server & db we add more smaller servers & connect them to ineternet through load balancer & single DB.

    `Load Balancer - Load balancer is the device which evenly distribute api requests load throuout the servers`

    **Pros :-**
    - If any server is down website will not be down.
    - Load will be distributed by observing excess capacity on the server by load balancer automatically.
    - Infinitely scalable.
  
    **Cons :-**
    - More things to maintain & more maintainance cost.

**Types of servers :-**

- **Stateless :-**
  
  A stateless server does not retain any information about previous client interactions between requests. Each request is treated as an independent transaction and is processed without knowledge of any prior state. This means that every client request must include all necessary information for the server to process it properly.

    **Example :-** HTTP is a stateless protocol, meaning that each request made by the client to the server is independent, and the server does not retain any information about previous requests.

    **Pros: -**
    
    - Scalability & easier to manage and deploy
    - No need for the server to store session data
    - Making it suitable for high-traffic environments.

    **Cons: -**
    - Limited ability to store session information
    - Requiring additional systems (like databases or tokens) to manage state.
    
    **Common Use Case :-** RESTful APIs.

- **StateFull :-**

    A stateful server, on the other hand, retains information about client interactions. It "remembers" the client's previous requests and can use that information to manage the interaction in a more customized way, typically storing session data in memory or a database.

    **Example :-** 
    - A web application that uses user login sessions—once a user logs in
    - The server remembers their credentials and preferences throughout their session.

    **Pros: -** 
    - More personalized interactions, as the server can store data such as user preferences, authentication states, and other contextual information.

    **Cons :-** 
    - It can become harder to scale since the server must maintain state across multiple requests, and session data must be properly managed (e.g., using databases or memory storage).

    **Common Use Case :-**: 
    
    - Online banking applications
    - Shopping carts in e-commerce websites.

**Where do servers come from? :-**

Server somwhere phisically exists, either within company, third party service providers data centers or etc as mentioned below.

- **Own company data center :-**
  
  If you are working in big tech companies such as amazon, google, facebook they have their own data center in different regions & thats where their servers exists.
  
- **Cloud services (Amazon EC2, Google Cloud, Azure) :-**
  
  Big data companies like Amazon, Google and others provide services for offering virtual serers which are present at their data centers to let you use their resources & they charge based on the usage.

- **Serverless services (Lambda, kinesis, athena) :-**
  
  We dont get exposure or control over phisical servers, we run small snippet of the code which decides where to execute and which server to choose for execution & they charge us based on the transaction & consumption of their services.

`Note :- This Third party servers or any kind of servers still goes down, but we need to build architecture to deal with it.`

**Database scaling (How to handle databas failures) :-**

Sometimes our database also fails over & becomes down, if it not handelled correctly we might loose all user data & our application will be destroyed.

- **Vertical Scaling :-**

  - **Cold standby :-**
  
    <img src="./assets/cold-standby.png">

    In cold standby we keep one database instance on standby on which we periodically store the database backups & we need to make sure that standby data is restored to standby databse before redirecting traffic to the standby database on failure of main.

    **Pros :-**

    - Long downtime required due to dependencies of restoring database to new host database.
    - Any data happened after the backup will be lost.

    **Cons :-**

    - Usefull when we want cheap alternative.
    - Its okay to looose some data.
    - Companies internal tools & usefull & not data intensive.

  - **Warm standby :-**
    
    <img src="./assets/warm-standby.png">
  
    In this approach we have standby database as same as previous approach but we use replication method for backup which will be realtime & we dont need to restore the data on new host when database will go down. we can direcly redirect the traffic to the standby database.

    **Pros :-**
    - Standby database always up to date with host.
    - Built-in feature in some databases.
    - Less downtime due to non-dependencies of restoring.

    **Cons :-**
    - Not much scalable as we have only one big databse rather than small parallel databases.
    
  - **Hot standby :-**

    <img src="./assets/hot-standby.png">

    In this approach we have standby database as same as previous approach but we use simultaneous writing method for backup which will be realtime & we dont need to restore the data on new host when database will go down. we can direcly redirect the traffic to the standby database.

    **Pros :-**
    - Standby database always up to date with host due to rewriting.
    - We can read from the databases as well.
    - Less downtime due to non-dependencies of restoring.

    **Cons :-**
    - Not much scalable as compared to horizontal scaling.

- **Horizontal Scaling :-**
  
  - **Sharding (SQL) :-**

    <img src="./assets/sharding.png">

    Sharding is the technique used in similar way of hot standby or warm standby but we use a shard database with its standby & we can attach n no's of databases to it, client or request router decides wheather to store the data in single shard or chunks in multiple shards & combine them when requested from client.

    **Pros :-**
    - Infinitely scalable.
    - No downtime.
  
    **Cons :-**
    - We need to optimally design system for data storage strategies.
    - It would lead more time complexity if we are performing many complex operation due to splitted data in shards.
  

  - **MongoDB architecture (NoSQL) :-**

    <img src="./assets/mongodb-architecture.png">

    In MongoDB secondary is acting as shards & there is primary server allocated to them which decides how to distribute the data across the shards. When the primary server gets down secondary elects the primary server. Config server knows whcih is primary server, which one got elected & if any one time failure there then config server plays role to set primary server across the shards by analyzing data according to servers.

    **Pros :-**
    - Highly scalable.
    - No Downtime.

    **Cons :-**
    - Architecture is itself an system design problem & complex.
    - Still there is single point of failure here.
  
    `Usefull for highly scalable applications`
  
  - **Cassandra (NoSql):-**

    <img src="./assets/cassandra.png">

    In mongodb lots of server are on standby and waiting to be host and due to its complexity is maintanibility is coslier, this problem cassandra resolve by ring system, where data is replicated across all the shards & any shard is down still other shards can serve the data without failure.

    **Pros :-**
    - Easy to maintain & simple straightforward.
    - Still scalable.

    **Cons :-**
    - data replication to all shards is overhead.
    - Due to that overhead not ideal for the read requests which called in no time after writing, because read can be reading from other shards but data is not replicated to that shard yet.

  `Still usefull for such applications where read ability is not immediately required after writing.`

**Challenges with Sharded databases :-**
- Tough to do joins on different shards, possible but not efficient.
- Resharding (When new databases added and some shards are removed but its challenging to which data has been replicated to that shared & how it will be resharded to other shareds quite complex & complicated)
- Hotspot (Celebrity problem, where some shard gets overwhelmingly traffic that traffic should be efficiently partitioned to maintain efficiency on hotspots)
- Works best with simple key/value lookups, we need to design schema without much complex joins to keep it efficient.
- Sometime formal schema may not be needed.
- Examples - MongoDB, Cassandra, DynamoDB (Aws), HBase(Hadoop Technology) 

### Normalizing & Denormalizing

<img src="./assets/normalizing & denormalizing.png">

**Normalized :-**

In the normalized settings lets consider we have very simple hotel booking application, we will create 2 tables as mentioned above one for reservation details & one for user details, whenever we want to do any operation we will fetch the primary key from the reseration table & get values from the user data return the results if get or update the data according to request.

It reqiures less storage space but more lookups & updates in single place which will be reflected everywhere.

**Denormalized :-**

In the denormalized setting within the same example we store all the data in single table, related to reservation as well as user details. It reduces no of lookups which is its benifit.

It requires more data storage & udpates are hard as we need to traverse throgh every single row & columns to find the field and update it.

`Note :- When we are in interview settings, For massive scalable application with nosql db, first we need to start with normalized & then according to requirements we can make the denormalized later if we are having performance bottleneck issues with normalized approach. Ideal answer would be according to requirements we need to analyze most of the operations made and according to them we can select the appropriate approach.`

### Data Lakes

<img src="./assets/data-lakes.png">

Throwing data into text, csv, json files at a big distributed cloud place like amazon s3 is called as data lake where big data is available but in unstructured manner.

`Amazon Glue` creates the schema for that data to make that data structured.

And we can query that data with help of `Amazon Athena (Serverless)` & `Amazon Redshift Sprectrum (Distributed data warehouse)`

### Database Selection Metrics

- **ACID Compliance (Atomicity, Consistency, Isolation & Durability) :-**

<img src="./assets/acid-compliances.png">

  - `Atomicity -` Atomicity means every database operation is atomic shoould be completed totally,it cannot be partially completed, if not totally completd then we need to roll back. ie if i need to wrote user details in db at multiple tables and fields & at some field or table it fails to write then it should rollback the completed writes and should return exceptions rather than writing the incomplete data.

  - `Consistency -` Consistency applying the rules to database means consistency in terms of `ACID`, ie if negative values are not allowed in some fields, rule should be followed consistently.'

  - `Isolation :-` No transaction should be affected by another ongoing transactions, ie if any write transaction going on any modification transaction should not happen which can lead to weird state of data. database transactions shuold be isolated.

  - `Durability :-` If any transaction is completed, its gonna be there even if systems or servers crashes immedietly after, thats means durability in terms of `ACID compliances`
  
- **CAP THEOREM (Consistency, Availability, Parition-Tolarance) :-**

    <img src="./assets/cap-theorem.png">

    CAP theorem is the database selection theorem where we stick with 2 angles of triangle by sacrificing one of the quality but nowdays some of the DB's offer 3of the benifits of CAP theorem.

    - `Consistency :-` In the CAP theorem, consistency means  we should be able to read the data as soon as its written.
  
    - `Availability :-` In the CAP theorem, availability means being server up all the time for the database operations, not having any single point of failure.
  
    - `Parition-Tolarance :-` Paritition-Tolarance is nothing but durability in terms of CAP where how much parition the database can tolerate.

    ie MYSQL is highly consistent & availble but dont have durability & paritaio tolerance in that case, we can choose MYSQL, cassandra is also highly availble due to its ring strucure & we can add n's of shareds to it but we will not get data immedietly as its written due to data-replication then we choose cassandra where consistency dont matter that much similarly decidnig factors for mongoDb, dynamodb where we can choose its features but having risk of single point of failure.

**using Cap theorem for selecting databse :-**

We need to analyze is importance & role of `consistency`, `availability` or `parition-tolarance` in our system & we need to decide on which factors we can sacrifice or adjust which 2 of them are crucial and according to that we decide our database with `CAP` theorem.


`Note :- If you are appearing interview & question asked for choosing database based on cap theorem we need to ask them question & tolerance of above factors and thats how we can choose database.`


### Caching (Execution Speed Matters within milliseconds)

Caching is crucial factors for preventing fully consuming disk space or memory, with the help of caching we can `cache or store` the frequent api results & we can return that results even without querying database again and again for same response.

**Caching layer :-**

<img src="./assets/caching-layers.png">

As you can see in the above horizontally scaled system design with big fat database, every server is hitting database which can eat whole diskspace on database. Mostly database have their own cahcing strategies but that cannot be enough.

We introduce another layers of servers which will monitor the frequent requests & their responses like `popular requets near me` & etc for that specific area we can cache such results in caching layer & we can return the results even without querying database again. 

The reason for introducing caching layer is that we can horizontally scale that caching layer as well according to requirements.

**How Caching works :-**

<img src="./assets/caching-works.png">

- Horizontally scaled caching servers serves best if we have more reading requests than write requests because as soon as write requets happen for perticular set of data it need to hit to db again & again for refreshing cached data on servers.
- We need to have hasing algorithm which returns which set of data is resting on which caching server.
- Expiration time also matters in terms of caching, because too much expiration can make cached data useless & too low will not bring much good results out of caching.
- `Hotspots (Celibrity problem)` gonna be there for but we can resolve it by assigning dedicated caching servers for such data sets or load balancing that data on different servers & navigating to those appropriate servers.
- `Cold Start (First time caching server operation)` is the problem where we have very high traffic application & caching servers will need to let those requets to db as it does not hold any data initially, but those requests are enough to crash your database. We can resolve that by pre-warming up the cache servers based on last backlogs or some specific pre-built requests which will simulates the traffic & after warming up the cache servers then only we up the system to avoid this problem.

**Eviction Policies (Removing data from cache memory or servers) :-**

<img src="./assets/eviction-policies.png">

Eviction is process for removing the data from cache servers which are not relevant anymore to prevent bloating of memory which is limited & to prevent `cache miss(Situation for non-caching frequently requested data due to full memory usage)` whihc can also lead to the database crash or disruption.

Lets learn the eviction policies for the caching servers as mentioned below.

- **LRU : Least Recently Used :-**
  
  We keep track of which most recently used items cache, as we request somthing from cache it goes in front of the list & least used items goes at end of the list, as soon as we need space we eliminate the data which are at the end.

  We can maintain the hasmap for the keys & doubly linked list attached to keys, any items requested we move that item to head of the linked list & eventually tail also get updated accordingly,frequently requested items will be at start of the linked list & as soon as new items will enter into linked list we move tail to that element by eliminating last element, if it will be used in the future cache requests it will end up at start of the list & this process will go on.

  This is used if we have bigger cache memory & large datasets.

  `Note - LRU caching is design system problem within its own & it can be asked but we can answer this with the help of above mentioned example.`

- **LFU : Least Recently Used :-**
  
  We use LFU policy if we have small dataset or cache memory where we keep track of least requested keys of items & then we remove them eventually whenever space needs to be cleared for newer items.

- **FIFO : First in first out :-**
  
  The first thing gets into our cache memory becomes the first thing to get out of cache as like list.

**Caching technologies :-**

<img src="./assets/caching-tech.png">

We have couple of different caching technologies which are widely used in industry but `Memecached & Redis` are teh mostly used caching techonologies in industry.

- **Memecached :-** Simple key value storing open source api used for caching.

- **Redis :-** Its more advanced version of caching where which supports advanced data structures, and some other advanced features like `pub/sub` where we publish the changes & subsribers get notified about it etc.


- **Ncache :-** Ncache is primarily built for `.NET` but also supports `Java & Node.js`.

- **Ehache :-** Its more java oriented caching mechanism which can be usefull if we are building applications with java.
  

- **ElastiCache :-** Its a caching mechanism provided by `AWS` which we can use if our application is built on aws, in this case we dont need to managing our cache servers & etc, they might be in same data centers where our servers are hosted. In this we get option to use Fully managed redis or memecached & we can choose accordingly.

**Content Delivery Network (CDN'S) :-**

<img src="./assets/cdn.png">

CDN is part of caching strategy if we have non-geographical depending websites, we set fleet of servers geographcally distributed to avoid latency due to server locations its accesibily from the areas around the world.

**Usecases :-**
- Static assets
  - HTML
  - CSS
  - JS
  - Images
- Libraries with exported standalone functions.  

**CDN Providers :-**

<img src="./assets/cdn-providers.png">

We can host the static files, images & etc on our application server as well or we have option to go with paid cdn providers as well which offers dynamic pricings depending on the location for cdn servers.

- AWS CloudFront
- Google Cloud CDN
- Microsoft Azure CDN
- Akamai
- CloudFlare
- etc

Among the listed cdn providers above `akamai & cloudflare` are the oldest & reputed cdn providers in industry.

### Resiliency

Resiliency is the quality of system design where how do we prevent or handle downtime for our system. We need to plan ahead such as what if server, database, internet, region, continental etc goes down & how your system handles it.

**Things that can fail :-**
- Single server.
- An entire rack.
- An entire data center (AKA "availability zone")
- An entire region
- ...anything more

We need to be prepared for every kind of point of failure for our desining system.

**How to handle resiliency :-**

<img src="./assets/handelling-resiliency.png">

The way we handle the resiliency is instead of single `Load balancer` we replace it with `Geo-Routing` which decides where the client is requesting from & which region server to redirect their requests by some dns tricks.

If the whole region goes down dns identifies that & redirects the requests to nearest possible region for fastest response & lowest latency.

**Efficient Server distribution for resiliency :-**

<img src="./assets/resiliency-server-distribution.png">

- We need to distribute our servers across multiple racks, availability zones  and regions.
- We need to make sure system has enough capacity to survive a failure at any reasonable scale.
  - This might be edge case scenario handelling where we confiure extra space servers which are also heavy on pockets but organisations like amazon, google they are willing to pay any amount for their infrastructure.
- We need to balance budget vs availability. Not every system can afford such distribution.
- Before designing system we need to ask questions to the interviewr about the budget and how much resiliency we are willing to have in our system.


### Scalaing our data

Untill now we have talked about masstive amount of transactions & scalability but big tech companies have massive amount of data as well.

In this section we will learn ways to scale the storage and access of that data in order to perform it well.

**Distributed Storage :-**

If we have massive amount of data which might not be structured but where to put this data where it is accesible, scalable without any performance bottlenecks, we need to have distributed storage solutions for it.

**How distributed storage solutions should be :-**

<img src="./assets/distributed-storage-solution.png">

- Scalable, Available, Secure & it should be fast.
- Use Cases : `Data lakes, data lakes, websites, backups, big data`
- Highly durable
- Amazon S# offers `99.99999999999%` durability. (We can choose trade-offs in s3 according to our budget)

**Amazon S3 SLA's :-**

<img src="./assets/sla-diversion.png">

- Basically Its percentile saying there is still chance of `0.000000000001%` of failure & system going down so we need to have clarity of that.
- It says almost all of the requests will be returning response within `100ms` but its also `99.9%` to keep in mind.
- Even in terms of availability if its `99.9999%` then it means only 30 seconds out of year your system might be down.
  
**Distributed Storage Solutions options :-**

<img src="./assets/dss-optinos.png">

- Amazon S3
  
   Most reliable & famous in the industry where we need to only pay based on our usage, it have different options such as `Hot (Heavily distributed, highly available & fastest execution time)`, `Cold (Bit slower than cold & not much distributed with average execution time)`  `Cold Storage (Similar to glacier which is the cheaptest option but hard to read the data from it, less reliable & slow exeuction time as compared to others)`

- Google Cloud Storage

- Microsoft Azure
- Hadoop HDFS (Self hosted, where we use own fleet of our servers)
- Consumer oriented storage solutions such as Dropbox, Google Drive, iCloud, OneDrive, etc. (But this solutions are not relevant to system design)

`Note :- We will be using relevant storage solutions according to company where we are interviewing, if at amazon then we might use AWS etc.`



