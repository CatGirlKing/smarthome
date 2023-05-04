  fetch('http://172.25.189.103:5000/api-url')
  .then(response => response.json())
  .then(data => {
    console.log(data.url);
    // 在这里使用返回的URL
  })
  .catch(error => {
    console.error(error);
  });
  