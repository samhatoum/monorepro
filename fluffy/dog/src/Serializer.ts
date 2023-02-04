declare let global: any;

export class Serializer {
  constructor() {
    if (global.___serializerTypes === undefined) global.___serializerTypes = {};
  }

  registerType(type): void {
    global.___serializerTypes[type.name] = type.prototype;
  }

  serialize(obj): Record<string, number | unknown> | string {
    return structuredClone(obj);
  }

  deserialize(data, type): any {
    if (global.___serializerTypes[type] === undefined)
      return null;

    return Object.assign(Object.create(global.___serializerTypes[type]), data);
  }
}

export function Serializable<T extends { new(...args: any[]): {} }>(constructor: T) {
  new Serializer().registerType(constructor);
}
