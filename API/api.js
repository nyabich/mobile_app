export function inscriptionAPI (valeurs) {

    return fetch('http://192.168.43.186:8000/api/client', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(valeurs),
        
      })
      
      
  }