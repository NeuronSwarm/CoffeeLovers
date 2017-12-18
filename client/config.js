var url;
if(process.env.NODE_ENV == 'production'){
  url = 'https://techdrone.us'
}
else {
  url = 'http://localhost:3000'
}
export default {
  site: {
    url: url
  }
}