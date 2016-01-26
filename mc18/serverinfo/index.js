MinecraftAPI.getServerStatus('s7.hosthorde.com', {
  port: 26297
}, function(err, status) {
  if (err) {
    return document.querySelector('#motd').innerHTML = 'Error loading status';
  }
  console.log(motd);
});