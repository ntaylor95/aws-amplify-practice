# When you initialize a new Amplify project (> amplify init), a few things happen:

* It creates a top level directory called amplify that stores your backend definition. During the tutorial you’ll add capabilities such as authentication, GraphQL API, storage, and set up authorization rules for the API. As you add features, the amplify folder will grow with infrastructure-as-code templates that define your backend stack. Infrastructure-as-code is a best practice way to create a replicable backend stack.
* It creates a file called aws-exports.js in the src directory that holds all the configuration for the services you create with Amplify. This is how the Amplify client is able to get the necessary information about your backend services.
* It modifies the .gitignore file, adding some generated files to the ignore list
* A cloud project is created for you in the AWS Amplify Console that can be accessed by running "> amplify console". The Console provides a list of backend environments, deep links to provisioned resources per Amplify category, status of recent deployments, and instructions on how to promote, clone, pull, and delete backend resources

# Open Amplify in the console
> amplify console

# Adding APIs

1. > amplify add <api, auth, >

# Deployment

1. > amplify add hosting
    a. "Select a plugin module to execute": 
        1) Cloudfront and S3
        2) Managed hosting with custom domains, Continuous deployment
    b. Choose a type: 
        1) Manual Deployment 
        2) Continuous with GitHub

2. > amplify publish

3. url for this app is https://dev.d1um6m4pojblik.amplifyapp.com

4. Whenever you have additional changes to publish, just re-run the amplify publish command

5. to find the URL via the Console... open the AWS Amplify console and go to 
   App Settings -> Domain Management

# Adding environments

1. 
