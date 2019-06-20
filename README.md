# AWS Lambda and the Serverless Framework - Hands On Learning!
## Udemy Course
## lambda-serveless-thumbnail



### Step 1: Install node



### Step 2: Install serverless
npm install -g serverless



### Step 3: Setup serverless
npm run sls

serverless config credentials --provider aws --key XXX --secret YYY --profile serverless-admin



### Step 4 : Deploy
npm run sls-deploy

sls deploy -v



### Commands
#### Invoke
Invoke function in command line

serverless invoke -f hello -l


#### Deploy Function
Deploy just a function, not an entire stack

serverless deploy function -f hello


#### Logs
Watch log in command line

serverless logs -f hello -t


#### Remove
Remove entire stack in command line

serverless remove

