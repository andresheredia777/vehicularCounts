
export async function getUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  return response.json();
}

export async function getConteos() {
  const response = await fetch('https://4261itmx7d.execute-api.us-west-2.amazonaws.com/dev/tesis/conteos'); 
  return response.json();
}

export async function generateCsv() {
  const response = await fetch('https://4261itmx7d.execute-api.us-west-2.amazonaws.com/dev/tesis/download'); 
  return response.json();
}
