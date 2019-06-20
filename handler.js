exports.handler = function(event, context, callback) {
  function timeout() {
    return new Promise(()=> {
       setTimeout(() => {
          console.log("waiting...");
       },4000);
    });
  }
  timeout()
  callback(null,"hello-world");
};

