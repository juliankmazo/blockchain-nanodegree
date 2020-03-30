import { Block } from './block';

const block = new Block('Test block');

block
  .generateHash()
  .then(result => {
    console.log(`Block hash: ${result.hash}`);
    console.log(`Block: ${JSON.stringify(result, null, 2)}`);
  })
  .catch(error => console.log(error));
