import Realm from 'realm';
import ShoeModel from './ShoeModel';


const repository = new Realm({
  schema: [{
    name: 'Shoe',
    primaryKey: 'key',
    properties: {
      key: {type: 'string', indexed: true},
      shoeId: {type: 'string'},
      toe: {type: 'string'},
      tab: {type: 'string'}
    }
  }]
})


const ShoeService = {
  findAll: () => {
    return repository.objects('Shoe');
  },
  save: (shoe) => {
    repository.write(() => {
      repository.create('Shoe', shoe);
    })
  }

}

ShoeService.save(new ShoeModel(
  'E001',
  'Podbitka',
  'Cos tam'
));






module.exports = ShoeService;