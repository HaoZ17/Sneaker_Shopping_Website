Front-End Deployment in AWS (Angular)
- In angular folder, type “ng build --prod ” which will output some configuration files in ‘dist’ folder on terminal.
- Open AWS website, Search S3(Amazon simple storage service), Build a bucket which is edited public access.
- Open bucket, upload all of configuration files in the overview page.
- Open properties, click ‘static website hosting’, set ‘Use this bucket to host a website’ and type ‘index.html’ as index document.
- Click Endpoint to open the webpage.
Import P5.js library (which is library we used in game) to angular framework.
- type ‘npm install p5 -- save’ in terminal.
- type ‘npm install @types/p5 –save -dev’
- add root to scripts bracket in angular_cli. json file.
- ‘ng build’ angular project.
Back-End Deployment in Azure (ASP.NET core)
- Use “publish to Azure” to publish it to your account
link: http://6250finalprojectangular.s3-website-us-east-1.amazonaws.com/