import lunr from 'lunr';

const documents = [
  {
    name: 'Lunr',
    text: 'Like Solr, but much smaller, and not as bright.',
  },
  {
    name: 'React',
    text: 'A JavaScript library for building user interfaces.',
  },
  {
    name: 'Lodash',
    text:
      'A modern JavaScript utility library delivering modularity, performance & extras.',
  },
];

const idx = lunr(function () {
  this.ref('name');
  this.field('text');

  this.metadataWhitelist = ['position'];

  function add(this: lunr.Builder, doc: typeof documents[number]) {
    this.add(doc);
  }

  documents.forEach(add, this);
});

const brightFirst = idx.search('bright')?.[0];
const lightFirst = idx.search('light')?.[0];
const moduleFirst = idx.search('module~2')?.[0];
const modularFirst = idx.search('modular')?.[0];

console.log(JSON.stringify(brightFirst?.matchData?.metadata));
console.log(JSON.stringify(lightFirst?.matchData?.metadata));
console.log(JSON.stringify(moduleFirst?.matchData?.metadata));
console.log(JSON.stringify(modularFirst?.matchData?.metadata));
