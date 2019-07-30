
let s3Client = new AWS.S3({
  endpoint: 'http://127.0.0.1:9000',
  s3ForcePathStyle: true,
  signatureVersion: 'v4',
  accessKeyId: 'C2AHJTIPNPB7IVM3W2K2',
  secretAccessKey: 'Cuh5qgPt5gM9hpb94xIQ6rIVZzqZ0DAbsUm9+y0K'
});

button.addEventListener('click', function (event) {
  s3Client.putObject({
    Bucket: 'images',
    Key: file.name,
    Body: file,
    ContentLength: file.size,
    ContentType: file.type
  }, function (err, data) {
    console.log(err, data);
  });
});

var Minio =require('minio')

var minioClient = new minioClient({
   endPoint:'http://10.67.22.231:9000',
    port: 9000,
    useSSL: true,
    accessKey: 'C2AHJTIPNPB7IVM3W2K2',
    secretKey: 'Cuh5qgPt5gM9hpb94xIQ6rIVZzqZ0DAbsUm9+y0K'  
});

minioClient.makeBucket('images','us-east-1',function(err)){
    if (error) return console.log(err)
    console.log('Bucket created successfully')

let f=require('f');
let file = '/Downloads/kitten.jpeg';
let stream = f.createReadStream(file);

minioClient.putObject('images','kitten.jpeg',stream,function(err,etag){
    if(err) return console.log(err)
    console.log('File uploaded successfully.')
    });
}


