
let s3Client = new AWS.S3({
  endpoint: 'http://127.0.0.1:9000',
  s3ForcePathStyle: true,
  signatureVersion: 'v4',
  accessKeyId: '89AWLRD1P1BPUH1KLT97',
  secretAccessKey: 'NREU6gy9lL8WB3XpCZqCmJJkCYY9yFMWaYCFce2Z'
});

let imgName = document.getElementById('imgName');

console.log(imgFile);

submitBtn.addEventListener('click', function (event) {
  let imgFile = document.getElementById('imgFile').files[0];
  console.log(imgFile);

  s3Client.putObject({
    Bucket: 'images',
    Key: imgFile.name,
    Body: imgFile,
    ContentLength: imgFile.size,
    ContentType: imgFile.type
  }, function (err, data) {
    console.log(err, data);
  });

$.ajax({
  url: "http://localhost:3000/images",
  type: "POST",
  dataType: "json",
  data: {src: JSON.stringify("http://localhost:9000/images/".concat(imgFile.name)), caption: JSON.stringify(imgName)}
})
});
