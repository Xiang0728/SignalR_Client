import * as signalR from '@aspnet/signalr'
export const signal = new signalR.HubConnectionBuilder()
    .withUrl('https://localhost:44375/ChatHub', {})
    .build()
 
    
/* const signalr = function () {
  var hub
  if (hub === undefined) {
    hub = signal
  }
  return hub
} */
//  重新連線
/* async function start () {
  try {
    await signal.start()
    console.log('connected')
  } catch (err) {
    console.log(err)
    setTimeout(() => start(), 5000)
  }
}
 
signal.onclose(async () => {
  await start()
})*/

