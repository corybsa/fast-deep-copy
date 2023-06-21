export class Helper {
    private static visited = Symbol('visited');

  /**
   * Creates a deep copy of {@link object}.
   *
   * @param object any
   * @returns {any} a copy of {@link object}.
   */
  static copy(object: any): any {
    if (object instanceof Date) {
      return new Date(object.getTime());
    } else if (object instanceof Array) {
      const target = [];

      for (const obj of object) {
        target.push(Helper.copy(obj));
      }

      return target;
    } else if (object instanceof Object) {
      if(object[this.visited]) {
        object[this.visited] = false;
        return object;
      }

      object[this.visited] = true;
      const target: { [key: string]: any[] } = {};

      for (const prop in object) {
        if (object.hasOwnProperty(prop)) {
          target[prop] = Helper.copy(object[prop]);
        }
      }

      return target;
    } else {
      // it's a primitive
      return object;
    }
  }
}
