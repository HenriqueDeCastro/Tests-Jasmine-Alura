import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {

  let service: UniqueIdService = null;
  beforeEach(() => {
    service = new UniqueIdService();
  });

  it(`#${UniqueIdService.prototype.generateUniqueWithPrefix.name}
    should generate id when called with prefix`, () => {
    const id = service.generateUniqueWithPrefix('app');
    expect(id.startsWith('app-')).toBeTrue();
  });

  it(`#${UniqueIdService.prototype.generateUniqueWithPrefix.name}
    should not generate duplicate IDs when called multiple times`, () => {
    const ids = new Set();
    for (let i = 0; i < 50; i++) {
      ids.add(service.generateUniqueWithPrefix('app'));
    }
    expect(ids.size).toBe(50);
  });

  it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name}
    should return the number of generateIds when called`, () => {
    for (let i = 0; i < 50; i++) {
      service.generateUniqueWithPrefix('app');
    }
    expect(service.getNumberOfGeneratedUniqueIds()).toBe(50);
  });

  it(`#${UniqueIdService.prototype.generateUniqueWithPrefix.name}
    should throw when called with empty`, () => {
    const emptyValues = [null, undefined, '', '1'];
    emptyValues.forEach(value => {
      expect(() => service.generateUniqueWithPrefix(value))
      .withContext(`Empty value: ${value}`)
      .toThrow();
    });
  });
});
