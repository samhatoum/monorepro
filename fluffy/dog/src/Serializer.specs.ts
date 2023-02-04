import {Serializable, Serializer} from './Serializer';

class Foo {
  constructor(public readonly foo:string) {}
}

@Serializable
class Baz {
  constructor(public readonly name: string) {
  }
}

describe('Serializer', () => {
  describe('Serializable decorator', () => {
    it('should register decorated classes as types', () => {
      const blob = new Serializer().serialize(new Baz('hey!'))
      const baz = new Serializer().deserialize(blob, 'Baz');

      expect(baz instanceof Baz).toEqual(true);
      expect(baz.name).toEqual('hey!');
    });
  });
  describe('serialize & deserialize', () => {
    it('should deserialize known types', () => {
      new Serializer().registerType(Foo);
      const blob = new Serializer().serialize(new Foo('bar'))

      const result = new Serializer().deserialize(blob, 'Foo');

      expect(result instanceof Foo).toEqual(true);
      expect(result.foo).toEqual('bar');
    });
    it('should return null when an object cannot be serialized', function () {
      const result = new Serializer().deserialize({bar: 'baz'}, 'bar')
      expect(result).toEqual(null);
    });
  });
});
