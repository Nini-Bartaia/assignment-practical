async function deepCopyObject(obj) {
    return new Promise((resolve, reject) => {
      try {
        const serializedObj = JSON.stringify(obj);
        const deepCopy = JSON.parse(serializedObj);
        resolve(deepCopy);
      } catch (error) {
        reject(error);
      }
    });
  }

  const originalObj = {
    name: 'John',
    age: 30,
    hobbies: ['reading', 'coding']
  };
  
  deepCopyObject(originalObj)
    .then(copyObj => {
      console.log('Original Object:', originalObj);
      console.log('Deep Copy:', copyObj);
    })
    .catch(error => {
      console.log('Error:', error);
    });
  