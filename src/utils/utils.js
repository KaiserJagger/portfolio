// En un archivo util.js (o cualquier otro nombre que elijas)
export function typeItOut(text, speed) {
    return new Promise((resolve) => {
      let i = 0;
      function typeNextChar() {
        if (i < text.length) {
          document.getElementsByClassName('demo')[0].innerHTML += text.charAt(i);
          i++;
          setTimeout(typeNextChar, speed);
        } else {
          resolve();
        }
      }
      typeNextChar();
    });
  }
  
  export function writeSkills() {
    if (document.getElementsByClassName('demo').length > 0) {
      let txt = `Crafting High-Performance Web Systems`;
      let speed = 60;
      //   document.getElementsByClassName('demo')[0].innerHTML = '';
      typeItOut(txt, speed)
        .then(() => {
          return new Promise((resolve) => {
            setTimeout(() => {
              document.getElementsByClassName('demo')[0].innerHTML = 'kaiserjagger~ $ ';
              resolve();
            }, 1800);
          });
        })
        .then(() => {
          return writeSkills();
        });
    }
  }
  
  
  